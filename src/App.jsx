import { useEffect, useState } from 'react'
import {
  profile,
  about,
  experience,
  projects,
  education,
  skills,
  spokenLanguages,
} from './data'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand">SW<span>.</span></a>
      <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
            {s.label}
          </a>
        ))}
      </nav>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

function Reveal({ children, className = '' }) {
  const [ref, setRef] = useState(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ref) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(ref)
    return () => obs.disconnect()
  }, [ref])

  return (
    <div ref={setRef} className={`reveal ${shown ? 'reveal--in' : ''} ${className}`}>
      {children}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__greeting">Hi, my name is</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">View my work</a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <div className="hero__socials">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>{profile.location}</span>
        </div>
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}

function SectionHeading({ index, title }) {
  return (
    <h2 className="section__heading">
      <span className="section__index">{index}.</span> {title}
    </h2>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeading index="01" title="About Me" />
        <div className="about">
          <p className="about__text">{about}</p>
          <div className="about__edu">
            <h3>Education</h3>
            {education.map((e) => (
              <div key={e.school} className="edu">
                <div className="edu__top">
                  <span className="edu__school">{e.school}</span>
                  <span className="edu__period">{e.period}</span>
                </div>
                <div className="edu__major">{e.major} · {e.location}</div>
                <div className="edu__chips">
                  {e.coursework.map((c) => (
                    <span key={c} className="chip chip--sm">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
        {experience.map((job) => (
          <div key={job.org} className="card card--exp">
            <div className="card__top">
              <div>
                <h3 className="card__title">
                  {job.role} <span className="card__at">@ {job.org}</span>
                </h3>
              </div>
              <span className="card__period">{job.period}</span>
            </div>
            <ul className="card__points">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <div className="card__chips">
              {job.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
        <div className="projects">
          {projects.map((p) => (
            <div key={p.name} className="card card--project">
              <div className="card__top">
                <h3 className="card__title">{p.name}</h3>
                <span className="card__period">{p.period}</span>
              </div>
              <ul className="card__points">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="card__chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
        <div className="skills">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="skills__group">
              <h3>{group}</h3>
              <div className="card__chips">
                {items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="skills__group">
            <h3>Languages</h3>
            <div className="langs">
              {spokenLanguages.map((l) => (
                <div key={l.name} className="lang">
                  <span className="lang__name">{l.name}</span>
                  <span className="lang__level">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <Reveal>
        <p className="contact__index">05. What's next?</p>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__text">
          I'm always open to new opportunities, collaborations, and conversations.
          Whether you have a question or just want to say hi, my inbox is open.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          Say Hello
        </a>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>Designed & built by {profile.name}</p>
      </footer>
    </>
  )
}
