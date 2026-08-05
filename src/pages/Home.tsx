import { Link } from 'react-router'
import '../styles/pages.css'

export function Home() {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Rachel</h1>
          <p className="hero-subtitle">
            A passionate developer building amazing web experiences
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/resume" className="btn btn-secondary">
              My Resume
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>What I Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Web Development</h3>
            <p>
              Building fast, responsive, and user-friendly web applications
              using modern technologies.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Problem Solving</h3>
            <p>
              Tackling complex challenges with creative solutions and
              clean, maintainable code.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design Thinking</h3>
            <p>
              Creating beautiful and intuitive user interfaces that solve
              real problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
