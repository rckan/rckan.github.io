import { experience, leadership } from '../data'

export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.role + item.org} className="timeline-item">
            <div className="timeline-heading">
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-org">
                  {item.org} · {item.location}
                </p>
              </div>
              <span className="timeline-date">{item.date}</span>
            </div>
            <ul className="timeline-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="leadership">
        <h3 className="leadership-title">Leadership &amp; Teaching</h3>
        <ul className="leadership-list">
          {leadership.map((item) => (
            <li key={item.role}>
              <span className="leadership-role">{item.role}</span>
              <span className="leadership-meta">
                {item.org} · {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
