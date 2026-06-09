import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Button from '../components/Button.jsx';
import { profile } from '../data/content.js';
import './Contact.css';

const initial = { name: '', email: '', message: '' };

/**
 * Contact — form posts to the Express backend (/api/contact).
 * Performs light client-side validation; the server validates authoritatively.
 */
export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'A valid email is required.';
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ state: 'error', msg: err });
      return;
    }

    setStatus({ state: 'loading', msg: 'Transmitting…' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      setStatus({ state: 'success', msg: data.message || 'Message sent — talk soon!' });
      setForm(initial);
    } catch (err) {
      setStatus({ state: 'error', msg: err.message });
    }
  };

  return (
    <SectionWrapper
      id="contact"
      kicker="// contact"
      title="Get In Touch"
      intro="Have a project, a role, or just want to talk embedded systems? Open a channel."
    >
      <div className="contact">
        <form className="contact__form" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update}
              placeholder="Ada Lovelace"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              placeholder="Tell me about your project…"
              required
            />
          </div>

          <div className="contact__actions">
            <Button type="submit" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </Button>
            {status.msg && (
              <p
                className={`contact__status contact__status--${status.state}`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </p>
            )}
          </div>
        </form>

        <aside className="contact__side">
          <h3 className="contact__side-title mono">Direct lines</h3>
          <ul className="contact__list">
            <li>
              <span className="contact__key mono">email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="contact__key mono">phone</span>
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <span className="contact__key mono">linkedin</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                /in/jesryl-jade-lazaga
              </a>
            </li>
            <li>
              <span className="contact__key mono">location</span>
              <span>{profile.location}</span>
            </li>
          </ul>
        </aside>
      </div>
    </SectionWrapper>
  );
}
