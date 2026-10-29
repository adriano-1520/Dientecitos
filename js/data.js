const DIENTECITOS_DATA = {
  series: [
    {
      id: "anatomia-general",
      title: "Anatomía general",
      subtitle: "Vista vestibular",
      icon: "🦷",
      svgKey: "diente-general",
      structures: [
        { id: "apex-cuspide", name: "Apex de la cúspide", category: "Cúspides de los dientes", color: "#2563eb", pinX: 520, pinY: 78, side: "right", desc: "Punto más elevado de la cúspide dentaria." },
        { id: "cuspide", name: "Cúspide", category: "Cúspides de los dientes", color: "#2563eb", pinX: 470, pinY: 108, side: "right", desc: "Elevación piramidal en la superficie oclusal de los dientes posteriores." },
        { id: "corona", name: "Corona", category: "Estructura de los dientes", color: "#0891b2", pinX: 510, pinY: 152, side: "right", desc: "La corona del diente es una de las tres porciones de las que consta un diente. Esta se proyecta por encima del periodonto de protección." },
        { id: "diente", name: "Diente", category: "Estructura de los dientes", color: "#0891b2", pinX: 435, pinY: 235, side: "right", desc: "Estructura dura compuesta por esmalte, dentina y pulpa para la masticación." },
        { id: "cuello", name: "Cuello", category: "Estructura de los dientes", color: "#0891b2", pinX: 525, pinY: 305, side: "right", desc: "Línea cervical de transición entre la corona y la raíz dentaria." },
        { id: "raiz", name: "Raíz del diente", category: "Raíces del diente", color: "#d97706", pinX: 545, pinY: 412, side: "right", desc: "Porción del diente alojada en el hueso alveolar cubierta por cemento." },
        { id: "apex-raiz", name: "Apex de la raíz", category: "Raíces del diente", color: "#d97706", pinX: 575, pinY: 535, side: "right", desc: "Extremo terminal de la raíz dentaria donde se ubica el foramen apical." }
      ]
    },
    {
      id: "cavidad-oral",
      title: "Cavidad oral",
      subtitle: "Vista frontal completa",
      icon: "👄",
      svgKey: "cavidad-oral",
      structures: [
        { id: "labio-sup", name: "Labio Superior", category: "Cavidad oral", color: "#e05670", pinX: 500, pinY: 92, side: "left", desc: "Pliegue músculofibroso superior que delimita el vestíbulo bucal." },
        { id: "paladar-duro", name: "Paladar Duro", category: "Cavidad oral", color: "#3b82f6", pinX: 465, pinY: 235, side: "left", desc: "Techo óseo de la cavidad oral revestido por mucosa masticatoria." },
        { id: "uvula", name: "Úvula Palatina", category: "Cavidad oral", color: "#9333ea", pinX: 500, pinY: 375, side: "right", desc: "Proyección cónica media del velo del paladar." },
        { id: "lengua", name: "Dorso de la Lengua", category: "Cavidad oral", color: "#d97706", pinX: 500, pinY: 480, side: "left", desc: "Órgano muscular tapizado por papilas gustativas." }
      ]
    },
    {
      id: "arco-maxilar",
      title: "Arco dental maxilar",
      subtitle: "Arcada superior",
      icon: "🦷",
      svgKey: "arco-maxilar",
      structures: [
        { id: "incisivo-max", name: "Incisivos Centrales Superiores", category: "Nomenclatura dental", color: "#16a34a", pinX: 500, pinY: 180, side: "left", desc: "Dientes anteriores encargados de la incisión de los alimentos." },
        { id: "molar-max", name: "Primer Molar Superior", category: "Nomenclatura dental", color: "#16a34a", pinX: 340, pinY: 340, side: "left", desc: "Diente posterior multiarticular con 3 raíces para la molienda." }
      ]
    }
  ]
};

const DIENTECITOS_SVGS = {
  "diente-general": `
    <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
      <!-- Cúspides -->
      <path class="anat-zone" data-id="apex-cuspide" d="M410,120 L440,75 L480,105 Z" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <path class="anat-zone" data-id="cuspide" d="M370,140 C410,90 480,90 520,140 C480,165 410,165 370,140 Z" fill="#fffdf9" stroke="#cbbba0" stroke-width="2.5"/>
      
      <!-- Corona -->
      <path class="anat-zone" data-id="corona" d="M345,155 C325,230 355,300 415,315 C460,325 510,305 530,230 C545,170 515,120 450,115 C390,110 355,130 345,155 Z" fill="#fffefb" stroke="#bfa984" stroke-width="3"/>
      
      <!-- Diente (Cuerpo general) -->
      <ellipse class="anat-zone" data-id="diente" cx="440" cy="225" rx="55" ry="50" fill="none" stroke="transparent" />

      <!-- Cuello -->
      <line class="anat-zone" data-id="cuello" x1="412" y1="315" x2="528" y2="315" stroke="#a18255" stroke-width="5" stroke-linecap="round"/>

      <!-- Raíces -->
      <path class="anat-zone" data-id="raiz" d="M415,315 C395,430 360,560 375,600 C390,640 435,630 445,550 C465,420 500,350 528,315 C510,410 495,540 510,590 C525,640 565,635 580,575 C605,450 560,325 528,315 Z" fill="#fde68a" stroke="#c4b293" stroke-width="3"/>

      <!-- Apex de la raíz -->
      <circle class="anat-zone" data-id="apex-raiz" cx="385" cy="585" r="14" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
      <circle class="anat-zone" data-id="apex-raiz" cx="545" cy="565" r="14" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
    </svg>
  `,
  "cavidad-oral": `
    <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
      <path class="anat-zone" data-id="labio-sup" d="M350,180 C400,100 600,100 650,180 C600,140 400,140 350,180 Z" fill="#e05670" stroke="#b5485e" stroke-width="3"/>
      <path class="anat-zone" data-id="paladar-duro" d="M400,220 C430,170 570,170 600,220 C550,250 450,250 400,220 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3"/>
      <circle class="anat-zone" data-id="uvula" cx="500" cy="375" r="18" fill="#9333ea" stroke="#6b21a8" stroke-width="2.5"/>
      <ellipse class="anat-zone" data-id="lengua" cx="500" cy="480" rx="120" ry="85" fill="#d97706" stroke="#b45309" stroke-width="3"/>
    </svg>
  `,
  "arco-maxilar": `
    <svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
      <path class="anat-zone" data-id="incisivo-max" d="M470,150 L530,150 L520,250 L480,250 Z" fill="#16a34a" stroke="#14532d" stroke-width="3"/>
      <path class="anat-zone" data-id="molar-max" d="M310,310 L390,310 L370,410 L330,410 Z" fill="#16a34a" stroke="#14532d" stroke-width="3"/>
    </svg>
  `
};