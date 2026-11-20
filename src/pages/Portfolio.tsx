import { site } from '../content'

export function Portfolio() {
  return (
    <>
      <header className="page-intro">
        <p className="section__label">Selected work</p>
        <h1>Portfolio</h1>
        <p>
          Course and team projects with a focus on UX, art, ML training, and
          interface craft. Each entry links to its public GitHub repository.
        </p>
      </header>

      <ul className="project-list">
        {site.projects.map((project, index) => (
          <li key={project.id}>
            <a
              className="project-item"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-item__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="project-item__body">
                <div className="project-item__media">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={960}
                    height={640}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="project-item__copy">
                  <p className="project-item__role">{project.role}</p>
                  <h2 className="project-item__title">{project.title}</h2>
                  <p className="project-item__blurb">{project.blurb}</p>
                  <ul className="project-item__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="project-item__link-hint">
                    View repository →
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
