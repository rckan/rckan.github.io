import '../styles/pages.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product filtering, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description:
      'An interactive dashboard for visualizing complex data sets with charts, filters, and export capabilities.',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 4,
    title: 'Social Media Feed',
    description:
      'A social platform with user profiles, post creation, likes, comments, and real-time notifications.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    link: '#',
  },
]

export function Portfolio() {
  return (
    <div className="page-container">
      <section className="content-section">
        <div className="content-wrapper">
          <h1>My Portfolio</h1>
          <p className="intro-text">
            Here are some of my recent projects and work that I'm proud of.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
