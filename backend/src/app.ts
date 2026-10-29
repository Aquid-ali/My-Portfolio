import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { contactRouter } from './routes/contactRoutes.js';
import { resumeRouter } from './routes/resumeRoutes.js';

// Load environment variables
dotenv.config();

export const app = express();

// Security Headers
app.use(helmet());

// CORS Configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((url) => url.trim())
  : ['http://localhost:3000', 'http://127.0.0.1:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, or same-origin in dev)
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Body Parsing Middleware with size limit to prevent memory exhaustion attacks
app.use(express.json({ limit: '15kb' }));
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

// Health Check Endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'aquid-portfolio-api',
  });
});

// Mount Routes
app.use('/api', contactRouter);
app.use('/api', resumeRouter);

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Resource not found: ${req.method} ${req.path}`,
  });
});

// Central Error Handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  const message = err instanceof Error ? err.message : 'Internal Server Error';
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'An unexpected server error occurred' : message,
  });
});
