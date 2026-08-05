import { education } from '../data'

export function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <div className="timeline-heading">
          <div>
            <h3>{education.school}</h3>
            <p className="timeline-org">{education.degree}</p>
          </div>
          <span className="timeline-date">{education.date}</span>
        </div>
        <p className="education-location">{education.location}</p>
        <div className="coursework">
          <p className="coursework-label">Related coursework</p>
          <ul className="tag-list">
            {education.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
