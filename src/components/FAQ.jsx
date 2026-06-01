import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: '¿Necesito conocimientos técnicos para usar las automatizaciones?',
    a: 'No. Nosotros nos encargamos de toda la implementación técnica. Tu equipo no necesita aprender ninguna herramienta nueva — en la mayoría de los casos, ni saben que hay una automatización detrás.',
  },
  {
    q: '¿Cuánto tarda en estar funcionando?',
    a: 'El primer flujo suele estar activo entre 48 y 72 horas después del diagnóstico. Los proyectos más completos que involucran múltiples integraciones pueden tomar de 1 a 2 semanas.',
  },
  {
    q: '¿Qué herramientas integran?',
    a: 'Trabajamos con más de 5.000 aplicaciones: WhatsApp Business, Gmail, HubSpot, Notion, Google Calendar, Typeform, Airtable, Stripe, Calendly, ManyChat, y muchas más. Si la usás, probablemente podemos conectarla.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'Depende del alcance de la implementación. Por eso empezamos con el diagnóstico gratuito: para entender exactamente qué necesitás y darte una propuesta clara y sin sorpresas. No hay compromisos hasta que decidas continuar.',
  },
  {
    q: '¿Qué pasa si algo falla en una automatización?',
    a: 'Monitoreamos los flujos continuamente y recibís alertas si algo falla. Tenemos tiempos de respuesta garantizados según el plan. La mayoría de los fallos se resuelven antes de que los notés.',
  },
  {
    q: '¿Funciona para negocios pequeños?',
    a: 'Especialmente para ellos. Las pymes son las que más ganan con la automatización porque tienen menos recursos para crecer de forma manual. Hemos ayudado desde solopreneurs hasta empresas con 80 personas.',
  },
  {
    q: '¿Puedo pausar o cancelar el servicio?',
    a: 'Sí. No hay contratos de permanencia obligatoria. Si en algún momento querés hacer una pausa o cancelar, podés hacerlo con un aviso previo. Tu sistema seguirá funcionando con las configuraciones instaladas.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-item__icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 6.75 9 11.25l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="faq-item__answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="badge">Preguntas frecuentes</span>
          <h2>Todo lo que querés saber</h2>
          <p>Si tenés una pregunta que no está aquí, reservá una llamada y la respondemos en persona.</p>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
