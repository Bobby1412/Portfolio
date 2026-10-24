import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar({ links, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell section-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="Amkshit Goud Suragani, home">AGS<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <a className={activeSection === 'home' ? 'active' : ''} href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          {links.map(([label, id]) => (
            <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
