/**
 * NOTE: Programmatic resume generation has been replaced with the Resume Upload feature.
 *
 * To upload your authentic PDF resume:
 * 1. Via Command Line:
 *    node upload-resume.js <path-to-your-resume.pdf>
 *
 * 2. Via Web UI:
 *    Click "Upload Resume" in the portfolio navigation or Hero section.
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('========================================================================');
console.log('📄 Resume Generation Replaced with Resume Upload');
console.log('========================================================================');
console.log('To set your authentic resume, use one of the following:');
console.log('');
console.log('1. Command Line:');
console.log('   node upload-resume.js <path-to-your-resume.pdf>');
console.log('   Example: node upload-resume.js ./my-resume.pdf');
console.log('');
console.log('2. Web Interface:');
console.log('   Start the app (npm run dev) and click "Upload Resume" in the UI.');
console.log('========================================================================\n');
