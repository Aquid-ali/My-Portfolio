import { Router } from 'express';
import multer from 'multer';
import { getResumeInfo, uploadResume } from '../controllers/resumeController.js';

export const resumeRouter = Router();

// Configure Multer in-memory storage with constraints
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 1,
  },
  fileFilter: (_req, file, cb) => {
    // Check MIME type or extension
    if (file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF documents (.pdf) are permitted'));
    }
  },
});

// GET /api/resume/info - get details on currently active resume
resumeRouter.get('/resume/info', getResumeInfo);

// POST /api/resume/upload - upload a new resume PDF
resumeRouter.post(
  '/resume/upload',
  upload.single('resume'),
  uploadResume
);
