import { Router } from 'express';
import { handleContactSubmission, handleContactStatus } from '../controllers/contactController.js';
import { validateContactInput } from '../middleware/validation.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

export const contactRouter = Router();

// GET /api/contact/status - check if contact API & email provider are ready
contactRouter.get('/contact/status', handleContactStatus);

// POST /api/contact - validate, rate-limit, and send email
contactRouter.post('/contact', contactRateLimiter, validateContactInput, handleContactSubmission);
