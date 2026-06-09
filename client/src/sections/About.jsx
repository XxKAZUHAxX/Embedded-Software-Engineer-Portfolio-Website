import SectionWrapper from '../components/SectionWrapper.jsx';
import { about, profile } from '../data/content.js';
import './About.css';

/**
 * About — short bio with a photo placeholder and quick "register" facts.
 */
export default function About() {
  return (
    <SectionWrapper id="about" kicker="// about" title="Who I Am">
      <div className="about">
        <div className="about__media">
          <div className="about__photo">
            <img src="/jade.jpg" alt="Portrait of Jade" className="about__photo-img" />
          </div>
          <dl className="about__facts">
            <div>
              <dt>role</dt>
              <dd>Embedded SWE I</dd>
            </div>
            <div>
              <dt>company</dt>
              <dd>Henny Penny</dd>
            </div>
            <div>
              <dt>based</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>degree</dt>
              <dd>BET-Electronics · Cum Laude</dd>
            </div>
          </dl>
        </div>

        <div className="about__text">
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
