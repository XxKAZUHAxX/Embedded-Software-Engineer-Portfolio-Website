import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.jsx';
import SkillBadge from '../components/SkillBadge.jsx';
import { skillGroups, skillFilters } from '../data/content.js';
import { useReducedMotion } from '../hooks/useUtils.js';
import './Skills.css';

/**
 * Skills — filterable tech-stack grid. Tabs filter visible groups by category
 * with a smooth fade transition.
 */
export default function Skills() {
  const [filter, setFilter] = useState('All');
  const reduced = useReducedMotion();

  const visible = useMemo(
    () => (filter === 'All' ? skillGroups : skillGroups.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <SectionWrapper
      id="skills"
      kicker="// skills"
      title="Technical Stack"
      intro="From bare-metal registers to React components. Filter by domain to see where I operate."
    >
      <div className="skills__filters" role="tablist" aria-label="Filter skills by domain">
        {skillFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`skills__tab ${filter === f ? 'is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="skills__grid">
        <AnimatePresence mode="popLayout">
          {visible.map((group) => (
            <motion.div
              key={group.id}
              className="skills__group"
              layout={!reduced}
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduced ? 0 : -8 }}
              transition={{ duration: reduced ? 0 : 0.3 }}
            >
              <h3 className="skills__group-label">
                <span className="skills__group-cat" data-cat={group.category} />
                {group.label}
              </h3>
              <div className="skills__badges">
                {group.skills.map((s) => (
                  <SkillBadge key={s} label={s} category={group.category} />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
