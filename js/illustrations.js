const ILLUSTRATIONS = {
  vestibular: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Estilos y degradados opcionales para efectos secundarios si se requieren -->
      </defs>

      <!-- ================= IMAGEN REAL DEL DIENTE ================= -->
      <g id="tooth-artwork">
        <!-- Carga tu imagen PNG recortada desde la carpeta img/ -->
        <image href="img/molar-vestibular.png" x="220" y="45" width="370" height="660" preserveAspectRatio="xMidYMid meet" />
      </g>

      <!-- ================= ZONAS INTERACTIVAS (ÁREAS CLICABLES / HOVER) ================= -->
      <!-- Ápex de la cúspide -->
      <ellipse class="anat-region" data-structure="apex-cuspide"
               cx="382" cy="104" rx="34" ry="12" fill="transparent" />

      <!-- Cúspide -->
      <path class="anat-region" data-structure="cuspide"
            d="M 325 122 C 348 102, 392 98, 424 122 L 428 165 L 332 165 Z"
            fill="transparent" />

      <!-- Corona -->
      <rect class="anat-region" data-structure="corona" x="250" y="70" width="310" height="215" fill="transparent" />

      <!-- Diente completo -->
      <rect class="anat-region" data-structure="diente" x="245" y="65" width="320" height="635" fill="transparent" style="pointer-events: none;" />

      <!-- Cuello anatómico -->
      <path class="anat-region" data-structure="cuello"
            d="M 282 258 C 345 298, 430 302, 488 282 L 486 296 C 430 312, 345 308, 284 272 Z"
            fill="transparent" />

      <!-- Raíz del diente -->
      <rect class="anat-region" data-structure="raiz" x="240" y="285" width="260" height="400" fill="transparent" />

      <!-- Ápex de la raíz -->
      <g class="anat-region" data-structure="apex-raiz">
        <circle cx="262" cy="675" r="24" fill="transparent" />
        <circle cx="382" cy="686" r="24" fill="transparent" />
      </g>

      <!-- ================= LÍNEAS PUNTEADAS Y ETIQUETAS ANATÓMICAS ================= -->
      <!-- 1. Ápex de la cúspide -->
      <g class="callout-group" data-structure="apex-cuspide">
        <line class="leader-line" x1="382" y1="103" x2="670" y2="115" />
        <line class="callout-tick" x1="670" y1="105" x2="670" y2="125" />
        <text class="label-text" x="676" y="116">Ápex de la cúspide</text>
      </g>

      <!-- 2. Cúspide -->
      <g class="callout-group" data-structure="cuspide">
        <line class="leader-line" x1="378" y1="120" x2="670" y2="158" />
        <line class="callout-tick" x1="670" y1="148" x2="670" y2="168" />
        <text class="label-text" x="676" y="159">Cúspide</text>
      </g>

      <!-- 3. Corona (con arco punteado de delimitación) -->
      <g class="callout-group" data-structure="corona">
        <path class="bracket-dotted" d="M 556 105 C 584 162, 572 225, 536 286" />
        <line class="leader-line" x1="571" y1="192" x2="670" y2="202" />
        <line class="callout-tick" x1="670" y1="192" x2="670" y2="212" />
        <text class="label-text" x="676" y="203">Corona</text>
      </g>

      <!-- 4. Diente -->
      <g class="callout-group" data-structure="diente">
        <line class="leader-line" x1="386" y1="258" x2="670" y2="245" />
        <line class="callout-tick" x1="670" y1="235" x2="670" y2="255" />
        <text class="label-text" x="676" y="246">Diente</text>
      </g>

      <!-- 5. Cuello -->
      <g class="callout-group" data-structure="cuello">
        <line class="leader-line" x1="484" y1="292" x2="670" y2="288" />
        <line class="callout-tick" x1="670" y1="278" x2="670" y2="298" />
        <text class="label-text" x="676" y="289">Cuello</text>
      </g>

      <!-- 6. Raíz del diente (con línea punteada de delimitación radicular) -->
      <g class="callout-group" data-structure="raiz">
        <path class="bracket-dotted" d="M 538 340 C 542 465, 505 585, 434 694" />
        <line class="leader-line" x1="504" y1="545" x2="665" y2="332" />
        <line class="leader-line" x1="665" y1="332" x2="670" y2="332" />
        <line class="callout-tick" x1="670" y1="322" x2="670" y2="342" />
        <text class="label-text" x="676" y="333">Raíz del diente</text>
      </g>

      <!-- 7. Ápex de la raíz -->
      <g class="callout-group" data-structure="apex-raiz">
        <line class="leader-line" x1="428" y1="646" x2="665" y2="375" />
        <line class="leader-line" x1="665" y1="375" x2="670" y2="375" />
        <line class="callout-tick" x1="670" y1="365" x2="670" y2="385" />
        <text class="label-text" x="676" y="376">Ápex de la raíz</text>
      </g>
    </svg>
  `,

  oclusal: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="oclusalGrad" cx="50%" cy="50%" r="52%">
          <stop offset="0%" stop-color="#d6cba8" />
          <stop offset="45%" stop-color="#f2ede0" />
          <stop offset="85%" stop-color="#e2dac0" />
          <stop offset="100%" stop-color="#bfb393" />
        </radialGradient>
      </defs>

      <g id="tooth-artwork">
        <!-- Contorno oclusal de molar anatómico -->
        <path class="anat-region" data-structure="cresta-marginal"
              d="M 250 250
                 C 270 165, 360 145, 430 162
                 C 500 145, 585 170, 600 255
                 C 618 335, 610 435, 575 505
                 C 535 568, 465 565, 425 548
                 C 375 568, 295 560, 262 495
                 C 232 425, 232 325, 250 250 Z"
              fill="url(#oclusalGrad)"
              stroke="#3b3020"
              stroke-width="3.5" />

        <!-- Cúspide Mesiovestibular -->
        <path class="anat-region" data-structure="cuspide-mv"
              d="M 265 255 C 282 185, 355 168, 422 185 L 425 352 L 260 355 Z"
              fill="#f5f1e4" opacity="0.55" />

        <!-- Surcos principales de desarrollo en forma de Y/Cruz -->
        <path class="anat-region" data-structure="surco-principal"
              d="M 295 360 C 365 368, 485 348, 560 365
                 M 428 190 C 422 275, 426 355, 415 515
                 M 426 358 L 515 265"
              stroke="#4a3b28" stroke-width="4" stroke-linecap="round" fill="none" />

        <!-- Fosa central -->
        <circle class="anat-region" data-structure="fosa-central"
                cx="426" cy="358" r="28" fill="#c4b590" opacity="0.65" />
      </g>

      <!-- Etiquetas Cara Oclusal -->
      <g class="callout-group" data-structure="cuspide-mv">
        <line class="leader-line" x1="350" y1="245" x2="650" y2="210" />
        <line class="callout-tick" x1="650" y1="200" x2="650" y2="220" />
        <text class="label-text" x="658" y="211">Cúspide Mesiovestibular</text>
      </g>

      <g class="callout-group" data-structure="fosa-central">
        <line class="leader-line" x1="426" y1="358" x2="650" y2="310" />
        <line class="callout-tick" x1="650" y1="300" x2="650" y2="320" />
        <text class="label-text" x="658" y="311">Fosa Central</text>
      </g>

      <g class="callout-group" data-structure="surco-principal">
        <line class="leader-line" x1="495" y1="358" x2="650" y2="400" />
        <line class="callout-tick" x1="650" y1="390" x2="650" y2="410" />
        <text class="label-text" x="658" y="401">Surco de Desarrollo</text>
      </g>

      <g class="callout-group" data-structure="cresta-marginal">
        <line class="leader-line" x1="585" y1="335" x2="650" y2="485" />
        <line class="callout-tick" x1="650" y1="475" x2="650" y2="495" />
        <text class="label-text" x="658" y="486">Cresta Marginal</text>
      </g>
    </svg>
  `,

  arco: `
    <svg viewBox="0 0 920 740" xmlns="http://www.w3.org/2000/svg">
      <!-- Encía / Paladar Maxilar -->
      <path d="M 190 590 C 175 280, 275 110, 420 110 C 565 110, 665 280, 650 590 C 580 620, 560 560, 545 450 C 530 300, 485 215, 420 215 C 355 215, 310 300, 295 450 C 280 560, 260 620, 190 590 Z"
            fill="#e8a598" stroke="#9e584d" stroke-width="2.5" />

      <!-- Incisivos -->
      <g class="anat-region" data-structure="incisivos" fill="#f3efe0" stroke="#3b3020" stroke-width="2.2">
        <rect x="382" y="120" width="36" height="28" rx="10" />
        <rect x="422" y="120" width="36" height="28" rx="10" />
        <rect x="348" y="134" width="32" height="26" rx="10" transform="rotate(-18 364 147)" />
        <rect x="460" y="134" width="32" height="26" rx="10" transform="rotate(18 476 147)" />
      </g>

      <!-- Caninos -->
      <g class="anat-region" data-structure="caninos" fill="#ede6ce" stroke="#3b3020" stroke-width="2.2">
        <ellipse cx="322" cy="176" rx="18" ry="16" transform="rotate(-35 322 176)" />
        <ellipse cx="518" cy="176" rx="18" ry="16" transform="rotate(35 518 176)" />
      </g>

      <!-- Premolares -->
      <g class="anat-region" data-structure="premolares" fill="#f2ede0" stroke="#3b3020" stroke-width="2.2">
        <ellipse cx="290" cy="228" rx="22" ry="18" transform="rotate(-55 290 228)" />
        <ellipse cx="270" cy="278" rx="23" ry="19" transform="rotate(-68 270 278)" />
        <ellipse cx="550" cy="228" rx="22" ry="18" transform="rotate(55 550 228)" />
        <ellipse cx="570" cy="278" rx="23" ry="19" transform="rotate(68 570 278)" />
      </g>

      <!-- Molares -->
      <g class="anat-region" data-structure="molares" fill="#ebe4ca" stroke="#3b3020" stroke-width="2.4">
        <rect x="230" y="320" width="48" height="44" rx="14" />
        <rect x="222" y="376" width="48" height="44" rx="14" />
        <rect x="218" y="432" width="44" height="40" rx="14" />
        <rect x="562" y="320" width="48" height="44" rx="14" />
        <rect x="570" y="376" width="48" height="44" rx="14" />
        <rect x="578" y="432" width="44" height="40" rx="14" />
      </g>

      <!-- Etiquetas Arco Maxilar -->
      <g class="callout-group" data-structure="incisivos">
        <line class="leader-line" x1="440" y1="132" x2="660" y2="140" />
        <line class="callout-tick" x1="660" y1="130" x2="660" y2="150" />
        <text class="label-text" x="668" y="141">Incisivos Centrales y Laterales</text>
      </g>

      <g class="callout-group" data-structure="caninos">
        <line class="leader-line" x1="525" y1="176" x2="660" y2="210" />
        <line class="callout-tick" x1="660" y1="200" x2="660" y2="220" />
        <text class="label-text" x="668" y="211">Caninos Superiores</text>
      </g>

      <g class="callout-group" data-structure="premolares">
        <line class="leader-line" x1="565" y1="250" x2="660" y2="285" />
        <line class="callout-tick" x1="660" y1="275" x2="660" y2="295" />
        <text class="label-text" x="668" y="286">Premolares (Bicúspides)</text>
      </g>

      <g class="callout-group" data-structure="molares">
        <line class="leader-line" x1="595" y1="365" x2="660" y2="365" />
        <line class="callout-tick" x1="660" y1="355" x2="660" y2="375" />
        <text class="label-text" x="668" y="366">Molares Superiores</text>
      </g>
    </svg>
  `
};