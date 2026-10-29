import test from 'node:test';
import assert from 'node:assert/strict';

test('Resume Validation - Valid PDF magic header bytes', () => {
  const validPdfHeader = Buffer.from('%PDF-1.4\n%âãÏÓ');
  const isValid =
    validPdfHeader.length >= 5 &&
    validPdfHeader[0] === 0x25 && // %
    validPdfHeader[1] === 0x50 && // P
    validPdfHeader[2] === 0x44 && // D
    validPdfHeader[3] === 0x46;   // F

  assert.equal(isValid, true);
});

test('Resume Validation - Non-PDF headers are rejected', () => {
  const invalidHeaders = [
    Buffer.from('GIF89a'),
    Buffer.from('<!DOCTYPE html>'),
    Buffer.from('{"name":"fake.pdf"}'),
    Buffer.from('MZ\x90\x00'), // EXE
  ];

  for (const buffer of invalidHeaders) {
    const isValid =
      buffer.length >= 5 &&
      buffer[0] === 0x25 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x44 &&
      buffer[3] === 0x46;
    assert.equal(isValid, false, `Expected header to be rejected: ${buffer.toString('utf8').slice(0, 10)}`);
  }
});
