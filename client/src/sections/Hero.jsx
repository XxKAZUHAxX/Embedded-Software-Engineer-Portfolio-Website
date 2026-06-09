import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button.jsx';
import { profile, bootLines, heroLog } from '../data/content.js';
import { useReducedMotion } from '../hooks/useUtils.js';
import './Hero.css';

// Flatten the boot sequence + typed log into a single ordered queue.
const TYPE_SPEED = 18; // ms per character
const BOOT_SPEED = 120; // ms per boot line

/**
 * Hero — signature "serial monitor" that boots up, then printf-types Jade's
 * intro character-by-character with a blinking cursor. Falls back to a static
 * render when the user prefers reduced motion.
 */
export default function Hero() {
  const reduced = useReducedMotion();
  const [bootCount, setBootCount] = useState(reduced ? bootLines.length : 0);
  const [typed, setTyped] = useState(reduced ? heroLog : []);
  const [done, setDone] = useState(reduced);
  const timers = useRef([]);

  useEffect(() => {
    if (reduced) return; // respect reduced-motion: everything already shown

    // Phase 1: reveal boot lines one at a time.
    bootLines.forEach((_, i) => {
      timers.current.push(
        setTimeout(() => setBootCount(i + 1), BOOT_SPEED * (i + 1))
      );
    });

    // Phase 2: after boot, type each log line char-by-char.
    const bootDuration = BOOT_SPEED * (bootLines.length + 1);
    let elapsed = bootDuration;

    heroLog.forEach((line, lineIdx) => {
      for (let c = 1; c <= line.length; c++) {
        elapsed += TYPE_SPEED;
        timers.current.push(
          setTimeout(() => {
            setTyped((prev) => {
              const next = [...prev];
              next[lineIdx] = line.slice(0, c);
              return next;
            });
          }, elapsed)
        );
      }
      elapsed += 220; // brief pause between lines
    });

    timers.current.push(setTimeout(() => setDone(true), elapsed));

    // Cleanup all pending timers on unmount.
    return () => timers.current.forEach(clearTimeout);
  }, [reduced]);

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__grid container">
        <div className="hero__copy">
          <span className="kicker">{profile.location} · Available for work</span>
          <h1 className="hero__title">
            Embedded Software
            <br />
            <span className="accent">Engineer</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <Button href="#projects">View My Work</Button>
            <Button
              variant="ghost"
              href={profile.cv}
              download
              aria-label="Download CV (PDF)"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* --- Serial monitor terminal --- */}
        <div className="terminal" role="img" aria-label="Simulated serial monitor printing Jade's introduction">
          <div className="terminal__bar">
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__dot" />
            <span className="terminal__name mono">/dev/ttyUSB0 — 115200 baud</span>
          </div>
          <div className="terminal__body mono">
            {bootLines.slice(0, bootCount).map((line) => (
              <div key={line} className="terminal__boot">
                {line}
              </div>
            ))}

            {bootCount >= bootLines.length &&
              typed.map((line, i) => (
                <div key={i} className="terminal__log">
                  <span className="terminal__gt">&gt;</span> {line}
                  {/* cursor sits on the last visible line until typing completes */}
                  {!done && i === typed.length - 1 && (
                    <span className="terminal__cursor">_</span>
                  )}
                </div>
              ))}

            {done && (
              <div className="terminal__prompt">
                <span className="terminal__gt accent">jade@firmware:~$</span>
                <span className="terminal__cursor">_</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About section">
        <span>scroll</span>
        <ScrollChevron />
      </a>
    </section>
  );
}

function ScrollChevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
