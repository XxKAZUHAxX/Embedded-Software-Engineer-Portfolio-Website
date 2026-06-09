import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// --- Security & parsing middleware ---------------------------------------
app.disable('x-powered-by');

// Restrict CORS to the configured frontend origin(s).
// CLIENT_ORIGIN may be a comma-separated list (e.g. local + production).
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim());

app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin / server-to-server requests (no Origin header).
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

// Cap body size to mitigate abuse.
app.use(express.json({ limit: '10kb' }));

// Throttle the contact endpoint to slow spam/abuse.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});

// --- Routes ---------------------------------------------------------------
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactLimiter, contactRouter);

// --- Error handler --------------------------------------------------------
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }
  console.error('[server] unhandled error:', err);
  return res.status(500).json({ error: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
