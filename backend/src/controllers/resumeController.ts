import { type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';

// Define target path for frontend's resume
const getResumePublicPath = () => {
  // In dev/monorepo, CWD is usually either backend or project root
  const candidates = [
    path.resolve(process.cwd(), '../frontend/public/resume.pdf'),
    path.resolve(process.cwd(), './frontend/public/resume.pdf'),
    path.resolve(process.cwd(), 'public/resume.pdf'),
  ];

  for (const candidate of candidates) {
    const parentDir = path.dirname(candidate);
    if (fs.existsSync(parentDir)) {
      return candidate;
    }
  }

  // Fallback default
  return path.resolve(process.cwd(), '../frontend/public/resume.pdf');
};

const getDistResumePath = () => {
  const candidates = [
    path.resolve(process.cwd(), '../frontend/dist/resume.pdf'),
    path.resolve(process.cwd(), './frontend/dist/resume.pdf'),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(path.dirname(candidate))) {
      return candidate;
    }
  }
  return null;
};

/**
 * Validates PDF Magic Number (%PDF-)
 */
const isValidPdfBuffer = (buffer: Buffer): boolean => {
  if (buffer.length < 5) return false;
  // %PDF in ASCII is [0x25, 0x50, 0x44, 0x46]
  return (
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46
  );
};

/**
 * GET /api/resume/info
 * Retrieves metadata for the currently active resume.
 */
export const getResumeInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const resumePath = getResumePublicPath();
    if (!fs.existsSync(resumePath)) {
      res.status(200).json({
        success: true,
        exists: false,
        message: 'No resume uploaded yet',
      });
      return;
    }

    const stats = fs.statSync(resumePath);
    res.status(200).json({
      success: true,
      exists: true,
      filename: 'Aquid_Ali_Dhandu_Resume.pdf',
      size: stats.size,
      lastModified: stats.mtime.toISOString(),
      url: '/resume.pdf',
    });
  } catch (error) {
    console.error('Error fetching resume info:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve resume information',
    });
  }
};

/**
 * POST /api/resume/upload
 * Validates, handles, and stores the uploaded PDF resume.
 */
export const uploadResume = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({
        success: false,
        error: 'No resume file provided. Please select a valid PDF file.',
      });
      return;
    }

    // 1. Check file size (e.g. 10MB limit)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      res.status(400).json({
        success: false,
        error: 'File size exceeds maximum allowed limit of 10MB.',
      });
      return;
    }

    // 2. Validate magic bytes (%PDF)
    if (!isValidPdfBuffer(file.buffer)) {
      res.status(400).json({
        success: false,
        error: 'The uploaded file is not a valid PDF document (header signature mismatch).',
      });
      return;
    }

    const targetPath = getResumePublicPath();
    const targetDir = path.dirname(targetPath);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Write file safely
    fs.writeFileSync(targetPath, file.buffer);

    // If frontend dist directory exists (e.g. production build), update it as well
    const distPath = getDistResumePath();
    if (distPath && fs.existsSync(path.dirname(distPath))) {
      try {
        fs.writeFileSync(distPath, file.buffer);
      } catch (distErr) {
        console.warn('Could not mirror resume to frontend/dist:', distErr);
      }
    }

    const stats = fs.statSync(targetPath);

    res.status(200).json({
      success: true,
      message: 'Resume PDF uploaded and replaced successfully!',
      filename: 'Aquid_Ali_Dhandu_Resume.pdf',
      originalName: file.originalname,
      size: stats.size,
      lastModified: stats.mtime.toISOString(),
      url: '/resume.pdf',
    });
  } catch (error) {
    console.error('Error uploading resume:', error);
    res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing the uploaded resume.',
    });
  }
};
