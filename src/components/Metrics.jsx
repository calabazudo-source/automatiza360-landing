import './Metrics.css'

const metrics = [
  { value: '10x', label: 'Más velocidad de respuesta a clientes', accent: true },
  { value: '40h', label: 'Promedio de horas semanales ahorradas por negocio' },
  { value: '3×', label: 'Más leads calificados con seguimiento automatizado' },
  { value: '48h', label: 'Tiempo promedio de implementación del primer flujo' },
]

export default function Metrics() {
  return (
    <section className="metrics">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((m, i) => (
            <div className={`metrics__item ${m.accent ? 'metrics__item--accent' : ''}`} key={i}>
              <span className="metrics__value">{m.value}</span>
              <span className="metrics__label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
