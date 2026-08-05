import { useState } from 'react'
import { profile } from '../data'
import { DownloadIcon, MenuIcon, CloseIcon } from './Icons'
import './Nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav-resume" href={profile.resumeHref} download={profile.resumeDownloadName}>
            <DownloadIcon className="icon-sm" />
            Résumé
          </a>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="icon-sm" /> : <MenuIcon className="icon-sm" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-drawer" aria-label="Primary mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={profile.resumeHref} download={profile.resumeDownloadName} onClick={() => setOpen(false)}>
            Résumé
          </a>
        </nav>
      )}
    </header>
  )
}
