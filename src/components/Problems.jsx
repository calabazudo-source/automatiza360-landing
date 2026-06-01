import './Problems.css'

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Respondés tarde y perdés clientes',
    desc: 'Tus clientes potenciales no esperan. Si tardás más de 5 minutos en responder, el 80% ya fue a la competencia.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tareas manuales que consumen tu día',
    desc: 'Copiar datos, enviar emails de seguimiento, agendar reuniones... horas que podrías dedicar a cerrar ventas.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Seguimiento inconstante del equipo de ventas',
    desc: 'Los leads quedan sin seguir, las oportunidades se enfrían y el CRM está desactualizado o ni existe.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8h10M7 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Herramientas desconectadas entre sí',
    desc: 'Usás WhatsApp, email, formularios y hojas de cálculo que no se hablan. Todo se pierde entre plataformas.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tu crecimiento depende de contratar más',
    desc: 'Cada vez que el volumen sube, necesitás más personas. Eso limita tu margen y hace el modelo insostenible.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Poca visibilidad sobre qué está funcionando',
    desc: 'Sin datos claros, tomás decisiones a ciegas. No sabés qué canal convierte más ni dónde se cae el cliente.',
  },
]

export default function Problems() {
  return (
    <section className="section problems" id="problemas">
      <div className="container">
        <div className="section-header">
          <span className="badge">¿Te suena familiar?</span>
          <h2>Los problemas que frenan tu negocio</h2>
          <p>Si reconocés alguno de estos, no estás solo. Son los cuellos de botella más comunes en pymes y negocios digitales en crecimiento.</p>
        </div>

        <div className="problems__grid">
          {problems.map((p, i) => (
            <div className="problem-card" key={i}>
              <div className="problem-card__icon">{p.icon}</div>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
