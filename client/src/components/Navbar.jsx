import { useEffect, useState } from 'react';
import { navLinks } from '../data/content.js';
import { useScrollSpy } from '../hooks/useUtils.js';
import './Navbar.css';

const sectionIds = navLinks.map((l) => l.id);

/**
 * Navbar — sticky, scroll-spy active state, hamburger menu on mobile.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(sectionIds);

  // Add a solid background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#main" onClick={() => setOpen(false)}>
          <span className="nav__prompt">~/</span>jade
          <span className="nav__cursor" aria-hidden="true">
            _
          </span>
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
