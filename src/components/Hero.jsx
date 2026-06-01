import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="badge hero__badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
            Automatización · IA · Resultados reales
          </div>

          <h1 className="hero__title">
            Tu negocio en piloto automático.<br />
            <span className="hero__title-accent">Sin contratar más personal.</span>
          </h1>

          <p className="hero__subtitle">
            Implementamos automatizaciones e inteligencia artificial para que captures más leads,
            atiendas más rápido y cierres más ventas — sin depender de tareas manuales.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary btn--lg">
              Reserva tu llamada gratuita
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#como-funciona" className="btn btn--ghost btn--lg">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M7.5 6.75 11.25 9 7.5 11.25V6.75z" fill="currentColor"/></svg>
              Ver cómo funciona
            </a>
          </div>

          <p className="hero__disclaimer">
            Sin permanencia · Diagnóstico 100% gratuito · Resultados en semanas
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="dashboard">
            <div className="dashboard__header">
              <div className="dashboard__dots">
                <span/><span/><span/>
              </div>
              <span className="dashboard__title">Panel de automatizaciones</span>
              <span className="dashboard__status">
                <span className="dashboard__status-dot"/>
                En vivo
              </span>
            </div>

            <div className="dashboard__body">
              <div className="dashboard__stats">
                <div className="stat-card">
                  <span className="stat-card__label">Leads capturados hoy</span>
                  <span className="stat-card__value">+47</span>
                  <span className="stat-card__change positive">↑ 23%</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__label">Respuestas automáticas</span>
                  <span className="stat-card__value">312</span>
                  <span className="stat-card__change positive">↑ 98%</span>
                </div>
                <div className="stat-card">
                  <span className="stat-card__label">Horas ahorradas</span>
                  <span className="stat-card__value">38h</span>
                  <span className="stat-card__change positive">esta semana</span>
                </div>
              </div>

              <div className="flow">
                <div className="flow__label">Flujo activo: Captación → CRM → WhatsApp</div>
                <div className="flow__steps">
                  <div className="flow__step flow__step--done">
                    <span className="flow__icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>Lead entra</span>
                  </div>
                  <div className="flow__connector"/>
                  <div className="flow__step flow__step--done">
                    <span className="flow__icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1 5l6 4 6-4" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </span>
                    <span>Email enviado</span>
                  </div>
                  <div className="flow__connector"/>
                  <div className="flow__step flow__step--active">
                    <span className="flow__icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.5 8.5c0 .3-.06.59-.18.86-.12.27-.3.52-.53.73-.37.34-.77.5-1.19.5-.3 0-.63-.08-.98-.24L7 9.5l-1.62.85c-.35.16-.68.24-.98.24-.42 0-.82-.16-1.19-.5a2.18 2.18 0 0 1-.53-.73A1.86 1.86 0 0 1 2.5 8.5V3.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25V8.5z" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </span>
                    <span>WhatsApp</span>
                  </div>
                  <div className="flow__connector"/>
                  <div className="flow__step">
                    <span className="flow__icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                    <span>CRM</span>
                  </div>
                </div>
              </div>

              <div className="notifications">
                <div className="notification notification--new">
                  <span className="notification__dot"/>
                  <span>Nuevo lead: Carlos M. → asignado a Ventas</span>
                  <span className="notification__time">ahora</span>
                </div>
                <div className="notification">
                  <span className="notification__dot notification__dot--done"/>
                  <span>Reunión confirmada: Ana R. — mañana 10:00</span>
                  <span className="notification__time">2m</span>
                </div>
                <div className="notification">
                  <span className="notification__dot notification__dot--done"/>
                  <span>WhatsApp enviado: seguimiento día 3</span>
                  <span className="notification__time">5m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
