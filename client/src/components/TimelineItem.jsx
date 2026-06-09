import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useUtils.js';
import './TimelineItem.css';

/**
 * TimelineItem — one entry in the vertical experience timeline.
 * Animates in from the side as it scrolls into view.
 */
export default function TimelineItem({ item, index }) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      className="tl-item"
      initial={{ opacity: 0, x: reduced ? 0 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : index * 0.08 }}
    >
      <span className="tl-item__node" aria-hidden="true" />
      <div className="tl-item__card">
        <div className="tl-item__head">
          <h3 className="tl-item__role">{item.role}</h3>
          <span className="tl-item__period mono">{item.period}</span>
        </div>
        <p className="tl-item__org">
          {item.org} <span className="tl-item__type">· {item.type}</span>
        </p>
        <ul className="tl-item__points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}
