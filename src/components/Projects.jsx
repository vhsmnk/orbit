import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      number: '01',
      type: 'Web Application',
      title: 'Dashboard',
      description:
        'A modern dashboard focused on data visualization, performance and usability.',
      tags: ['React', 'Node.js', 'API'],
      link: '#',
    },
    {
      number: '02',
      type: 'Mobile Application',
      title: 'Orbit Mobile',
      description:
        'A mobile experience designed around simplicity, speed and intuitive navigation.',
      tags: ['React Native', 'Expo', 'UI/UX'],
      link: '#',
    },
    {
      number: '03',
      type: 'Web Platform',
      title: 'Creative Platform',
      description:
        'A scalable platform designed to connect users with meaningful digital experiences.',
      tags: ['React', 'FastAPI', 'PostgreSQL'],
      link: '#',
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-header">
          <span className="projects-label">
            ✦ Selected projects
          </span>

          <h2>
            Things I've been
            <span> building.</span>
          </h2>

          <p>
            A selection of projects exploring technology,
            design and digital experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects