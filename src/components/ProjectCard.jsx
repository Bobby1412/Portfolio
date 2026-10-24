import { ArrowUpRight, BarChart3, Dumbbell, PanelsTopLeft } from 'lucide-react'

const projectIcons = {
  analysis: BarChart3,
  market: PanelsTopLeft,
  fitness: Dumbbell,
}

function ProjectCard({ project, index }) {
  const Icon = projectIcons[project.icon]
  return (
    <article className="project-card reveal" style={{ '--reveal-delay': `${index * 75}ms` }}>
      <div className={`project-visual ${project.visual}`} aria-hidden="true">
        <span className="visual-index">{project.number} / PROJECT</span>
        <div className="visual-mark"><Icon size={31} strokeWidth={1.3} /></div>
        <span className="visual-decoration" />
      </div>
      <div className="project-content">
        <div className="project-title-row"><h3>{project.title}</h3><span className="project-status">{project.status}</span></div>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
