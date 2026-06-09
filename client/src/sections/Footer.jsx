import { profile, navLinks } from '../data/content.js';
import './Footer.css';

/**
 * Footer — brand, quick links, and a serial-style sign-off.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo mono">
            <span className="accent">~/</span>jade
          </span>
          <p className="footer__line mono">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bar container">
        <span className="mono">
          © {year} {profile.name}
        </span>
        <span className="mono footer__sig">
          // built with firmware-grade discipline <span className="accent">●</span>
        </span>
      </div>
    </footer>
  );
}
