import './SkillBadge.css';

/**
 * SkillBadge — a chip colored by its domain category.
 * @param {string} label
 * @param {'Embedded'|'Protocols'|'Web'|'Tools'} category
 */
export default function SkillBadge({ label, category }) {
  // data-cat drives the accent border/dot color via CSS.
  return (
    <span className="skill-badge" data-cat={category}>
      <span className="skill-badge__dot" aria-hidden="true" />
      {label}
    </span>
  );
}
