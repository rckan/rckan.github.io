import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from '../components/Icons'

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">{profile.role}</p>
      <h1>{profile.name}</h1>
      <p className="hero-lede">
        I build ML-driven tools and reliable software — from real-time C++ interfaces to NLP
        research pipelines. Currently studying Computer Science at Cornell University.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <MailIcon className="icon-sm" />
          Get in touch
        </a>
        <a className="btn btn-ghost" href={profile.resumeHref} download={profile.resumeDownloadName}>
          <DownloadIcon className="icon-sm" />
          Résumé
        </a>
        <div className="hero-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon className="icon-md" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="icon-md" />
          </a>
        </div>
      </div>
    </section>
  )
}
