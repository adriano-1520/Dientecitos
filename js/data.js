const DENTAL_VIEWS = {
  vestibular: {
    title: 'Diente - Anatomía general (Corte longitudinal)',
    badge: 'Corte longitudinal',
    defaultName: 'Diente - Anatomía general (Corte longitudinal)',
    defaultDesc: 'Sección longitudinal de un molar permanente que expone las capas mineralizadas (esmalte, dentina y cemento) junto con la cavidad pulpar coronaria y los conductos radiculares.',
    structures: [
      {
        id: 'cavidad-corona',
        name: 'Cavidad de la corona',
        color: '#b45309',
        description: 'Cámara pulpar coronaria ubicada en el centro de la corona anatómica; aloja la pulpa coronal y presenta prolongaciones hacia las cúspides llamadas cuernos pulpares.'
      },
      {
        id: 'esmalte',
        name: 'Esmalte',
        color: '#0284c7',
        description: 'Tejido ectodérmico altamente mineralizado (96% hidroxiapatita) y translúcido que recubre y protege la corona anatómica del diente.'
      },
      {
        id: 'dentina',
        name: 'Dentina',
        color: '#ca8a04',
        description: 'Tejido conjuntivo mineralizado avascular que constituye el mayor volumen del diente, atravesado por millones de túbulos dentinarios microscópicos.'
      },
      {
        id: 'conducto-radicular',
        name: 'Conducto radicular',
        color: '#9a3412',
        description: 'Porción radicular de la cavidad pulpar que recorre longitudinalmente el centro de cada raíz desde el piso cameral hasta el foramen apical.'
      },
      {
        id: 'foramen-apical',
        name: 'Foramen apical del diente',
        color: '#dc2626',
        description: 'Abertura anatómica terminal situada en el ápex radicular por donde penetra el paquete vasculonervioso periodontal hacia la pulpa dental.'
      },
      {
        id: 'apex-cuspide',
        name: 'Ápex de la cúspide',
        color: '#2563eb',
        description: 'Punto más prominente o vértice superior de cada cúspide en la superficie oclusal de premolares y molares.'
      },
      {
        id: 'cuspide',
        name: 'Cúspide',
        color: '#1d4ed8',
        description: 'Elevación piramidal de esmalte con base dentinaria en la cara oclusal que participa activamente en la trituración y oclusión.'
      },
      {
        id: 'cresta-marginal',
        name: 'Cresta marginal',
        color: '#0d9488',
        description: 'Elevación lineal redondeada de esmalte que limita los bordes mesial y distal de la superficie oclusal de premolares y molares.'
      },
      {
        id: 'cresta-triangular',
        name: 'Cresta triangular',
        color: '#059669',
        description: 'Prominencia de esmalte que desciende desde el ápex de una cúspide principal hacia el surco central de la cara oclusal.'
      },
      {
        id: 'corona',
        name: 'Corona',
        color: '#0891b2',
        description: 'Porción superior del diente recubierta por esmalte dental que se proyecta en la cavidad oral por encima de la línea cervical.'
      },
      {
        id: 'cara-oclusal',
        name: 'Cara oclusal',
        color: '#4f46e5',
        description: 'Superficie masticatoria activa de los dientes posteriores, conformada por cúspides, crestas, fosas y surcos de desarrollo.'
      },
      {
        id: 'cuello',
        name: 'Cuello',
        color: '#d97706',
        description: 'Unión amelocementaria (línea cervical). Zona de transición anatómica entre el esmalte de la corona y el cemento de la raíz.'
      },
      {
        id: 'diente',
        name: 'Diente',
        color: '#6366f1',
        description: 'Órgano anatómico mineralizado completo compuesto por la unidad funcional de corona, cuello, sistema radicular y complejo dentino-pulpar.'
      },
      {
        id: 'cavidad-pulpar',
        name: 'Cavidad pulpar',
        color: '#c2410c',
        description: 'Espacio interno central del diente delimitado por la dentina que aloja el tejido conectivo laxo vascularizado e inervado (pulpa dental).'
      },
      {
        id: 'raiz',
        name: 'Raíz del diente',
        color: '#a16207',
        description: 'Porción del diente recubierta por cemento que se aloja en el alvéolo óseo maxilar o mandibular mediante las fibras del ligamento periodontal.'
      },
      {
        id: 'apex-raiz',
        name: 'Ápex de la raíz',
        color: '#7c2d12',
        description: 'Extremo terminal cónico de la raíz dental donde desemboca el conducto radicular a través del foramen apical.'
      }
    ]
  },
  oclusal: {
    title: 'Molar Permanente (Cara oclusal)',
    badge: 'Cara oclusal',
    defaultName: 'Superficie Oclusal',
    defaultDesc: 'Vista coronal superior que muestra la tabla oclusal, las cúspides vestibulares y linguales, las fosas principales y los surcos de desarrollo.',
    structures: [
      {
        id: 'cuspide-mv',
        name: 'Cúspide Mesiovestibular',
        color: '#0284c7',
        description: 'Cúspide de mayor volumen ubicada en el ángulo mesiovestibular de la tabla oclusal.'
      },
      {
        id: 'fosa-central',
        name: 'Fosa Central',
        color: '#d97706',
        description: 'Depresión amplia localizada en el centro de la cara oclusal donde convergen los surcos principales de desarrollo.'
      },
      {
        id: 'surco-principal',
        name: 'Surco de Desarrollo',
        color: '#4f46e5',
        description: 'Hendidura anatómica lineal que separa las cúspides primarias y sirve como vía de escape durante la masticación.'
      },
      {
        id: 'cresta-marginal',
        name: 'Cresta Marginal',
        color: '#0d9488',
        description: 'Elevación redondeada de esmalte que forma los bordes mesial y distal de la superficie oclusal.'
      }
    ]
  },
  arco: {
    title: 'Arco Dental Maxilar (Vista Oclusal)',
    badge: 'Arco maxilar',
    defaultName: 'Arcada Superior Permanente',
    defaultDesc: 'Disposición parabólica de los dientes superiores (incisivos, caninos, premolares y molares) en el proceso alveolar del maxilar.',
    structures: [
      {
        id: 'incisivos',
        name: 'Incisivos Centrales y Laterales',
        color: '#0284c7',
        description: 'Dientes anteriores unirradiculares con borde incisal afilado encargados del corte e incisión de los alimentos.'
      },
      {
        id: 'caninos',
        name: 'Caninos Superiores',
        color: '#0d9488',
        description: 'Piezas de raíz larga y cúspide única robusta que guían la oclusión lateral y desgarran los alimentos.'
      },
      {
        id: 'premolares',
        name: 'Premolares (Bicúspides)',
        color: '#d97706',
        description: 'Dientes de transición situados detrás de los caninos que inician la trituración del bolo alimenticio.'
      },
      {
        id: 'molares',
        name: 'Molares Superiores',
        color: '#4f46e5',
        description: 'Piezas posteriores de amplia tabla oclusal y tres raíces encargadas de la molienda fina.'
      }
    ]
  }
};
