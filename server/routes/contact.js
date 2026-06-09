import { Router } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();

/**
 * Send an email via the Resend HTTP API.
 * Returns true on success, null if RESEND_API_KEY is not configured (dev mode).
 */
async function sendViaResend({ name, email, message, recipient }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipient],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Resend error ${res.status}`);
  }
  return true;
}

// Escape user input before embedding it in the HTML email body (anti-XSS).
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * POST /api/contact
 * Validates and sanitizes input, then emails the submission to Jade.
 */
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required.').isLength({ max: 100 }).escape(),
    body('email').trim().isEmail().withMessage('A valid email is required.').normalizeEmail(),
    body('message')
      .trim()
      .isLength({ min: 10, max: 2000 })
      .withMessage('Message must be between 10 and 2000 characters.')
      .escape(),
  ],
  async (req, res) => {
    // Reject invalid input with the first validation message.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, message } = req.body;
    const recipient = process.env.CONTACT_TO || 'jesryljade18@gmail.com';

    try {
      const result = await sendViaResend({ name, email, message, recipient });

      // Dev fallback: RESEND_API_KEY not configured — log instead of failing.
      if (result === null) {
        console.log('[contact] (no RESEND_API_KEY) submission received:', { name, email, message });
        return res.status(200).json({ message: 'Message received (dev mode — email not sent).' });
      }

      return res.status(200).json({ message: "Message sent — I'll get back to you soon!" });
    } catch (err) {
      console.error('[contact] failed to send email:', err);
      return res.status(502).json({ error: 'Failed to send message. Please email me directly.' });
    }
  }
);

export default router;
