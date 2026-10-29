#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Validates PDF Magic Number (%PDF-)
 */
function isValidPdf(filePath) {
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(5);
  fs.readSync(fd, buffer, 0, 5, 0);
  fs.closeSync(fd);

  return (
    buffer[0] === 0x25 && // %
    buffer[1] === 0x50 && // P
    buffer[2] === 0x44 && // D
    buffer[3] === 0x46    // F
  );
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function uploadResume(sourcePath) {
  if (!sourcePath) {
    console.error('\n❌ Error: Please provide the path to your PDF resume file.');
    console.log('\nUsage:');
    console.log('  node upload-resume.js <path-to-your-resume.pdf>');
    console.log('\nExamples:');
    console.log('  node upload-resume.js ~/Downloads/Aquid_Ali_Resume.pdf');
    console.log('  node upload-resume.js ./my-resume.pdf\n');
    process.exit(1);
  }

  const resolvedSource = path.resolve(sourcePath);

  if (!fs.existsSync(resolvedSource)) {
    console.error(`\n❌ Error: Source file not found at: "${resolvedSource}"`);
    process.exit(1);
  }

  const stat = fs.statSync(resolvedSource);
  if (!stat.isFile()) {
    console.error(`\n❌ Error: The specified path is not a file: "${resolvedSource}"`);
    process.exit(1);
  }

  if (stat.size === 0) {
    console.error(`\n❌ Error: The file is empty (0 bytes).`);
    process.exit(1);
  }

  if (!isValidPdf(resolvedSource)) {
    console.error(`\n❌ Error: The file "${resolvedSource}" is not a valid PDF file (missing %PDF signature).`);
    process.exit(1);
  }

  // Targets
  const publicDir = path.resolve(__dirname, 'frontend/public');
  const publicResumePath = path.join(publicDir, 'resume.pdf');
  const distDir = path.resolve(__dirname, 'frontend/dist');
  const distResumePath = path.join(distDir, 'resume.pdf');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Copy to public/resume.pdf
  fs.copyFileSync(resolvedSource, publicResumePath);
  console.log(`\n✅ Successfully uploaded resume!`);
  console.log(`   📄 Source:      ${resolvedSource}`);
  console.log(`   📦 Size:        ${formatBytes(stat.size)} (${stat.size.toLocaleString()} bytes)`);
  console.log(`   🎯 Destination: ${publicResumePath}`);

  // Mirror to dist if dist exists
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(resolvedSource, distResumePath);
    console.log(`   ⚡ Mirrored to: ${distResumePath}`);
  }

  console.log(`\n🎉 Your portfolio will now serve your uploaded resume at /resume.pdf\n`);
}

const inputArg = process.argv[2];
uploadResume(inputArg);
