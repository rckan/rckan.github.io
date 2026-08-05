import '../styles/pages.css'

export function Bio() {
  return (
    <div className="page-container">
      <section className="content-section">
        <div className="content-wrapper">
          <h1>About Me</h1>

          <div className="bio-content">
            <h2>My Journey</h2>
            <p>
              I'm a full-stack developer with a passion for creating elegant solutions
              to complex problems. With several years of experience in web development,
              I've worked on projects ranging from startups to established companies.
            </p>

            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML / CSS / JavaScript</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js / Express</li>
                  <li>Python</li>
                  <li>Database Design</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Practices</h3>
                <ul>
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>Testing</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>

            <h2>What Drives Me</h2>
            <p>
              I believe in the power of technology to make a positive impact. I'm
              constantly learning, exploring new technologies, and improving my craft.
              Outside of coding, I enjoy contributing to open-source projects and
              helping others learn to code.
            </p>

            <h2>Let's Connect</h2>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate or just chat about
              technology!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
