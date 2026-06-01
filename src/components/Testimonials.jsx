import './Testimonials.css'

const testimonials = [
  {
    name: 'Rodrigo Sánchez',
    role: 'Director General',
    company: 'InmoGroup',
    initials: 'RS',
    color: '#6366f1',
    stars: 5,
    quote: 'Implementamos el sistema de seguimiento en 4 días. En el primer mes recuperamos 18 leads que antes perdíamos por falta de respuesta rápida. El ROI fue inmediato.',
    metric: '+18 leads recuperados en 30 días',
  },
  {
    name: 'Valeria Montoya',
    role: 'Fundadora',
    company: 'Agencia Lúmina',
    initials: 'VM',
    color: '#06b6d4',
    stars: 5,
    quote: 'Ahorramos 35 horas semanales solo en tareas administrativas. Mi equipo ahora se concentra en estrategia y creatividad, no en copiar datos entre plataformas.',
    metric: '35h/semana ahorradas',
  },
  {
    name: 'Felipe Torres',
    role: 'CEO',
    company: 'ConsultoraTech',
    initials: 'FT',
    color: '#8b5cf6',
    stars: 5,
    quote: 'Triplicamos la cantidad de propuestas enviadas sin aumentar el equipo. El agente de WhatsApp califica leads, agenda y manda propuestas mientras dormimos.',
    metric: '3x más propuestas sin más personal',
  },
  {
    name: 'Ana Ruiz',
    role: 'Directora Comercial',
    company: 'EduOnline Pro',
    initials: 'AR',
    color: '#10b981',
    stars: 5,
    quote: 'Antes teníamos 40% de no-shows en reuniones. Con los recordatorios automáticos y la confirmación por WhatsApp bajamos a menos del 8%. Transformador.',
    metric: 'No-shows reducidos del 40% al 8%',
  },
  {
    name: 'Martín Gálvez',
    role: 'Propietario',
    company: 'Clínica Dental Gálvez',
    initials: 'MG',
    color: '#f59e0b',
    stars: 5,
    quote: 'Creía que la automatización era para empresas grandes. En 2 semanas teníamos WhatsApp, agenda y recordatorios funcionando solos. Mis pacientes están más satisfechos.',
    metric: 'Implementado en 2 semanas',
  },
  {
    name: 'Carolina Vega',
    role: 'Infoproductora',
    company: 'Método Vega',
    initials: 'CV',
    color: '#f43f5e',
    stars: 5,
    quote: 'Automaticé el onboarding de nuevos alumnos, los recordatorios de módulos y el soporte inicial. Pasé de trabajar 70 horas a 45 sin perder ni un alumno.',
    metric: '-25h semanales de trabajo operativo',
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 1l1.55 3.56L12.5 5.1l-2.75 2.67.65 3.77L7 9.56l-3.4 1.98.65-3.77L1.5 5.1l3.95-.54L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section--alt testimonials" id="testimonios">
      <div className="container">
        <div className="section-header">
          <span className="badge">Testimonios</span>
          <h2>Negocios que ya van en automático</h2>
          <p>Resultados reales de clientes reales. Sin tecnicismos, sin promesas vacías.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <Stars count={t.stars} />
              <blockquote className="testimonial-card__quote">"{t.quote}"</blockquote>
              <div className="testimonial-card__metric">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 10l3.5-4.5 2.5 3L11 5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t.metric}
              </div>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: t.color + '22', color: t.color, border: `1.5px solid ${t.color}44` }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
