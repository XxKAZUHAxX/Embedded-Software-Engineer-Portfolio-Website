import SectionWrapper from '../components/SectionWrapper.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import { experience } from '../data/content.js';

/**
 * Experience — vertical, left-aligned timeline, newest first.
 */
export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      kicker="// experience"
      title="Where I've Worked"
      intro="A short log of roles and milestones, most recent first."
    >
      <ol className="timeline">
        {experience.map((item, i) => (
          <TimelineItem key={item.role} item={item} index={i} />
        ))}
      </ol>
    </SectionWrapper>
  );
}
