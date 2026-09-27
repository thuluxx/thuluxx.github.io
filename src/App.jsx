import { useEffect, useState } from 'react'
import { profile, skillGroups, projects, experience, certifications } from './data.js'
import './App.css'

function BrandIcon({ icon, size = 20 }) {
  if (icon === 'github') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    )
  }
  if (icon) {
    return <img src={icon} alt="" width={size} height={size} style={{ borderRadius: 4 }} />
  }
  return null
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useTheme()

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="4.5" />
                    <line x1="12" y1="19.5" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="4.5" y2="12" />
                    <line x1="19.5" y1="12" x2="22" y2="12" />
                    <line x1="4.9" y1="4.9" x2="6.7" y2="6.7" />
                    <line x1="17.3" y1="17.3" x2="19.1" y2="19.1" />
                    <line x1="4.9" y1="19.1" x2="6.7" y2="17.3" />
                    <line x1="17.3" y1="6.7" x2="19.1" y2="4.9" />
                  </g>
                </svg>
                <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
                  <path
                    d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </span>
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-badge">Open to internships &amp; opportunities</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <h1>
          Hi, I'm <span className="accent">{profile.name.split(' ')[0]}</span>.
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            See my projects
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </div>
        <p className="hero-meta">{profile.location}</p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <div className="about-grid">
          <p>{profile.intro}</p>
          <div className="about-facts">
            <div>
              <strong>Studying</strong>
              <span>{profile.education}</span>
            </div>
            <div>
              <strong>Based in</strong>
              <span>{profile.location}</span>
            </div>
            <div>
              <strong>Say hi</strong>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="about-socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <BrandIcon icon={s.icon} size={20} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.category} className="skill-group">
              <h3>{g.category}</h3>
              <div className="skill-chips">
                {g.items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <h3>
                {p.title}
                {p.status && <span className="status-chip">{p.status}</span>}
              </h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    Live demo ↗
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={`${e.period}-${e.title}`} className="timeline-item">
              {e.logo && (
                <img className="timeline-logo" src={e.logo} alt="" width="40" height="40" />
              )}
              <div className="timeline-body">
                <h3>
                  {e.title}
                  {e.badge && <span className="status-chip">{e.badge}</span>}
                </h3>
                <p className="timeline-org">{e.org}</p>
                <p className="timeline-period-inline">{e.period}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={`${c.name}-${c.issuer}`} className="cert-card">
              {c.logo && <img className="cert-logo" src={c.logo} alt="" width="44" height="44" />}
              <div>
                <h3>{c.name}</h3>
                <p>
                  {c.issuer} · {c.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Want to chat about a project, an internship, or just say hi? My inbox is
          always open.
        </p>
        <a className="btn primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="footer-socials">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="social-btn social-btn-compact"
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              <BrandIcon icon={s.icon} size={17} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
