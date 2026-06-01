import './UseCases.css'

const cases = [
  {
    category: 'Captación',
    color: 'indigo',
    title: 'Captación automática de leads',
    desc: 'Un formulario o anuncio dispara un flujo que registra el lead en tu CRM, envía un email de bienvenida y notifica a tu equipo — todo en menos de 30 segundos.',
    results: ['100% leads registrados', 'Respuesta inmediata 24/7', 'Sin entrada manual de datos'],
  },
  {
    category: 'Ventas',
    color: 'cyan',
    title: 'Seguimiento por email y WhatsApp',
    desc: 'Secuencias automáticas que nutren a tus prospectos con el mensaje correcto en el momento correcto. Aumenta la tasa de cierre sin que tu equipo escriba nada.',
    results: ['Hasta 3x más tasa de apertura', 'Seguimiento consistente', 'Personalización por comportamiento'],
  },
  {
    category: 'Agendado',
    color: 'violet',
    title: 'Reuniones sin fricción',
    desc: 'El cliente elige su horario en tu calendario desde cualquier canal. La reunión se confirma, el recordatorio se envía y el CRM se actualiza — sin intervención humana.',
    results: ['Cero emails de coordinación', 'Recordatorios automáticos', 'Integración con Google/Outlook'],
  },
  {
    category: 'IA',
    color: 'emerald',
    title: 'Clasificación de leads con IA',
    desc: 'Un agente de IA analiza cada lead entrante, hace preguntas de calificación y clasifica según tu criterio de buyer ideal. Tu equipo solo atiende a los que valen la pena.',
    results: ['Calificación instantánea', 'Sin tiempo perdido en leads fríos', 'Aprende y mejora con el tiempo'],
  },
  {
    category: 'Soporte',
    color: 'amber',
    title: 'Atención al cliente automatizada',
    desc: 'Un agente responde preguntas frecuentes, procesa solicitudes simples y escala solo los casos que requieren humano. Disponible 24/7 en WhatsApp o web.',
    results: ['80% consultas resueltas sin humano', 'Satisfacción más alta', 'Escalado inteligente'],
  },
  {
    category: 'Operaciones',
    color: 'rose',
    title: 'Presupuestos y recordatorios automáticos',
    desc: 'Genera presupuestos personalizados, los envía por email o WhatsApp y programa recordatorios automáticos si el cliente no respondió. Cierra más sin perseguir a nadie.',
    results: ['Presupuestos en minutos', 'Recordatorios programados', 'Seguimiento hasta el cierre'],
  },
]

const colorMap = {
  indigo: { bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.25)', text: '#a5b4fc' },
  cyan:   { bg: 'rgba(6,182,212,0.08)',  border: 'rgba(6,182,212,0.25)',  text: '#67e8f9' },
  violet: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', text: '#c4b5fd' },
  emerald:{ bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', text: '#6ee7b7' },
  amber:  { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', text: '#fcd34d' },
  rose:   { bg: 'rgba(244,63,94,0.08)',  border: 'rgba(244,63,94,0.25)',  text: '#fda4af' },
}

export default function UseCases() {
  return (
    <section className="section usecases" id="casos-de-uso">
      <div className="container">
        <div className="section-header">
          <span className="badge">Casos de uso</span>
          <h2>Lo que implementamos para negocios como el tuyo</h2>
          <p>Automatizaciones reales, con resultados medibles, que puedes tener funcionando en días — no meses.</p>
        </div>

        <div className="usecases__grid">
          {cases.map((c, i) => {
            const col = colorMap[c.color]
            return (
              <div className="usecase-card" key={i}>
                <div
                  className="usecase-card__category"
                  style={{ background: col.bg, borderColor: col.border, color: col.text }}
                >
                  {c.category}
                </div>
                <h3 className="usecase-card__title">{c.title}</h3>
                <p className="usecase-card__desc">{c.desc}</p>
                <ul className="usecase-card__results">
                  {c.results.map((r, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke={col.text} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
