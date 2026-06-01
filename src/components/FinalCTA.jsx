import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="finalcta" id="contacto">
      <div className="finalcta__glow" aria-hidden="true" />
      <div className="container finalcta__inner">
        <div className="finalcta__content">
          <span className="badge finalcta__badge">Empezá hoy</span>
          <h2 className="finalcta__title">
            Tu competencia ya está automatizando.
            <br />
            <span className="finalcta__title-accent">¿Seguís haciendo todo a mano?</span>
          </h2>
          <p className="finalcta__desc">
            Reservá una llamada estratégica gratuita de 45 minutos. Analizamos tu negocio,
            identificamos dónde perdés tiempo y dinero, y te mostramos exactamente qué automatizar
            para ver resultados en semanas.
          </p>

          <div className="finalcta__benefits">
            {[
              'Sin costo. Sin compromiso.',
              'Diagnóstico personalizado para tu negocio.',
              'Plan de acción concreto que te llevás.',
            ].map((b, i) => (
              <div className="finalcta__benefit" key={i}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5 7.5-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {b}
              </div>
            ))}
          </div>

          <div className="finalcta__actions">
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="btn btn--primary btn--lg finalcta__btn">
              Reservar mi llamada gratuita
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.167 10h11.666M11.667 5.833 15.833 10l-4.166 4.167" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <p className="finalcta__note">
            Plazas limitadas cada semana · Respondemos en menos de 24h
          </p>
        </div>
      </div>
    </section>
  )
}
