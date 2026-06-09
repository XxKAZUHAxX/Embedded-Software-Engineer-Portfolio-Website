import CategoryGlyph from './CategoryGlyph.jsx';
import './ProjectCard.css';

// Maps category -> the CSS variable used to tint the glyph + tag.
const catVar = {
  Embedded: 'var(--cat-embedded)',
  'Vision/AI': 'var(--cat-vision)',
  IoT: 'var(--cat-iot)',
  Web: 'var(--cat-web)',
};

/**
 * ProjectCard — visual glyph, title, blurb, tech tags, category, and links.
 */
export default function ProjectCard({ project }) {
  const { title, blurb, tags, category, repo, demo, badge } = project;
  const tint = catVar[category] || 'var(--accent)';

  return (
    <article className="card" style={{ '--tint': tint }}>
      <div className="card__visual">
        <CategoryGlyph category={category} />
        {badge && <span className="card__award">★ {badge}</span>}
      </div>

      <div className="card__body">
        <span className="card__cat">{category}</span>
        <h3 className="card__title">{title}</h3>
        <p className="card__blurb">{blurb}</p>

        <ul className="card__tags">
          {tags.map((t) => (
            <li key={t} className="card__tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="card__links">
          <a
            className="card__link"
            href={repo}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} source code on GitHub`}
          >
            <GitHubIcon /> Code
          </a>
          {demo && (
            <a
              className="card__link"
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} live demo`}
            >
              <ExternalIcon /> Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
