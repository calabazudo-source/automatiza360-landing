import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.09 6.26H20l-5.45 3.95 2.09 6.26L11 14.52l-5.64 3.95 2.09-6.26L2 8.26h6.91L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Captás más leads sin más esfuerzo',
    desc: 'Formularios, anuncios y redes conectados automáticamente a tu CRM. Cada lead queda registrado y con seguimiento desde el primer segundo.',
    tag: 'Captación',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Respondés 24/7 sin estar disponible',
    desc: 'Agentes de IA atienden a tus clientes por WhatsApp o email en tiempo real — resuelven dudas, califican leads y agendan reuniones.',
    tag: 'Atención al cliente',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Seguimiento comercial sin depender del equipo',
    desc: 'Secuencias automáticas de email y WhatsApp que nutren a tus leads hasta que están listos para comprar. Nunca más un lead olvidado.',
    tag: 'Ventas',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="3" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 3v4M14 3v4M2 9h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 13h.01M11 13h.01M15 13h.01M7 17h.01M11 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Reuniones agendadas en automático',
    desc: 'Conectamos tu calendario para que los clientes elijan su horario sin back-and-forth. Más reuniones, menos fricción.',
    tag: 'Agendado',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Todo conectado en un solo sistema',
    desc: 'WhatsApp, email, CRM, formularios, facturación — integrados entre sí. Datos que fluyen solos, sin copiar nada a mano.',
    tag: 'Integración',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 2v4M12 18v2M4.93 4.93l2.83 2.83M14.24 14.24l2.83 2.83M2 12h4M18 12h2M4.93 19.07l2.83-2.83M14.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Escalás sin contratar más personal',
    desc: 'Las automatizaciones no se van de vacaciones ni se equivocan. Atendés más volumen con el mismo equipo — o con uno más pequeño.',
    tag: 'Escalabilidad',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-header">
          <span className="badge">Lo que ganás</span>
          <h2>De operar a crecer</h2>
          <p>Implementamos sistemas que trabajan por vos para que puedas enfocarte en lo que realmente mueve el negocio.</p>
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-card__top">
                <div className="benefit-card__icon">{b.icon}</div>
                <span className="benefit-card__tag">{b.tag}</span>
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
