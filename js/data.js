const DENTAL_VIEWS = {
  vestibular: {
    title: 'Anatomía general (Vista vestibular)',
    badge: 'Anatomía general',
    defaultName: 'Molar Permanente (Vista Vestibular)',
    defaultDesc: 'Diente posterior multirradicular diseñado para la trituración de alimentos. Presenta corona ancha con cúspides definidas, cuello cervical y raíces bifurcadas.',
    structures: [
      {
        id: 'apex-cuspide',
        name: 'Ápex de la cúspide',
        color: '#0284c7',
        description: 'Punto más prominente o vértice superior de cada cúspide en la superficie oclusal de premolares y molares.'
      },
      {
        id: 'cuspide',
        name: 'Cúspide',
        color: '#2563eb',
        description: 'Elevación piramidal de esmalte en la corona clínica que divide la superficie oclusal y participa activamente en la masticación.'
      },
      {
        id: 'corona',
        name: 'Corona',
        color: '#0d9488',
        description: 'Porción visible del diente recubierta por esmalte dental translúcido de alta mineralización, situada por encima de la línea cervical.'
      },
      {
        id: 'diente',
        name: 'Diente',
        color: '#4f46e5',
        description: 'Órgano anatómico mineralizado completo compuesto por la unidad funcional de corona, cuello y sistema radicular.'
      },
      {
        id: 'cuello',
        name: 'Cuello',
        color: '#d97706',
        description: 'Unión amelocementaria (línea cervical). Zona de transición anatómica entre el esmalte de la corona y el cemento de la raíz.'
      },
      {
        id: 'raiz',
        name: 'Raíz del diente',
        color: '#ca8a04',
        description: 'Porción del diente recubierta por cemento que se aloja en el alvéolo dental maxilar o mandibular, sosteniendo la pieza mediante el ligamento periodontal.'
      },
      {
        id: 'apex-raiz',
        name: 'Ápex de la raíz',
        color: '#b45309',
        description: 'Extremo terminal de la raíz donde se ubica el foramen apical, por donde ingresa el paquete vasculonervioso hacia la pulpa.'
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