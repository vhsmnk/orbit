function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-card-top">
        <span className="project-number">
          {project.number}
        </span>

        <span className="project-type">
          {project.type}
        </span>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        className="project-link"
      >
        View project →
      </a>

    </article>
  )
}

export default ProjectCard  