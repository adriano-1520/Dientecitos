const ILLUSTRATIONS = {
  vestibular: `
    <svg viewBox="0 0 1120 780" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Degradado 3D de la Cara Oclusal Superior -->
        <linearGradient id="oclusalCapGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stop-color="#e3dcc2" />
          <stop offset="30%" stop-color="#c9be9c" />
          <stop offset="65%" stop-color="#b4a782" />
          <stop offset="100%" stop-color="#dfd7bc" />
        </linearGradient>

        <!-- Degradado del Esmalte Seccionado -->
        <linearGradient id="enamelCutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbf8ec" />
          <stop offset="50%" stop-color="#f3ebd3" />
          <stop offset="100%" stop-color="#e4d9b8" />
        </linearGradient>

        <!-- Degradado de la Dentina (Amarillo crema cálido con textura) -->
        <linearGradient id="dentinGrad" x1="15%" y1="10%" x2="85%" y2="90%">
          <stop offset="0%" stop-color="#f6e4b2" />
          <stop offset="45%" stop-color="#efd799" />
          <stop offset="80%" stop-color="#e4c67d" />
          <stop offset="100%" stop-color="#d5b363" />
        </linearGradient>

        <!-- Degradado de la Cavidad Pulpar (Marrón cálido interno como en IMAIOS) -->
        <linearGradient id="pulpOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8d5b24" />
          <stop offset="50%" stop-color="#a87031" />
          <stop offset="100%" stop-color="#7c4e1c" />
        </linearGradient>

        <linearGradient id="pulpInnerGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stop-color="#c99352" />
          <stop offset="50%" stop-color="#be8542" />
          <stop offset="100%" stop-color="#9e6729" />
        </linearGradient>
      </defs>

      <!-- TÍTULO SUPERIOR EXACTO AL ATLAS -->
      <g text-anchor="middle" font-family="Segoe UI, sans-serif">
        <text x="530" y="28" font-size="14" font-weight="700" fill="#111827">Diente - Anatomía general</text>
        <text x="530" y="44" font-size="11.5" fill="#374151">(Corte longitudinal)</text>
      </g>

      <!-- ================= ILUSTRACIÓN CORTE LONGITUDINAL DEL DIENTE ================= -->
      <g id="tooth-artwork">
        <!-- CAPA 1: DENTINA Y CONTORNO RADICULAR COMPLETO -->
        <g class="anat-region" data-structure="dentina">
          <path d="M 412 292
                   C 405 245, 398 188, 412 150
                   C 425 122, 468 128, 515 152
                   C 562 128, 608 115, 626 142
                   C 642 175, 634 240, 622 298
                   C 624 385, 608 495, 588 595
                   C 574 662, 562 712, 548 726
                   C 535 734, 518 730, 515 716
                   C 514 692, 526 635, 540 562
                   C 552 495, 558 430, 545 385
                   C 536 365, 524 365, 512 388
                   C 492 435, 472 515, 452 595
                   C 435 660, 422 702, 412 710
                   C 398 715, 384 705, 382 690
                   C 382 662, 392 595, 404 510
                   C 414 425, 420 345, 412 292 Z"
                fill="url(#dentinGrad)"
                stroke="#2b2114"
                stroke-width="2.6"
                stroke-linejoin="round" />

          <!-- Túbulos dentinarios y líneas de textura histológica (estilo IMAIOS) -->
          <g stroke="#9a7b3e" stroke-width="1" opacity="0.55" stroke-linecap="round">
            <!-- Corona izquierda y superior -->
            <line x1="422" y1="168" x2="438" y2="182" />
            <line x1="416" y1="196" x2="434" y2="204" />
            <line x1="415" y1="226" x2="432" y2="230" />
            <line x1="418" y1="258" x2="435" y2="258" />
            <line x1="422" y1="286" x2="438" y2="284" />
            <line x1="452" y1="155" x2="460" y2="176" />
            <line x1="478" y1="165" x2="482" y2="188" />
            <line x1="504" y1="172" x2="504" y2="195" />
            <line x1="532" y1="168" x2="528" y2="192" />
            <line x1="560" y1="158" x2="552" y2="182" />
            <line x1="588" y1="148" x2="576" y2="172" />
            <!-- Corona derecha -->
            <line x1="620" y1="168" x2="602" y2="182" />
            <line x1="624" y1="198" x2="606" y2="206" />
            <line x1="622" y1="228" x2="604" y2="232" />
            <line x1="618" y1="260" x2="600" y2="262" />
            <!-- Raíz izquierda -->
            <line x1="420" y1="322" x2="436" y2="320" />
            <line x1="418" y1="360" x2="435" y2="358" />
            <line x1="415" y1="398" x2="432" y2="395" />
            <line x1="412" y1="438" x2="428" y2="435" />
            <line x1="408" y1="478" x2="424" y2="475" />
            <line x1="402" y1="520" x2="418" y2="518" />
            <line x1="398" y1="562" x2="412" y2="560" />
            <line x1="394" y1="605" x2="406" y2="602" />
            <line x1="390" y1="645" x2="402" y2="642" />
            <!-- Entrepierna radicular -->
            <line x1="495" y1="425" x2="482" y2="418" />
            <line x1="482" y1="468" x2="468" y2="460" />
            <line x1="468" y1="512" x2="455" y2="505" />
            <line x1="454" y1="558" x2="442" y2="552" />
            <line x1="552" y1="425" x2="566" y2="420" />
            <line x1="548" y1="472" x2="562" y2="468" />
            <line x1="542" y1="520" x2="556" y2="516" />
            <!-- Raíz derecha -->
            <line x1="616" y1="330" x2="598" y2="328" />
            <line x1="614" y1="370" x2="596" y2="368" />
            <line x1="610" y1="412" x2="592" y2="410" />
            <line x1="605" y1="455" x2="588" y2="452" />
            <line x1="598" y1="500" x2="582" y2="496" />
            <line x1="590" y1="545" x2="574" y2="540" />
            <line x1="582" y1="590" x2="566" y2="585" />
            <line x1="572" y1="635" x2="558" y2="630" />
            <line x1="562" y1="675" x2="548" y2="670" />
          </g>
        </g>

        <!-- CAPA 2: CARA OCLUSAL 3D SUPERIOR (Cúspides, Crestas y Surcos) -->
        <g class="anat-region" data-structure="cara-oclusal">
          <path d="M 398 134
                   C 412 96, 446 72, 482 76
                   C 502 79, 514 92, 526 92
                   C 542 92, 558 70, 588 66
                   C 618 64, 642 92, 648 128
                   C 632 112, 598 118, 568 138
                   C 542 154, 518 158, 488 142
                   C 455 124, 418 118, 398 134 Z"
                fill="url(#oclusalCapGrad)"
                stroke="#2b2114"
                stroke-width="2.5"
                stroke-linejoin="round" />
          <!-- Surcos oclusales y brillos 3D -->
          <path d="M 465 92 C 488 115, 512 124, 526 126 C 545 124, 572 110, 596 86"
                fill="none" stroke="#5c4d35" stroke-width="2" stroke-linecap="round" />
          <path d="M 526 92 L 524 126" fill="none" stroke="#5c4d35" stroke-width="1.8" />
          <!-- Brillos blancos en las vertientes cuspídeas -->
          <ellipse cx="462" cy="96" rx="16" ry="9" transform="rotate(-18 462 96)" fill="#ffffff" opacity="0.65" />
          <ellipse cx="582" cy="88" rx="18" ry="9" transform="rotate(15 582 88)" fill="#ffffff" opacity="0.65" />
          <ellipse cx="552" cy="118" rx="14" ry="7" transform="rotate(-12 552 118)" fill="#ffffff" opacity="0.5" />
        </g>

        <!-- CAPA 3: ESMALTE SECCIONADO (Corte blanco-crema externo de la corona) -->
        <g class="anat-region" data-structure="esmalte">
          <path d="M 412 292
                   C 392 252, 382 182, 398 134
                   C 418 118, 455 124, 488 142
                   C 518 158, 542 154, 568 138
                   C 598 118, 632 112, 648 128
                   C 658 175, 646 248, 622 298
                   C 634 240, 642 175, 626 142
                   C 608 115, 562 128, 515 152
                   C 468 128, 425 122, 412 150
                   C 398 188, 405 245, 412 292 Z"
                fill="url(#enamelCutGrad)"
                stroke="#2b2114"
                stroke-width="2.5"
                stroke-linejoin="round" />
          <!-- Estriaciones de Retzius sutiles en el esmalte -->
          <g stroke="#b8ab8b" stroke-width="1" opacity="0.6">
            <line x1="396" y1="165" x2="408" y2="172" />
            <line x1="394" y1="205" x2="406" y2="210" />
            <line x1="398" y1="245" x2="409" y2="248" />
            <line x1="646" y1="165" x2="632" y2="172" />
            <line x1="644" y1="205" x2="630" y2="210" />
            <line x1="638" y1="245" x2="626" y2="248" />
          </g>
        </g>

        <!-- CAPA 4: CAVIDAD PULPAR Y CONDUCTOS RADICULARES (Complejo pulpar marrón en relieve) -->
        <g class="anat-region" data-structure="cavidad-pulpar">
          <!-- Pared externa oscura de la cavidad pulpar -->
          <path d="M 442 222
                   C 446 202, 462 214, 488 228
                   C 518 238, 552 232, 578 208
                   C 596 192, 608 204, 602 235
                   C 594 278, 588 325, 592 385
                   C 594 452, 578 545, 558 635
                   C 548 682, 538 716, 531 728
                   C 526 728, 524 725, 526 714
                   C 538 655, 554 575, 564 495
                   C 572 425, 570 368, 548 345
                   C 532 330, 514 332, 496 355
                   C 474 388, 454 475, 434 568
                   C 418 642, 405 692, 398 708
                   C 394 708, 391 704, 394 692
                   C 406 635, 422 548, 436 462
                   C 448 382, 454 315, 444 262
                   C 440 242, 438 232, 442 222 Z"
                fill="url(#pulpOuterGrad)"
                stroke="#3d2610"
                stroke-width="2"
                stroke-linejoin="round" />

          <!-- Luz interna más clara de la cámara pulpar y conductos -->
          <path d="M 456 235
                   C 464 224, 482 236, 512 242
                   C 542 246, 568 235, 584 218
                   C 592 212, 594 225, 588 255
                   C 580 302, 578 355, 580 412
                   C 580 475, 566 560, 548 645
                   C 540 678, 534 705, 529 722
                   C 538 665, 556 575, 566 490
                   C 574 415, 572 355, 548 332
                   C 530 316, 510 320, 492 345
                   C 468 380, 448 475, 428 572
                   C 414 638, 404 682, 396 702
                   C 410 635, 428 545, 442 455
                   C 454 375, 462 305, 454 255 Z"
                fill="url(#pulpInnerGrad)"
                opacity="0.88" />
        </g>

        <!-- ZONAS INTERACTIVAS ESPECÍFICAS (Para iluminar cada una de las 16 partes) -->
        <!-- Cavidad de la corona (Cámara pulpar superior) -->
        <path class="anat-region" data-structure="cavidad-corona"
              d="M 442 215 C 465 205, 575 200, 604 212 L 592 342 L 448 342 Z"
              fill="transparent" />

        <!-- Conducto radicular (Ambos conductos radiculares) -->
        <g class="anat-region" data-structure="conducto-radicular" fill="transparent">
          <path d="M 448 345 L 492 355 L 412 705 L 388 695 Z" />
          <path d="M 552 345 L 594 345 L 542 725 L 518 715 Z" />
        </g>

        <!-- Foramen apical del diente -->
        <g class="anat-region" data-structure="foramen-apical" fill="transparent">
          <circle cx="396" cy="705" r="18" />
          <circle cx="530" cy="724" r="18" />
        </g>

        <!-- Ápex de la cúspide -->
        <g class="anat-region" data-structure="apex-cuspide" fill="transparent">
          <ellipse cx="465" cy="78" rx="28" ry="12" />
          <ellipse cx="592" cy="70" rx="28" ry="12" />
        </g>

        <!-- Cúspide -->
        <path class="anat-region" data-structure="cuspide"
              d="M 545 68 C 585 60, 635 80, 646 125 L 550 130 Z"
              fill="transparent" />

        <!-- Cresta marginal -->
        <path class="anat-region" data-structure="cresta-marginal"
              d="M 595 85 C 625 90, 645 108, 648 130 L 605 132 Z"
              fill="transparent" />

        <!-- Cresta triangular -->
        <path class="anat-region" data-structure="cresta-triangular"
              d="M 535 90 L 595 85 L 575 128 L 525 128 Z"
              fill="transparent" />

        <!-- Corona completa -->
        <rect class="anat-region" data-structure="corona"
              x="388" y="65" width="265" height="232" rx="18" fill="transparent" style="pointer-events: none;" />

        <!-- Cuello (Unión amelocementaria) -->
        <path class="anat-region" data-structure="cuello"
              d="M 405 282 L 630 282 L 626 312 L 408 312 Z"
              fill="transparent" />

        <!-- Diente general -->
        <rect class="anat-region" data-structure="diente"
              x="375" y="62" width="285" height="672" rx="20" fill="transparent" style="pointer-events: none;" />

        <!-- Raíz del diente -->
        <path class="anat-region" data-structure="raiz"
              d="M 412 298 L 622 298 L 575 728 L 380 715 Z"
              fill="transparent" style="pointer-events: none;" />

        <!-- Ápex de la raíz -->
        <g class="anat-region" data-structure="apex-raiz" fill="transparent">
          <circle cx="400" cy="702" r="22" />
          <circle cx="534" cy="720" r="22" />
        </g>
      </g>

      <!-- ================= ETIQUETAS IZQUIERDAS (5 ESTRUCTURAS) ================= -->
      <!-- 1. Cavidad de la corona -->
      <g class="callout-group" data-structure="cavidad-corona">
        <line class="leader-line" x1="468" y1="242" x2="220" y2="195" />
        <line class="callout-tick" x1="220" y1="183" x2="220" y2="207" />
        <text class="label-text" x="214" y="196" text-anchor="end">Cavidad de la corona</text>
      </g>

      <!-- 2. Esmalte -->
      <g class="callout-group" data-structure="esmalte">
        <line class="leader-line" x1="404" y1="258" x2="220" y2="262" />
        <line class="callout-tick" x1="220" y1="250" x2="220" y2="274" />
        <text class="label-text" x="214" y="263" text-anchor="end">Esmalte</text>
      </g>

      <!-- 3. Dentina -->
      <g class="callout-group" data-structure="dentina">
        <line class="leader-line" x1="432" y1="326" x2="220" y2="326" />
        <line class="callout-tick" x1="220" y1="314" x2="220" y2="338" />
        <text class="label-text" x="214" y="327" text-anchor="end">Dentina</text>
      </g>

      <!-- 4. Conducto radicular -->
      <g class="callout-group" data-structure="conducto-radicular">
        <line class="leader-line" x1="432" y1="505" x2="220" y2="395" />
        <line class="callout-tick" x1="220" y1="383" x2="220" y2="407" />
        <text class="label-text" x="214" y="396" text-anchor="end">Conducto radicular</text>
      </g>

      <!-- 5. Foramen apical del diente -->
      <g class="callout-group" data-structure="foramen-apical">
        <line class="leader-line" x1="395" y1="706" x2="220" y2="462" />
        <line class="callout-tick" x1="220" y1="450" x2="220" y2="474" />
        <text class="label-text" x="214" y="463" text-anchor="end">Foramen apical del diente</text>
      </g>

      <!-- ================= ETIQUETAS DERECHAS (11 ESTRUCTURAS) ================= -->
      <!-- 1. Ápex de la cúspide -->
      <g class="callout-group" data-structure="apex-cuspide">
        <line class="leader-line" x1="595" y1="68" x2="825" y2="68" />
        <line class="callout-tick" x1="825" y1="56" x2="825" y2="80" />
        <text class="label-text" x="831" y="69">Ápex de la cúspide</text>
      </g>

      <!-- 2. Cúspide -->
      <g class="callout-group" data-structure="cuspide">
        <line class="leader-line" x1="588" y1="80" x2="825" y2="128" />
        <line class="callout-tick" x1="825" y1="116" x2="825" y2="140" />
        <text class="label-text" x="831" y="129">Cúspide</text>
      </g>

      <!-- 3. Cresta marginal -->
      <g class="callout-group" data-structure="cresta-marginal">
        <line class="leader-line" x1="605" y1="98" x2="825" y2="188" />
        <line class="callout-tick" x1="825" y1="176" x2="825" y2="200" />
        <text class="label-text" x="831" y="189">Cresta marginal</text>
      </g>

      <!-- 4. Cresta triangular -->
      <g class="callout-group" data-structure="cresta-triangular">
        <line class="leader-line" x1="566" y1="108" x2="825" y2="248" />
        <line class="callout-tick" x1="825" y1="236" x2="825" y2="260" />
        <text class="label-text" x="831" y="249">Cresta triangular</text>
      </g>

      <!-- 5. Corona (Con corchete vertical exacto a IMAIOS) -->
      <g class="callout-group" data-structure="corona">
        <polyline class="leader-line" points="654,68 662,68 662,298 654,298" />
        <line class="leader-line" x1="662" y1="184" x2="825" y2="308" />
        <line class="callout-tick" x1="825" y1="296" x2="825" y2="320" />
        <text class="label-text" x="831" y="309">Corona</text>
      </g>

      <!-- 6. Cara oclusal -->
      <g class="callout-group" data-structure="cara-oclusal">
        <line class="leader-line" x1="524" y1="126" x2="825" y2="368" />
        <line class="callout-tick" x1="825" y1="356" x2="825" y2="380" />
        <text class="label-text" x="831" y="369">Cara oclusal</text>
      </g>

      <!-- 7. Cuello -->
      <g class="callout-group" data-structure="cuello">
        <line class="leader-line" x1="622" y1="298" x2="825" y2="428" />
        <line class="callout-tick" x1="825" y1="416" x2="825" y2="440" />
        <text class="label-text" x="831" y="429">Cuello</text>
      </g>

      <!-- 8. Diente -->
      <g class="callout-group" data-structure="diente">
        <line class="leader-line" x1="532" y1="265" x2="825" y2="488" />
        <line class="callout-tick" x1="825" y1="476" x2="825" y2="500" />
        <text class="label-text" x="831" y="489">Diente</text>
      </g>

      <!-- 9. Cavidad pulpar -->
      <g class="callout-group" data-structure="cavidad-pulpar">
        <line class="leader-line" x1="532" y1="302" x2="825" y2="548" />
        <line class="callout-tick" x1="825" y1="536" x2="825" y2="560" />
        <text class="label-text" x="831" y="549">Cavidad pulpar</text>
      </g>

      <!-- 10. Raíz del diente (Con corchete vertical radicular exacto a IMAIOS) -->
      <g class="callout-group" data-structure="raiz">
        <polyline class="leader-line" points="628,302 636,302 636,728 628,728" />
        <line class="leader-line" x1="598" y1="510" x2="825" y2="608" />
        <line class="callout-tick" x1="825" y1="596" x2="825" y2="620" />
        <text class="label-text" x="831" y="609">Raíz del diente</text>
      </g>

      <!-- 11. Ápex de la raíz + Icono de arcada inferior derecha -->
      <g class="callout-group" data-structure="apex-raiz">
        <line class="leader-line" x1="546" y1="726" x2="825" y2="668" />
        <line class="callout-tick" x1="825" y1="656" x2="825" y2="680" />
        <text class="label-text" x="831" y="669">Ápex de la raíz</text>
        <!-- Icono de referencia de arcada (estilo IMAIOS) -->
        <g transform="translate(788, 650)" opacity="0.75">
          <ellipse cx="12" cy="18" rx="11" ry="16" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,1" />
          <line x1="1" y1="18" x2="23" y2="18" stroke="#64748b" stroke-width="1" />
          <line x1="12" y1="2" x2="12" y2="34" stroke="#64748b" stroke-width="1" />
          <circle cx="3" cy="24" r="2.5" fill="#dc2626" />
        </g>
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
