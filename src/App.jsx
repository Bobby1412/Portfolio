import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Cloud, Code2, Layers3, Mail, MapPin } from 'lucide-react'
import { siGithub, siInstagram } from 'simple-icons'
import Navbar from './components/Navbar.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import CertificationCard from './components/CertificationCard.jsx'
import SkillCategory from './components/SkillCategory.jsx'
import Footer from './components/Footer.jsx'
import { certifications } from './data/certifications.js'
import { projects } from './data/projects.js'
import { profile } from './data/profile.js'
import { skillCategories } from './data/skills.js'
import profilePhoto from './assets/amkshit-profile.jpg'
import './App.css'

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Certifications', 'certifications'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))

    const revealObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    return () => {
      observer.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar links={navigation} activeSection={activeSection} />
      <main>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Open to learning &amp; opportunities</p>
            <h1 id="hero-title">{profile.name}<span className="accent-period">.</span></h1>
            <p className="hero-role">Computer Science Undergraduate <span>/</span> Class of 2027</p>
            <p className="hero-intro">
              Exploring technology, building practical solutions, and continuously learning through code.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
              <a className="button button-text" href="#contact">Get in touch <ArrowDown size={15} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Vijayawada, India</span>
              <span><Code2 size={15} /> Cloud Native Computing</span>
            </div>
          </div>
          <figure className="hero-portrait reveal">
            <div className="portrait-frame">
              <img src={profilePhoto} alt="Amkshit Goud Suragani in a black blazer" fetchPriority="high" />
              <span className="portrait-index">PROFILE / 2026</span>
            </div>
            <figcaption><span>Computer Science</span><span>KL University</span></figcaption>
          </figure>
        </section>

        <div className="page-rule" />

        <section className="content-section section-shell" id="about" aria-labelledby="about-title">
          <SectionHeading number="01" title="A little about me" id="about-title" />
          <div className="about-layout">
            <div className="about-copy reveal">
              <p className="about-lead">
                I’m a Computer Science undergraduate at KL University, specializing in Cloud Native Computing.
              </p>
              <p>
                I’m interested in software development, full-stack applications, cloud technologies, and data analytics.
                I enjoy understanding how applications work, solving problems, and putting technical concepts into
                practice through projects.
              </p>
              <p>
                I’m continuing to strengthen my programming and development skills as I prepare for opportunities
                in the technology industry.
              </p>
            </div>
            <aside className="education-note reveal">
              <span className="note-label">Currently</span>
              <h3>Learning, one project at a time.</h3>
              <p>B.Tech in Computer Science and Engineering</p>
              <div className="note-detail"><span>KL University</span><span>Expected 2027</span></div>
              <div className="note-detail"><span>Vijayawada, Andhra Pradesh</span><MapPin size={14} /></div>
            </aside>
          </div>
        </section>

        <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
          <SectionHeading number="02" title="Tools & technologies" id="skills-title" description="A growing toolkit, built through coursework and hands-on exploration." />
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>
        </section>

        <section className="content-section section-shell" id="projects" aria-labelledby="projects-title">
          <SectionHeading number="03" title="Selected projects" id="projects-title" description="A few things I’ve explored, learned from, and built along the way." />
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
          <a className="text-link all-projects-link" href={profile.github} target="_blank" rel="noreferrer">
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </section>

        <section className="content-section section-shell" id="certifications" aria-labelledby="certifications-title">
          <SectionHeading number="04" title="Learning milestones" id="certifications-title" description="Professional certifications and course completions that mark my learning journey." />
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <CertificationCard key={certification.name} certification={certification} index={index} />
            ))}
          </div>
        </section>

        <section className="content-section section-shell" id="experience" aria-labelledby="experience-title">
          <SectionHeading number="05" title="Education & experience" id="experience-title" />
          <div className="timeline">
            <article className="timeline-entry reveal">
              <div className="timeline-marker"><Layers3 size={16} /></div>
              <div className="timeline-content">
                <div className="timeline-topline"><span className="timeline-type">Education</span><span className="timeline-date">Expected 2027</span></div>
                <h3>KL University</h3>
                <p className="timeline-subtitle">B.Tech — Computer Science and Engineering</p>
                <p>Specialization in Cloud Native Computing.</p>
              </div>
            </article>
            <article className="timeline-entry reveal">
              <div className="timeline-marker"><Cloud size={16} /></div>
              <div className="timeline-content">
                <div className="timeline-topline"><span className="timeline-type">Virtual internship</span><span className="timeline-date">Details to be confirmed</span></div>
                <h3>IBM Virtual Internship</h3>
                <p>Placeholder entry. Program details and dates will be added once verified.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel reveal">
            <div className="contact-heading">
              <p className="eyebrow">Have a project or idea?</p>
              <h2 id="contact-title">Let’s connect<span className="accent-period">.</span></h2>
              <p>I’m always open to connecting, exchanging ideas, and exploring opportunities to learn and build meaningful technology.</p>
            </div>
            <div className="contact-links">
              <div className="contact-social-links" aria-label="Contact and social links">
                <a className="contact-social-icon" href={`mailto:${profile.email}`} aria-label="Email Amkshit" title="Email">
                  <Mail size={19} />
                </a>
                {profile.linkedin && (
                  <a className="contact-social-icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
                    <span className="linkedin-mark" aria-hidden="true">in</span>
                  </a>
                )}
                <a className="contact-social-icon" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile" title="Instagram">
                  <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={siInstagram.path} /></svg>
                </a>
                <a className="contact-social-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
                  <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={siGithub.path} /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
