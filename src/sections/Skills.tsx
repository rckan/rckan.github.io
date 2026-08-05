import { skills, spokenLanguages } from '../data'

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul className="tag-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="skills-category">
          <h3>Spoken Languages</h3>
          <ul className="tag-list">
            {spokenLanguages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
