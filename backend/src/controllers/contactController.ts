import type { Request, Response } from 'express';
import { emailService } from '../services/emailService.js';
import type { ContactFormData } from '../middleware/validation.js';

export const handleContactSubmission = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body as ContactFormData;

    // Dispatch email
    const result = await emailService.sendContactEmail(data);

    if (!result.success) {
      if (!result.isConfigured) {
        // Return 503 Service Unavailable when email provider is not yet set up
        res.status(503).json({
          success: false,
          error: result.error,
          configured: false,
        });
        return;
      }

      // Provider failed to send
      res.status(502).json({
        success: false,
        error: result.error || 'Failed to deliver message through email service.',
        configured: true,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
      messageId: result.messageId,
    });
  } catch (error: unknown) {
    // Prevent sensitive trace leaks to client
    res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message. Please try again later.',
    });
  }
};

export const handleContactStatus = (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'online',
    emailConfigured: emailService.isReady(),
    provider: emailService.getProviderName(),
    timestamp: new Date().toISOString(),
  });
};
