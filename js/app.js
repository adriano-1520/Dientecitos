document.addEventListener("DOMContentLoaded", () => {
  const state = {
    currentSeriesId: "anatomia-general",
    showLabels: true,
    quizMode: false,
    customMarkers: []
  };

  const svgLayer = document.getElementById("svg-layer");
  const leaderSvg = document.getElementById("leader-lines-svg");
  const labelsLayer = document.getElementById("labels-layer");
  const layersSwitchList = document.getElementById("layers-switch-list");
  const thumbnailsBar = document.getElementById("thumbnails-bar");
  const headerSeriesName = document.getElementById("header-series-name");
  const sidebarSeriesBadge = document.getElementById("sidebar-series-badge");

  // Tarjeta de información inferior
  const infoDot = document.getElementById("info-dot");
  const infoTitle = document.getElementById("info-title");
  const infoDesc = document.getElementById("info-desc");

  // Obtener serie actual
  function getCurrentSeries() {
    return DIENTECITOS_DATA.series.find(s => s.id === state.currentSeriesId);
  }

  // 1. Renderizar Miniaturas de la Galería Inferior (Estilo IMAIOS)
  function renderThumbnails() {
    thumbnailsBar.innerHTML = "";
    DIENTECITOS_DATA.series.forEach((series) => {
      const card = document.createElement("div");
      card.className = `thumb-card ${series.id === state.currentSeriesId ? "active" : ""}`;
      card.innerHTML = `
        <span class="thumb-preview">${series.icon}</span>
        <span class="thumb-title">${series.title}</span>
      `;
      card.addEventListener("click", () => {
        state.currentSeriesId = series.id;
        renderThumbnails();
        loadSeriesWorkspace();
      });
      thumbnailsBar.appendChild(card);
    });
  }

  // 2. Cargar Workspace de la Serie
  function loadSeriesWorkspace() {
    const series = getCurrentSeries();
    headerSeriesName.textContent = `${series.title} (${series.subtitle})`;
    sidebarSeriesBadge.textContent = series.title;

    // Cargar SVG
    svgLayer.innerHTML = DIENTECITOS_SVGS[series.svgKey] || "";

    // Vincular eventos hover a zonas SVG
    svgLayer.querySelectorAll(".anat-zone").forEach(zone => {
      const structId = zone.getAttribute("data-id");
      zone.addEventListener("mouseenter", () => highlightStructure(structId, true));
      zone.addEventListener("mouseleave", () => highlightStructure(structId, false));
    });

    renderStructureSwitches(series);
    renderLeaderLinesAndLabels(series);
  }

  // 3. Renderizar Interruptores de Capas en el Panel Derecho (Estilo IMAIOS)
  function renderStructureSwitches(series) {
    layersSwitchList.innerHTML = "";
    series.structures.forEach(st => {
      const row = document.createElement("div");
      row.className = "layer-switch-row";
      row.innerHTML = `
        <span style="border-left: 3px solid ${st.color}; padding-left: 6px;">${st.name}</span>
        <label class="switch">
          <input type="checkbox" checked data-id="${st.id}">
          <span class="slider-round"></span>
        </label>
      `;

      const checkbox = row.querySelector("input");
      checkbox.addEventListener("change", () => {
        renderLeaderLinesAndLabels(series);
      });

      layersSwitchList.appendChild(row);
    });
  }

  // 4. Renderizar Líneas Directrices y Etiquetas en la Pizarra
  function renderLeaderLinesAndLabels(series) {
    leaderSvg.innerHTML = "";
    labelsLayer.innerHTML = "";

    if (!state.showLabels) return;

    // Obtener qué estructuras están activas mediante los switches
    const activeCheckboxes = {};
    layersSwitchList.querySelectorAll("input[type='checkbox']").forEach(cb => {
      activeCheckboxes[cb.getAttribute("data-id")] = cb.checked;
    });

    series.structures.forEach(st => {
      if (activeCheckboxes[st.id] === false) return;

      // Línea guía
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("class", "leader-group");
      g.setAttribute("data-id", st.id);

      const elbowX = st.side === "left" ? st.pinX - 110 : st.pinX + 110;
      const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polyline.setAttribute("class", "leader-polyline");
      polyline.setAttribute("points", `${st.pinX + (st.side === "left" ? -110 : 110)},${st.pinY} ${st.pinX},${st.pinY}`);
      polyline.setAttribute("stroke", st.color);

      const pinCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      pinCircle.setAttribute("class", "leader-pin");
      pinCircle.setAttribute("cx", st.pinX);
      pinCircle.setAttribute("cy", st.pinY);
      pinCircle.setAttribute("r", 5.5);
      pinCircle.setAttribute("fill", st.color);

      g.appendChild(polyline);
      g.appendChild(pinCircle);
      leaderSvg.appendChild(g);

      // Etiqueta HTML
      const badge = document.createElement("div");
      badge.className = "board-label";
      badge.setAttribute("data-id", st.id);
      badge.style.left = `${st.side === "left" ? st.pinX - 120 : st.pinX + 120}px`;
      badge.style.top = `${st.pinY}px`;
      badge.style.setProperty("--item-color", st.color);

      if (state.quizMode) {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "quiz-input";
        input.placeholder = "Escribe parte...";
        badge.appendChild(input);
      } else {
        badge.textContent = st.name;
      }

      badge.addEventListener("mouseenter", () => highlightStructure(st.id, true));
      badge.addEventListener("mouseleave", () => highlightStructure(st.id, false));

      labelsLayer.appendChild(badge);
    });
  }

  // 5. Destacar Estructura (Hover Sincronizado IMAIOS)
  function highlightStructure(structId, isActive) {
    const series = getCurrentSeries();
    const st = series.structures.find(s => s.id === structId);
    if (!st) return;

    // Zona SVG
    svgLayer.querySelectorAll(".anat-zone").forEach(zone => {
      if (zone.getAttribute("data-id") === structId && isActive) {
        zone.style.setProperty("--item-color", st.color);
        zone.classList.add("highlighted");
      } else if (zone.getAttribute("data-id") === structId && !isActive) {
        zone.classList.remove("highlighted");
      }
    });

    // Líneas y Etiquetas
    leaderSvg.querySelectorAll(".leader-group").forEach(group => {
      const gid = group.getAttribute("data-id");
      if (!isActive) group.classList.remove("active", "dimmed");
      else if (gid === structId) { group.classList.add("active"); group.classList.remove("dimmed"); }
      else { group.classList.add("dimmed"); group.classList.remove("active"); }
    });

    labelsLayer.querySelectorAll(".board-label").forEach(label => {
      const lid = label.getAttribute("data-id");
      if (!isActive) label.classList.remove("active", "dimmed");
      else if (lid === structId) { label.classList.add("active"); label.classList.remove("dimmed"); }
      else { label.classList.add("dimmed"); label.classList.remove("active"); }
    });

    // Tarjeta inferior
    if (isActive) {
      infoDot.style.backgroundColor = st.color;
      infoTitle.textContent = st.name;
      infoDesc.textContent = st.desc;
    }
  }

  // 6. Pestañas del Panel Derecho
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.getAttribute("data-tab")}`).classList.add("active");
    });
  });

  // Botón Ocultar / Mostrar Etiquetas
  document.getElementById("btn-toggle-labels").addEventListener("click", (e) => {
    state.showLabels = !state.showLabels;
    e.currentTarget.classList.toggle("active", state.showLabels);
    renderLeaderLinesAndLabels(getCurrentSeries());
  });

  // Modo Quiz Toggle
  document.getElementById("quiz-mode-toggle").addEventListener("change", (e) => {
    state.quizMode = e.target.checked;
    renderLeaderLinesAndLabels(getCurrentSeries());
  });

  // Galería Modal
  const galleryModal = document.getElementById("gallery-modal");
  document.getElementById("btn-toggle-gallery").addEventListener("click", () => {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";
    DIENTECITOS_DATA.series.forEach((s, idx) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `<span>${s.icon}</span><p>Img ${idx+1}: ${s.title}</p>`;
      item.addEventListener("click", () => {
        state.currentSeriesId = s.id;
        galleryModal.classList.add("hidden");
        renderThumbnails();
        loadSeriesWorkspace();
      });
      grid.appendChild(item);
    });
    galleryModal.classList.remove("hidden");
  });

  document.getElementById("close-gallery").addEventListener("click", () => {
    galleryModal.classList.add("hidden");
  });

  // Inicializar
  renderThumbnails();
  loadSeriesWorkspace();
});