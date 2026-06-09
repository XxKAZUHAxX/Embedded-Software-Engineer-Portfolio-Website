import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useUtils.js';
import './SectionWrapper.css';

/**
 * SectionWrapper — consistent vertical rhythm + a scroll-reveal entrance.
 * Reveal is disabled when the user prefers reduced motion.
 */
export default function SectionWrapper({ id, kicker, title, intro, children }) {
  const reduced = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {kicker && <span className="kicker">{kicker}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {intro && <p className="section-intro">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
