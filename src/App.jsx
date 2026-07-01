import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './data'

const LanguageContext = createContext(null)

function useLang() {
  return useContext(LanguageContext)
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

function LanguageToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle__option ${lang === 'en' ? 'lang-toggle__option--active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle__option ${lang === 'ko' ? 'lang-toggle__option--active' : ''}`}
        onClick={() => setLang('ko')}
      >
        KO
      </button>
    </div>
  )
}

function Nav() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const sections = [
    { id: 'about', label: t.ui.nav.about },
    { id: 'experience', label: t.ui.nav.experience },
    { id: 'projects', label: t.ui.nav.projects },
    { id: 'skills', label: t.ui.nav.skills },
    { id: 'contact', label: t.ui.nav.contact },
  ]

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
      <div className="nav__right">
        <LanguageToggle />
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
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
  const { t } = useLang()
  const { profile } = t

  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        {t.ui.hero.greeting && <p className="hero__greeting">{t.ui.hero.greeting}</p>}
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">{t.ui.hero.ctaWork}</a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>{t.ui.hero.ctaContact}</a>
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
  const { t } = useLang()

  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeading index="01" title={t.ui.sectionTitles.about} />
        <div className="about">
          <div className="about__intro">
            <div className="about__photo">
              <img src="/headshot.jpg" alt="Portrait of Sungok Woo" loading="lazy" />
            </div>
            <p className="about__text">{t.about}</p>
          </div>
          <div className="about__edu">
            <h3>{t.ui.about.educationHeading}</h3>
            {t.education.map((e) => (
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
  const { t } = useLang()

  return (
    <section id="experience" className="section">
      <Reveal>
        <SectionHeading index="02" title={t.ui.sectionTitles.experience} />
        {t.experience.map((job) => (
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
  const { t } = useLang()

  return (
    <section id="projects" className="section">
      <Reveal>
        <SectionHeading index="03" title={t.ui.sectionTitles.projects} />
        <div className="projects">
          {t.projects.map((p) => (
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
                {p.tech.map((tech) => (
                  <span key={tech} className="chip">{tech}</span>
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
  const { t } = useLang()

  return (
    <section id="skills" className="section">
      <Reveal>
        <SectionHeading index="04" title={t.ui.sectionTitles.skills} />
        <div className="skills">
          {Object.entries(t.skills).map(([group, items]) => (
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
            <h3>{t.ui.skills.languagesHeading}</h3>
            <div className="langs">
              {t.spokenLanguages.map((l) => (
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
  const { t } = useLang()
  const { profile } = t

  return (
    <section id="contact" className="section section--contact">
      <Reveal>
        {t.ui.contact.index && <p className="contact__index">{t.ui.contact.index}</p>}
        {t.ui.contact.title && <h2 className="contact__title">{t.ui.contact.title}</h2>}
        <p className="contact__text">{t.ui.contact.text}</p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          {t.ui.contact.cta}
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

function AppContent() {
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
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
