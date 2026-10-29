const ILLUSTRATIONS = {
  vestibular: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Degradado de la Corona (Esmalte dental) -->
        <linearGradient id="enamelGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stop-color="#fffef0" />
          <stop offset="30%" stop-color="#f6f1df" />
          <stop offset="70%" stop-color="#e5dcbe" />
          <stop offset="100%" stop-color="#cfc39e" />
        </linearGradient>

        <!-- Sombreado superior de las cúspides -->
        <linearGradient id="cuspTop" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stop-color="#b5a782" />
          <stop offset="100%" stop-color="#e5dcbe" stop-opacity="0" />
        </linearGradient>

        <!-- Degradado de la Raíz (Cemento / Dentina radicular) -->
        <linearGradient id="rootGrad" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="#e1c172" />
          <stop offset="35%" stop-color="#f5e1a4" />
          <stop offset="70%" stop-color="#d4b05a" />
          <stop offset="100%" stop-color="#b38a35" />
        </linearGradient>
      </defs>

      <!-- ================= ILUSTRACIÓN ANATÓMICA DEL DIENTE ================= -->
      <g id="tooth-artwork">
        <!-- RAÍCES BIFURCADAS -->
        <g class="anat-region" data-structure="raiz">
          <!-- Raíz mesial y distal con sus contornos naturales -->
          <path d="M 330 270 
                   C 335 370, 315 480, 295 580 
                   C 280 645, 275 685, 295 700 
                   C 315 715, 335 690, 350 630 
                   C 375 540, 395 440, 420 375
                   C 428 360, 435 365, 442 385
                   C 465 440, 485 540, 505 625
                   C 520 685, 545 710, 565 695
                   C 585 680, 575 635, 560 570
                   C 535 470, 510 370, 505 275
                   Z"
                fill="url(#rootGrad)"
                stroke="#2b2114"
                stroke-width="3.5"
                stroke-linejoin="round" />
          <!-- Sombra central de bifurcación -->
          <path d="M 420 375 C 410 340, 435 320, 450 345 C 460 365, 442 385, 420 375 Z" fill="#9e792c" opacity="0.6" />
        </g>

        <!-- CORONA CLÍNICA -->
        <g class="anat-region" data-structure="corona">
          <!-- Cúspides posteriores (perfil superior) -->
          <path d="M 315 155 C 335 110, 375 75, 420 80 C 465 85, 495 115, 520 150 Z"
                fill="url(#cuspTop)" stroke="#2b2114" stroke-width="3" stroke-linejoin="round" />

          <!-- Cuerpo principal del esmalte -->
          <path d="M 330 270 
                   C 305 230, 290 170, 315 130 
                   C 335 100, 370 95, 410 115
                   C 440 90, 490 95, 525 125
                   C 555 155, 555 210, 535 255
                   C 520 285, 500 295, 480 300
                   C 420 315, 380 310, 330 270
                   Z"
                fill="url(#enamelGrad)"
                stroke="#2b2114"
                stroke-width="3.5"
                stroke-linejoin="round" />

          <!-- Surcos de desarrollo y anatomía oclusal -->
          <path d="M 370 115 C 385 145, 388 185, 385 225" stroke="#7a6b4a" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <path d="M 465 120 C 475 150, 478 190, 472 235" stroke="#7a6b4a" stroke-width="2.5" fill="none" stroke-linecap="round" />

          <!-- Brillos especulares blancos característicos del esmalte -->
          <path d="M 410 160 C 415 185, 400 205, 425 208 C 445 210, 440 180, 430 165 Z" fill="#ffffff" opacity="0.85" />
          <path d="M 495 175 C 502 195, 518 198, 525 190 C 530 185, 515 172, 505 170 Z" fill="#ffffff" opacity="0.8" />
        </g>

        <!-- Áreas interactivas invisibles para clics y hover -->
        <ellipse class="anat-region" data-structure="apex-cuspide" cx="420" cy="100" rx="35" ry="15" fill="transparent" />
        <path class="anat-region" data-structure="cuspide" d="M 350 110 C 375 90, 465 90, 490 110 L 485 170 L 355 170 Z" fill="transparent" />
        <path class="anat-region" data-structure="cuello" d="M 315 260 C 370 295, 480 295, 530 260 L 530 285 C 480 320, 370 320, 315 285 Z" fill="transparent" />
        <g class="anat-region" data-structure="apex-raiz">
          <circle cx="295" cy="695" r="22" fill="transparent" />
          <circle cx="565" cy="690" r="22" fill="transparent" />
        </g>
        <rect class="anat-region" data-structure="diente" x="280" y="70" width="310" height="650" fill="transparent" style="pointer-events: none;" />
      </g>

      <!-- ================= LÍNEAS Y ETIQUETAS ANATÓMICAS ================= -->
      <g class="callout-group" data-structure="apex-cuspide">
        <line class="leader-line" x1="420" y1="95" x2="680" y2="95" />
        <line class="callout-tick" x1="680" y1="85" x2="680" y2="105" />
        <text class="label-text" x="690" y="99">Ápex de la cúspide</text>
      </g>

      <g class="callout-group" data-structure="cuspide">
        <line class="leader-line" x1="410" y1="135" x2="680" y2="145" />
        <line class="callout-tick" x1="680" y1="135" x2="680" y2="155" />
        <text class="label-text" x="690" y="149">Cúspide</text>
      </g>

      <g class="callout-group" data-structure="corona">
        <path class="bracket-dotted" d="M 555 110 C 585 170, 580 235, 535 300" />
        <line class="leader-line" x1="575" y1="195" x2="680" y2="195" />
        <line class="callout-tick" x1="680" y1="185" x2="680" y2="205" />
        <text class="label-text" x="690" y="199">Corona</text>
      </g>

      <g class="callout-group" data-structure="diente">
        <line class="leader-line" x1="400" y1="260" x2="680" y2="245" />
        <line class="callout-tick" x1="680" y1="235" x2="680" y2="255" />
        <text class="label-text" x="690" y="249">Diente</text>
      </g>

      <g class="callout-group" data-structure="cuello">
        <line class="leader-line" x1="510" y1="285" x2="680" y2="295" />
        <line class="callout-tick" x1="680" y1="285" x2="680" y2="305" />
        <text class="label-text" x="690" y="299">Cuello</text>
      </g>

      <g class="callout-group" data-structure="raiz">
        <path class="bracket-dotted" d="M 535 330 C 555 450, 530 580, 450 685" />
        <line class="leader-line" x1="520" y1="505" x2="675" y2="345" />
        <line class="leader-line" x1="675" y1="345" x2="680" y2="345" />
        <line class="callout-tick" x1="680" y1="335" x2="680" y2="355" />
        <text class="label-text" x="690" y="349">Raíz del diente</text>
      </g>

      <g class="callout-group" data-structure="apex-raiz">
        <line class="leader-line" x1="435" y1="670" x2="675" y2="395" />
        <line class="leader-line" x1="675" y1="395" x2="680" y2="395" />
        <line class="callout-tick" x1="680" y1="385" x2="680" y2="405" />
        <text class="label-text" x="690" y="399">Ápex de la raíz</text>
      </g>
    </svg>
  `,

  oclusal: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="oclusalGrad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#fffef0" />
          <stop offset="50%" stop-color="#f2ecda" />
          <stop offset="100%" stop-color="#ccbea0" />
        </radialGradient>
      </defs>
      <g id="tooth-artwork">
        <path class="anat-region" data-structure="cresta-marginal"
              d="M 280 240 C 300 150, 390 130, 460 145 C 530 130, 615 155, 630 245 C 648 325, 640 425, 605 495 C 565 558, 495 555, 455 538 C 405 558, 325 550, 292 485 C 262 415, 262 315, 280 240 Z"
              fill="url(#oclusalGrad)" stroke="#2b2114" stroke-width="3.5" />
        <path class="anat-region" data-structure="cuspide-mv" d="M 295 245 C 312 175, 385 158, 452 175 L 455 342 L 290 345 Z" fill="#ffffff" opacity="0.5" />
        <path class="anat-region" data-structure="surco-principal" d="M 325 350 C 395 358, 515 338, 590 355 M 458 180 C 452 265, 456 345, 445 505 M 456 348 L 545 255" stroke="#3b2d1c" stroke-width="4" stroke-linecap="round" fill="none" />
        <circle class="anat-region" data-structure="fosa-central" cx="456" cy="348" r="28" fill="#bfae87" opacity="0.6" />
      </g>
      <g class="callout-group" data-structure="cuspide-mv">
        <line class="leader-line" x1="380" y1="235" x2="680" y2="200" />
        <line class="callout-tick" x1="680" y1="190" x2="680" y2="210" />
        <text class="label-text" x="690" y="204">Cúspide Mesiovestibular</text>
      </g>
      <g class="callout-group" data-structure="fosa-central">
        <line class="leader-line" x1="456" y1="348" x2="680" y2="300" />
        <line class="callout-tick" x1="680" y1="290" x2="680" y2="310" />
        <text class="label-text" x="690" y="304">Fosa Central</text>
      </g>
      <g class="callout-group" data-structure="surco-principal">
        <line class="leader-line" x1="525" y1="348" x2="680" y2="400" />
        <line class="callout-tick" x1="680" y1="390" x2="680" y2="410" />
        <text class="label-text" x="690" y="404">Surco de Desarrollo</text>
      </g>
      <g class="callout-group" data-structure="cresta-marginal">
        <line class="leader-line" x1="615" y1="325" x2="680" y2="485" />
        <line class="callout-tick" x1="680" y1="475" x2="680" y2="495" />
        <text class="label-text" x="690" y="489">Cresta Marginal</text>
      </g>
    </svg>
  `,

  arco: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <path d="M 190 590 C 175 280, 275 110, 420 110 C 565 110, 665 280, 650 590 C 580 620, 560 560, 545 450 C 530 300, 485 215, 420 215 C 355 215, 310 300, 295 450 C 280 560, 260 620, 190 590 Z" fill="#e8a598" stroke="#9e584d" stroke-width="2.5" />
      <g class="anat-region" data-structure="incisivos" fill="#f3efe0" stroke="#2b2114" stroke-width="2.2">
        <rect x="382" y="120" width="36" height="28" rx="10" />
        <rect x="422" y="120" width="36" height="28" rx="10" />
        <rect x="348" y="134" width="32" height="26" rx="10" transform="rotate(-18 364 147)" />
        <rect x="460" y="134" width="32" height="26" rx="10" transform="rotate(18 476 147)" />
      </g>
      <g class="anat-region" data-structure="caninos" fill="#ede6ce" stroke="#2b2114" stroke-width="2.2">
        <ellipse cx="322" cy="176" rx="18" ry="16" transform="rotate(-35 322 176)" />
        <ellipse cx="518" cy="176" rx="18" ry="16" transform="rotate(35 518 176)" />
      </g>
      <g class="anat-region" data-structure="premolares" fill="#f2ede0" stroke="#2b2114" stroke-width="2.2">
        <ellipse cx="290" cy="228" rx="22" ry="18" transform="rotate(-55 290 228)" />
        <ellipse cx="270" cy="278" rx="23" ry="19" transform="rotate(-68 270 278)" />
        <ellipse cx="550" cy="228" rx="22" ry="18" transform="rotate(55 550 228)" />
        <ellipse cx="570" cy="278" rx="23" ry="19" transform="rotate(68 570 278)" />
      </g>
      <g class="anat-region" data-structure="molares" fill="#ebe4ca" stroke="#2b2114" stroke-width="2.4">
        <rect x="230" y="320" width="48" height="44" rx="14" />
        <rect x="222" y="376" width="48" height="44" rx="14" />
        <rect x="218" y="432" width="44" height="40" rx="14" />
        <rect x="562" y="320" width="48" height="44" rx="14" />
        <rect x="570" y="376" width="48" height="44" rx="14" />
        <rect x="578" y="432" width="44" height="40" rx="14" />
      </g>
      <g class="callout-group" data-structure="incisivos">
        <line class="leader-line" x1="440" y1="132" x2="675" y2="140" />
        <line class="callout-tick" x1="675" y1="130" x2="675" y2="150" />
        <text class="label-text" x="685" y="144">Incisivos Centrales y Laterales</text>
      </g>
      <g class="callout-group" data-structure="caninos">
        <line class="leader-line" x1="525" y1="176" x2="675" y2="210" />
        <line class="callout-tick" x1="675" y1="200" x2="675" y2="220" />
        <text class="label-text" x="685" y="214">Caninos Superiores</text>
      </g>
      <g class="callout-group" data-structure="premolares">
        <line class="leader-line" x1="565" y1="250" x2="675" y2="285" />
        <line class="callout-tick" x1="675" y1="275" x2="675" y2="295" />
        <text class="label-text" x="685" y="289">Premolares (Bicúspides)</text>
      </g>
      <g class="callout-group" data-structure="molares">
        <line class="leader-line" x1="595" y1="365" x2="675" y2="365" />
        <line class="callout-tick" x1="675" y1="355" x2="675" y2="375" />
        <text class="label-text" x="685" y="369">Molares Superiores</text>
      </g>
    </svg>
  `
};