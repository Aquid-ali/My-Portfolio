import { z } from 'zod';
import type { Request, Response, NextFunction } from 'express';

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name must not exceed 100 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email address is too long' }),
  subject: z
    .string({ required_error: 'Subject is required' })
    .trim()
    .min(3, { message: 'Subject must be at least 3 characters long' })
    .max(150, { message: 'Subject must not exceed 150 characters' }),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(3000, { message: 'Message must not exceed 3000 characters' }),
  _honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const validateContactInput = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    const errorDetails = result.error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    res.status(400).json({
      success: false,
      error: errorDetails[0]?.message || 'Invalid input data',
      details: errorDetails,
    });
    return;
  }

  // Honeypot check: if filled, quietly reject without revealing honeypot mechanism
  if (req.body._honeypot && req.body._honeypot.trim() !== '') {
    res.status(200).json({
      success: true,
      message: 'Thank you for reaching out. Your message has been received.',
    });
    return;
  }

  req.body = result.data;
  next();
};
