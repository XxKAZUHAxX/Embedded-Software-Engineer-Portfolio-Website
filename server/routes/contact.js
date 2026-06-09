import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const router = Router();

/**
 * Build a Nodemailer transport from environment variables.
 * Created lazily so the server can still boot without mail configured
 * (useful in dev — submissions are logged instead of sent).
 */
function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465, // true for 465, false for 587/STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
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
    const transport = createTransport();

    // Dev fallback: no SMTP configured — log instead of failing.
    if (!transport) {
      console.log('[contact] (no SMTP configured) submission received:', {
        name,
        email,
        message,
      });
      return res.status(200).json({
        message: 'Message received (dev mode — email not sent).',
      });
    }

    try {
      await transport.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      });

      return res.status(200).json({ message: "Message sent — I'll get back to you soon!" });
    } catch (err) {
      console.error('[contact] failed to send email:', err);
      return res.status(502).json({ error: 'Failed to send message. Please email me directly.' });
    }
  }
);

export default router;
