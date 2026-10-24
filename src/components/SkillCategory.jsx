import {
  siBootstrap,
  siC,
  siCss,
  siDocker,
  siEclipseide,
  siFlask,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJenkins,
  siKubernetes,
  siMysql,
  siOpenjdk,
  siPython,
  siReact,
  siSpringboot,
} from 'simple-icons'

const skillLogos = {
  Java: siOpenjdk,
  Python: siPython,
  C: siC,
  JavaScript: siJavascript,
  HTML5: siHtml5,
  CSS3: siCss,
  Bootstrap: siBootstrap,
  'React (foundational)': siReact,
  'Spring Boot': siSpringboot,
  Flask: siFlask,
  MySQL: siMysql,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Jenkins: siJenkins,
  'GitHub Actions': siGithubactions,
  Git: siGit,
  GitHub: siGithub,
  Eclipse: siEclipseide,
}

function SkillCategory({ category, index }) {
  const Icon = category.icon
  return (
    <article className="skill-card reveal" style={{ '--reveal-delay': `${(index % 3) * 70}ms` }}>
      <div className="skill-card-heading"><span className="skill-icon"><Icon size={17} /></span><h3>{category.title}</h3></div>
      <ul>
        {category.skills.map((skill) => {
          const logo = skillLogos[skill]
          return (
            <li key={skill}>
              {logo && (
                <svg className="skill-logo" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={logo.path} style={{ fill: `#${logo.hex}` }} />
                </svg>
              )}
              <span>{skill}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default SkillCategory
