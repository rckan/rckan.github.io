import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from '../components/Icons'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Let's talk</h2>
      <p className="contact-lede">
        I'm looking for software engineering internships and research opportunities. Reach out
        if you'd like to work together.
      </p>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <MailIcon className="icon-sm" />
          {profile.email}
        </a>
        <a className="btn btn-ghost" href={profile.resumeHref} download={profile.resumeDownloadName}>
          <DownloadIcon className="icon-sm" />
          Résumé
        </a>
      </div>
      <div className="contact-footer">
        <span>{profile.location}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GitHubIcon className="icon-sm" />
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon className="icon-sm" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
