import { site } from '../content'

export function Portfolio() {
  return (
    <>
      <header className="page-intro">
        <p className="section__label">Selected work</p>
        <h1>Portfolio</h1>
        <p>
          Starter slots drawn from resume highlights. Expand write-ups and links in{' '}
          <code>src/content.ts</code> as projects are ready.
        </p>
      </header>

      <ul className="project-list">
        {site.projects.map((project, index) => (
          <li key={project.id}>
            <a className="project-item" href={project.href}>
              <span className="project-item__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="project-item__title">{project.title}</h2>
                <p className="project-item__blurb">{project.blurb}</p>
                <ul className="project-item__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <span className="project-item__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="template-note">
        Empty slots on purpose — add titles, links, and write-ups when projects are ready.
      </p>
    </>
  )
}
