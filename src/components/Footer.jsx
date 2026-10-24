import { ArrowUp, GitBranch } from 'lucide-react'

const currentYear = new Date().getFullYear()

function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner section-shell">
        <a className="footer-name" href="#home">{profile.name}</a>
        <span className="copyright">© {currentYear} · Made with care.</span>
        <div className="footer-actions">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>}
          <a className="back-to-top" href="#home">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
