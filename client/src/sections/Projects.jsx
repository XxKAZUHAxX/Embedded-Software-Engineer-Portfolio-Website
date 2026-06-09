import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects, projectFilters } from '../data/content.js';
import { useReducedMotion } from '../hooks/useUtils.js';
import './Projects.css';

/**
 * Projects — card grid with a category filter. Cards animate on filter change.
 */
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const reduced = useReducedMotion();

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <SectionWrapper
      id="projects"
      kicker="// projects"
      title="Things I've Built"
      intro="Embedded systems, computer vision, and IoT — from thesis award winners to client deployments."
    >
      <div className="projects__filters" role="tablist" aria-label="Filter projects by category">
        {projectFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`projects__tab ${filter === f ? 'is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="projects__empty mono">// no projects in this category yet</p>
      ) : (
        <motion.div className="projects__grid" layout={!reduced}>
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout={!reduced}
                initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
