import { about, aboutStats } from '../data'

export function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <p className="about-text">{about}</p>
        <dl className="about-stats">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
