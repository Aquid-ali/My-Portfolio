import test from 'node:test';
import assert from 'node:assert/strict';
import { contactSchema } from '../src/middleware/validation.js';

test('Contact Validation - Valid payload passes schema', () => {
  const validData = {
    name: 'Aquid Ali',
    email: 'test@example.com',
    subject: 'Internship Opportunity',
    message: 'Hello Aquid, we would love to invite you for an interview.',
  };

  const result = contactSchema.safeParse(validData);
  assert.equal(result.success, true);
});

test('Contact Validation - Invalid email format is rejected', () => {
  const invalidData = {
    name: 'Aquid Ali',
    email: 'not-an-email',
    subject: 'Internship Opportunity',
    message: 'Hello Aquid, this should fail because email format is invalid.',
  };

  const result = contactSchema.safeParse(invalidData);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.equal(result.error.errors[0].message, 'Please enter a valid email address');
  }
});

test('Contact Validation - Empty or short message is rejected', () => {
  const invalidData = {
    name: 'Aquid Ali',
    email: 'valid@example.com',
    subject: 'Short message test',
    message: 'Hi', // Under 10 chars
  };

  const result = contactSchema.safeParse(invalidData);
  assert.equal(result.success, false);
  if (!result.success) {
    assert.equal(result.error.errors[0].message, 'Message must be at least 10 characters long');
  }
});

test('Contact Validation - Honeypot field is captured', () => {
  const botData = {
    name: 'Spam Bot',
    email: 'bot@spam.com',
    subject: 'Free Money Fast',
    message: 'This is a spam message attempting to abuse the form endpoint.',
    _honeypot: 'filled_by_bot',
  };

  const result = contactSchema.safeParse(botData);
  assert.equal(result.success, true);
  assert.equal(result.data?._honeypot, 'filled_by_bot');
});
