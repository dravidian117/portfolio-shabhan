import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content'

export function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="brand" end>
            {site.name}
          </NavLink>
          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <a
              className="nav__resume"
              href={site.resume.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.resume.label}
            </a>
          </nav>
        </div>
      </header>
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </div>
      </footer>
    </div>
  )
}
