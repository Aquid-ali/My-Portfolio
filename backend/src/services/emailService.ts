import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import type { ContactFormData } from '../middleware/validation.js';

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  isConfigured: boolean;
}

export class EmailService {
  private resendClient: Resend | null = null;
  private smtpTransporter: nodemailer.Transporter | null = null;
  private provider: 'resend' | 'smtp' | 'none' = 'none';

  constructor() {
    this.initProvider();
  }

  private initProvider(): void {
    const resendKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (resendKey && resendKey !== 're_your_api_key_here') {
      this.resendClient = new Resend(resendKey);
      this.provider = 'resend';
    } else if (smtpHost && smtpUser && smtpPass && smtpUser !== 'your_smtp_username@gmail.com') {
      this.smtpTransporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });
      this.provider = 'smtp';
    } else {
      this.provider = 'none';
    }
  }

  public isReady(): boolean {
    return this.provider !== 'none';
  }

  public getProviderName(): string {
    return this.provider;
  }

  public async sendContactEmail(data: ContactFormData): Promise<SendEmailResult> {
    const recipient = process.env.RECIPIENT_EMAIL || 'aquidali.dhandu@example.com';

    // If no provider is configured, fail honestly with actionable instruction
    if (this.provider === 'none') {
      return {
        success: false,
        isConfigured: false,
        error:
          'Email delivery service is currently not configured on the server. Please configure RESEND_API_KEY or SMTP credentials in backend/.env to enable direct message delivery.',
      };
    }

    const emailSubject = `[Portfolio Contact] ${data.subject} — from ${data.name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #4f46e5; margin-top: 0;">New Message from Portfolio Website</h2>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
          <p style="margin: 4px 0;"><strong>Sender Name:</strong> ${escapeHtml(data.name)}</p>
          <p style="margin: 4px 0;"><strong>Sender Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
          <p style="margin: 4px 0;"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
          <p style="margin: 4px 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
        <h3 style="color: #1e293b; font-size: 16px; margin-bottom: 8px;">Message Content:</h3>
        <div style="white-space: pre-wrap; background-color: #ffffff; padding: 16px; border: 1px solid #e2e8f0; border-radius: 6px; color: #334155; line-height: 1.6;">
${escapeHtml(data.message)}
        </div>
        <p style="font-size: 12px; color: #94a3b8; margin-top: 24px; text-align: center;">
          Sent securely via Aquid Ali Dhandu's Portfolio API
        </p>
      </div>
    `;

    // 1. Resend Provider
    if (this.provider === 'resend' && this.resendClient) {
      try {
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
        const response = await this.resendClient.emails.send({
          from: fromEmail,
          to: recipient,
          replyTo: data.email,
          subject: emailSubject,
          html: emailHtml,
        });

        if (response.error) {
          return {
            success: false,
            isConfigured: true,
            error: response.error.message || 'Failed to dispatch email via Resend',
          };
        }

        return {
          success: true,
          isConfigured: true,
          messageId: response.data?.id,
        };
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown Resend error';
        return {
          success: false,
          isConfigured: true,
          error: errorMessage,
        };
      }
    }

    // 2. SMTP Provider
    if (this.provider === 'smtp' && this.smtpTransporter) {
      try {
        const fromAddress = process.env.SMTP_FROM || `"Aquid Portfolio" <${process.env.SMTP_USER}>`;
        const info = await this.smtpTransporter.sendMail({
          from: fromAddress,
          to: recipient,
          replyTo: data.email,
          subject: emailSubject,
          html: emailHtml,
          text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
        });

        return {
          success: true,
          isConfigured: true,
          messageId: info.messageId,
        };
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown SMTP error';
        return {
          success: false,
          isConfigured: true,
          error: errorMessage,
        };
      }
    }

    return {
      success: false,
      isConfigured: false,
      error: 'No active email provider detected',
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const emailService = new EmailService();
