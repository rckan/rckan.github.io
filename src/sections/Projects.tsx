import { projects } from '../data'
import { ArrowUpRightIcon } from '../components/Icons'

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className="timeline-date">{project.date}</span>
            </div>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} className="project-link" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRightIcon className="icon-sm" />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
