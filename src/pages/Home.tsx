import { Link } from 'react-router-dom'
import { site } from '../content'

export function Home() {
  const { portrait, contact, resume } = site

  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero__copy">
          <p className="hero__eyebrow">{site.fullName}</p>
          <h1 id="hero-name" className="hero__name">
            {site.name}
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/portfolio">
              View portfolio
            </Link>
            <a
              className="btn btn--ghost"
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resume.label}
            </a>
          </div>
        </div>
        <figure className="hero__media">
          <div className="hero__frame">
            <img src={portrait.src} alt={portrait.alt} width={640} height={800} />
          </div>
          <figcaption className="hero__caption">{portrait.caption}</figcaption>
        </figure>
      </section>

      <section className="section" aria-labelledby="about-title">
        <p className="section__label">About</p>
        <h2 id="about-title" className="section__title">
          A short bio
        </h2>
        <div className="bio-grid">
          <div className="bio-copy">
            {site.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="expertise">
            <dt>{site.expertiseLabel}</dt>
            <dd>{site.expertise}</dd>
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <p className="section__label">Contact</p>
        <h2 id="contact-title" className="section__title">
          Get in touch
        </h2>
        <p className="section__lede">
          Reach out by email or phone — details below are from the resume and can be
          edited in <code>src/content.ts</code>.
        </p>
        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`mailto:${contact.emailAlt}`}>{contact.emailAlt}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${contact.phone.replace(/-/g, '')}`}>{contact.phone}</a>
          </li>
          <li>
            <span>Location</span>
            <strong>{contact.location}</strong>
          </li>
          <li>
            <span>Social</span>
            <div className="social-row">
              {contact.socials.map((social) =>
                social.placeholder ? (
                  <strong key={social.label} className="placeholder-note">
                    [{social.label}]
                  </strong>
                ) : (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                ),
              )}
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
