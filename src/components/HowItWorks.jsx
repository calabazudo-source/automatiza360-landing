import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Analizamos tu negocio en una llamada de 45 minutos: tus herramientas, procesos, cuellos de botella y oportunidades de automatización. Sin venta agresiva, solo claridad.',
    highlight: 'Identificamos exactamente qué automatizar primero para el mayor impacto.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4a10 10 0 1 1 0 20A10 10 0 0 1 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Diseño e implementación',
    desc: 'Construimos y conectamos tus automatizaciones con Make, n8n, OpenAI y las herramientas que ya usás. El primer flujo suele estar listo en 48 a 72 horas.',
    highlight: 'Sin fricción con tu equipo ni cambios drásticos en tus procesos actuales.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h4l3-6 4 12 3-8 2 2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Optimización continua',
    desc: 'Monitoreamos el rendimiento, ajustamos los flujos según los datos y agregamos nuevas automatizaciones conforme crece tu negocio. Siempre mejorando.',
    highlight: 'Vos te enfocás en el negocio. Nosotros en que los sistemas funcionen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M23 12a11 11 0 1 1-1.4-5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M23 4v8h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="section section--alt howitworks" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <span className="badge">El proceso</span>
          <h2>Cómo implementamos tu automatización</h2>
          <p>Un proceso claro, sin tecnicismos y con resultados visibles desde la primera semana.</p>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step__left">
                <div className="step__number-wrap">
                  <span className="step__number">{s.number}</span>
                  {i < steps.length - 1 && <div className="step__line" />}
                </div>
              </div>
              <div className="step__body">
                <div className="step__icon">{s.icon}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
                <p className="step__highlight">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {s.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="howitworks__cta">
          <a href="#contacto" className="btn btn--primary btn--lg">
            Empezar con el diagnóstico gratuito
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
