document.addEventListener('DOMContentLoaded', () => {
  let currentViewKey = 'vestibular';
  let activeStructures = new Set();
  let labelsVisible = true;
  let quizActive = false;
  let quizTarget = null;
  let quizHits = 0;
  let quizTotal = 0;

  // Referencias del DOM
  const svgStage = document.getElementById('svg-stage');
  const structureListEl = document.getElementById('structure-list');
  const seriesTitleEl = document.getElementById('current-series-title');
  const sidebarBadgeEl = document.getElementById('sidebar-badge');
  const btnToggleAll = document.getElementById('btn-toggle-all');
  const btnLabels = document.getElementById('btn-labels');
  const infoNameEl = document.getElementById('info-name');
  const infoDescEl = document.getElementById('info-description');
  const infoDotEl = document.getElementById('info-dot');

  // Inicializar vista por defecto
  function loadView(viewKey) {
    currentViewKey = viewKey;
    const viewData = DENTAL_VIEWS[viewKey];

    seriesTitleEl.textContent = viewData.title;
    sidebarBadgeEl.textContent = viewData.badge;
    infoNameEl.textContent = viewData.defaultName;
    infoDescEl.textContent = viewData.defaultDesc;
    infoDotEl.style.background = '#10b981';

    // Inyectar SVG
    svgStage.innerHTML = ILLUSTRATIONS[viewKey];

    // Activar todas las estructuras por defecto
    activeStructures = new Set(viewData.structures.map(s => s.id));
    renderSidebarList(viewData.structures);
    bindSvgEvents(viewData);
    syncLabelsVisibility();
  }

  // Renderizar lista lateral de estructuras con su switch
  function renderSidebarList(structures) {
    structureListEl.innerHTML = '';

    structures.forEach(item => {
      const isOn = activeStructures.has(item.id);
      const li = document.createElement('li');
      li.className = 'structure-item';
      li.dataset.structure = item.id;

      li.innerHTML = `
        <div class="structure-label">
          <span class="color-bar" style="background: ${item.color}"></span>
          <span>${item.name}</span>
        </div>
        <div class="toggle-switch ${isOn ? 'on' : ''}"></div>
      `;

      // Clic para activar/desactivar etiqueta individual
      li.addEventListener('click', () => {
        if (activeStructures.has(item.id)) {
          activeStructures.delete(item.id);
        } else {
          activeStructures.add(item.id);
        }
        renderSidebarList(structures);
        syncLabelsVisibility();
      });

      // Hover en el menú resalta la parte en el diente
      li.addEventListener('mouseenter', () => highlightStructure(item.id, true));
      li.addEventListener('mouseleave', () => highlightStructure(item.id, false));

      structureListEl.appendChild(li);
    });

    btnToggleAll.textContent =
      activeStructures.size === structures.length ? 'Deseleccionar todo' : 'Seleccionar todo';
  }

  // Sincronizar qué etiquetas se ven en el SVG
  function syncLabelsVisibility() {
    const callouts = svgStage.querySelectorAll('.callout-group');
    callouts.forEach(group => {
      const id = group.dataset.structure;
      const shouldShow = labelsVisible && !quizActive && activeStructures.has(id);
      group.classList.toggle('hidden-label', !shouldShow);
    });
  }

  // Resaltar estructura y actualizar tarjeta inferior
  function highlightStructure(structureId, isEntering) {
    const viewData = DENTAL_VIEWS[currentViewKey];
    const structObj = viewData.structures.find(s => s.id === structureId);

    const regions = svgStage.querySelectorAll(`.anat-region[data-structure="${structureId}"]`);
    regions.forEach(r => r.classList.toggle('highlighted', isEntering));

    const listItem = structureListEl.querySelector(`.structure-item[data-structure="${structureId}"]`);
    if (listItem) listItem.classList.toggle('active-hover', isEntering);

    if (isEntering && structObj) {
      infoNameEl.textContent = structObj.name;
      infoDescEl.textContent = structObj.description;
      infoDotEl.style.background = structObj.color;
    }
  }

  // Eventos sobre las partes del diente y etiquetas del SVG
  function bindSvgEvents(viewData) {
    const interactiveElements = svgStage.querySelectorAll('.anat-region, .callout-group');

    interactiveElements.forEach(el => {
      const id = el.dataset.structure;
      if (!id) return;

      el.addEventListener('mouseenter', () => highlightStructure(id, true));
      el.addEventListener('mouseleave', () => highlightStructure(id, false));

      el.addEventListener('click', () => {
        if (quizActive) {
          handleQuizAttempt(id);
        } else {
          highlightStructure(id, true);
        }
      });
    });
  }

  // Botón Seleccionar / Deseleccionar todo
  btnToggleAll.addEventListener('click', () => {
    const structures = DENTAL_VIEWS[currentViewKey].structures;
    if (activeStructures.size === structures.length) {
      activeStructures.clear();
    } else {
      activeStructures = new Set(structures.map(s => s.id));
    }
    renderSidebarList(structures);
    syncLabelsVisibility();
  });

  // Botón global de Etiquetas en la barra superior
  btnLabels.addEventListener('click', () => {
    labelsVisible = !labelsVisible;
    btnLabels.classList.toggle('active', labelsVisible);
    syncLabelsVisibility();
  });

  // Cambio de vistas (Miniaturas abajo a la izquierda)
  document.querySelectorAll('.view-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-thumb').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadView(btn.dataset.view);
    });
  });

  // Cambio de pestañas en el menú derecho
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // ================= PIZARRA DE DIBUJO =================
  const canvas = document.getElementById('drawing-board');
  const ctx = canvas.getContext('2d');
  const btnDrawToggle = document.getElementById('btn-draw-toggle');
  const btnClearBoard = document.getElementById('btn-clear-board');
  const drawColorInput = document.getElementById('draw-color');
  const drawSizeInput = document.getElementById('draw-size');
  let drawingEnabled = false;
  let isPainting = false;

  function resizeCanvas() {
    const area = document.getElementById('canvas-area');
    canvas.width = area.clientWidth;
    canvas.height = area.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  btnDrawToggle.addEventListener('click', () => {
    drawingEnabled = !drawingEnabled;
    canvas.classList.toggle('drawing-active', drawingEnabled);
    btnDrawToggle.textContent = drawingEnabled ? '🛑 Desactivar Lápiz' : '✏️ Activar Lápiz';
  });

  btnClearBoard.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  canvas.addEventListener('mousedown', e => {
    if (!drawingEnabled) return;
    isPainting = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('mousemove', e => {
    if (!drawingEnabled || !isPainting) return;
    ctx.strokeStyle = drawColorInput.value;
    ctx.lineWidth = drawSizeInput.value;
    ctx.lineCap = 'round';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  });

  window.addEventListener('mouseup', () => {
    isPainting = false;
  });

  // ================= MODO QUIZ =================
  const btnStartQuiz = document.getElementById('btn-start-quiz');
  const quizBanner = document.getElementById('quiz-banner');
  const quizPrompt = document.getElementById('quiz-prompt');
  const quizScore = document.getElementById('quiz-score');

  btnStartQuiz.addEventListener('click', () => {
    quizActive = !quizActive;
    quizBanner.classList.toggle('hidden', !quizActive);
    btnStartQuiz.textContent = quizActive ? '⏹️ Terminar Quiz' : '🎯 Iniciar Quiz Anatómico';
    quizHits = 0;
    quizTotal = 0;
    syncLabelsVisibility();
    if (quizActive) nextQuizQuestion();
  });

  function nextQuizQuestion() {
    const structures = DENTAL_VIEWS[currentViewKey].structures;
    quizTarget = structures[Math.floor(Math.random() * structures.length)];
    quizPrompt.innerHTML = `Selecciona en el diente: <strong>${quizTarget.name}</strong>`;
    quizScore.textContent = `Aciertos: ${quizHits}/${quizTotal}`;
  }

  function handleQuizAttempt(clickedId) {
    quizTotal++;
    if (clickedId === quizTarget.id) {
      quizHits++;
    }
    nextQuizQuestion();
  }

  // Cargar la vista inicial
  loadView('vestibular');
});