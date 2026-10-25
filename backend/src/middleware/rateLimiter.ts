import { rateLimit } from 'express-rate-limit';

/**
 * Rate limiter for contact form submissions.
 * Allows a maximum of 5 requests per 15-minute window per IP to prevent abuse/spam.
 */
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  message: {
    success: false,
    error: 'Too many contact requests from this IP address. Please try again in 15 minutes.',
  },
});
