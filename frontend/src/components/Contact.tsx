import React, { useState } from 'react';
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
} from 'lucide-react';
import { profileData } from '../data/portfolioData.js';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot: string; // Anti-spam hidden honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g., name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error as user edits
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(
          data.message || 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
        );
        // Reset fields upon verified successful delivery
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _honeypot: '',
        });
      } else {
        setSubmitStatus('error');
        // Handle server errors and unconfigured states honestly without faking success
        setStatusMessage(
          data.error ||
            'Unable to dispatch message at this time. The server or email provider returned an error.'
        );
      }
    } catch (err: unknown) {
      setSubmitStatus('error');
      setStatusMessage(
        'Network error: Failed to connect to the backend API server. Please ensure the backend server is running on port 5000, or reach out directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            I am actively seeking software engineering internships, developer roles, and technical collaborations. Send a message below or connect via direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email Direct */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Direct Email</span>
                      <a
                        href={`mailto:${profileData.socials.email}`}
                        className="text-slate-800 dark:text-slate-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {profileData.socials.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy email address"
                    aria-label="Copy email address"
                    className="p-1.5 rounded-md text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between group hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Professional Network</span>
                      <span className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        linkedin.com/in/aquid-ali
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">Visit &rarr;</span>
                </a>

                {/* GitHub */}
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between group hover:border-indigo-300 dark:hover:border-indigo-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-mono">Code Repositories</span>
                      <span className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        github.com/Aquid-ali
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400">Visit &rarr;</span>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      Mangalore, Karnataka, India (Open to Relocation)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility Note */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Authentic Verification:
              </span>
              All submissions are processed through the backend API with rate limiting and delivered directly to my inbox. No credentials or third-party tokens are exposed on the client.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {/* Success Feedback Alert */}
            {submitStatus === 'success' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-200 flex items-start gap-3 text-sm animate-in fade-in"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Message Delivered</h4>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                    {statusMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Error Feedback Alert */}
            {submitStatus === 'error' && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800/80 text-rose-800 dark:text-rose-200 flex items-start gap-3 text-sm animate-in fade-in"
              >
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-semibold">Submission Notice</h4>
                  <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300">{statusMessage}</p>
                  <p className="text-xs text-rose-600 dark:text-rose-400 pt-1">
                    Tip: You can also reach me directly at <a href={`mailto:${profileData.socials.email}`} className="underline font-medium">{profileData.socials.email}</a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Spam Protection Honeypot (hidden from real users, caught by bots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_honeypot">Leave this field blank</label>
                <input
                  type="text"
                  id="_honeypot"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors ${
                      errors.name
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. s.jenkins@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Inquiry / Software Project Discussion"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors ${
                    errors.subject
                      ? 'border-rose-400 focus:border-rose-500'
                      : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, team opportunity, or question..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors resize-y ${
                    errors.message
                      ? 'border-rose-400 focus:border-rose-500'
                      : 'border-slate-200 dark:border-slate-700 focus:border-indigo-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-indigo-500/20 transition-all hover:translate-y-[-1px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
