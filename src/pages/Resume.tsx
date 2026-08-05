import '../styles/pages.css'

export function Resume() {
  return (
    <div className="page-container">
      <section className="content-section">
        <div className="content-wrapper">
          <div className="resume-header">
            <h1>Rachel Kan</h1>
            <p className="resume-contact">
              Email: rk778 [at] cornell [dot] edu | Phone: (123) 456-7890 | Location: Ithaca, NY
            </p>
          </div>

          <div className="resume-section">
            <h2 className="section-title">Professional Summary</h2>
            <p>
              Full-stack developer with 3+ years of experience building scalable web
              applications. Expertise in modern JavaScript frameworks, responsive design,
              and backend development. Proven track record of delivering high-quality code
              and collaborating with cross-functional teams.
            </p>
          </div>

          <div className="resume-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-item">
              <div className="exp-header">
                <h3>Senior Developer</h3>
                <span className="date">2023 - Present</span>
              </div>
              <p className="company">Tech Company Inc.</p>
              <ul className="achievements">
                <li>Led development of customer-facing applications using React</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Improved application performance by 40% through optimization</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="exp-header">
                <h3>Full Stack Developer</h3>
                <span className="date">2021 - 2023</span>
              </div>
              <p className="company">StartUp Co.</p>
              <ul className="achievements">
                <li>Built and maintained 5+ production applications</li>
                <li>Designed and implemented REST APIs with Node.js</li>
                <li>Managed database design and optimization</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <div className="exp-header">
                <h3>Bachelor of Science in Computer Science</h3>
                <span className="date">2021</span>
              </div>
              <p className="company">University Name</p>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list">
              <div className="skill-row">
                <strong>Languages:</strong>
                <span>JavaScript, TypeScript, Python, SQL</span>
              </div>
              <div className="skill-row">
                <strong>Frontend:</strong>
                <span>React, Next.js, Tailwind CSS, HTML5, CSS3</span>
              </div>
              <div className="skill-row">
                <strong>Backend:</strong>
                <span>Node.js, Express, PostgreSQL, MongoDB</span>
              </div>
              <div className="skill-row">
                <strong>Tools & DevOps:</strong>
                <span>Git, Docker, AWS, CI/CD, Linux</span>
              </div>
            </div>
          </div>

          <div className="resume-download">
            <a href="/resume.pdf" className="btn btn-primary" download>
              Download Full Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
