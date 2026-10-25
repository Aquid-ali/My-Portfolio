# Aquid Ali Dhandu — Personal Developer Portfolio

A modern, responsive, and production-ready personal developer portfolio built for **Aquid Ali Dhandu**, Computer Science and Design undergraduate at Canara Engineering College, Mangalore.

Designed with a restrained, minimalist aesthetic, authentic credentials, interactive CSS system mockups, a live terminal inspection widget, full-stack project showcases, and a secure backend contact delivery API with rate-limiting and spam protection.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (curated modern color palette, light/dark mode persistence)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Inter* for clean UI, *JetBrains Mono* for system metrics and terminal)
- **Design System**: Minimalist cards, thin borders, zero artificial skill percentage meters, and reduced-motion accessibility.

### Backend API
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Server Framework**: [Express.js](https://expressjs.com/) with [TypeScript](https://www.typescriptlang.org/)
- **Validation**: [Zod](https://zod.dev/) schema validation on all inputs
- **Security**: [Helmet](https://helmetjs.github.io/) headers, strict CORS configuration, payload limits
- **Rate Limiting**: `express-rate-limit` (5 submissions per 15 minutes per IP)
- **Email Delivery**: Modular [Resend](https://resend.com/) SDK & [Nodemailer](https://nodemailer.com/) SMTP integration
- **Spam Defense**: Transparent honeypot trap preventing automated bot submissions

---

## 📁 Repository Structure

```text
portfolio/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg          # Custom monogram vector favicon
│   │   └── resume.pdf           # Downloadable PDF resume
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx       # Sticky navigation & responsive mobile menu
│   │   │   ├── Hero.tsx         # Hero banner with status indicator & CTAs
│   │   │   ├── TerminalWidget.tsx # Interactive terminal / stack inspector
│   │   │   ├── About.tsx        # Authentic background & snapshot card
│   │   │   ├── Skills.tsx       # 7 categorized skill domains with filters
│   │   │   ├── Projects.tsx     # Featured projects showcase with live demo links
│   │   │   ├── ProjectMockup.tsx # Custom CSS mockups for each system
│   │   │   ├── ProjectModal.tsx # Architectural deep-dive modal
│   │   │   ├── Education.tsx    # Academic timeline & core subjects
│   │   │   ├── Interests.tsx    # 5 strategic engineering focus areas
│   │   │   ├── Contact.tsx      # Validated contact form & direct cards
│   │   │   ├── Footer.tsx       # Minimal footer with back-to-top control
│   │   │   └── ThemeToggle.tsx  # Light/Dark mode toggle with localStorage
│   │   ├── data/
│   │   │   └── portfolioData.ts # Centralized source of truth for all content
│   │   ├── types/
│   │   │   └── index.ts         # TypeScript interfaces
│   │   ├── styles/
│   │   │   └── index.css        # Tailwind directives and accessible design tokens
│   │   ├── App.tsx              # Main layout component
│   │   └── main.tsx             # DOM mounting
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── contactController.ts # Handles form submissions & status
│   │   ├── middleware/
│   │   │   ├── rateLimiter.ts       # IP rate limiting
│   │   │   └── validation.ts        # Zod schema validation & honeypot
│   │   ├── routes/
│   │   │   └── contactRoutes.ts     # Route declarations
│   │   ├── services/
│   │   │   └── emailService.ts      # Resend & SMTP email dispatcher
│   │   ├── app.ts                   # Express application setup
│   │   └── server.ts                # Server startup & graceful shutdown
│   ├── tests/
│   │   └── contact.test.ts          # Automated validation test suite
│   ├── .env.example                 # Template for backend secrets
│   ├── package.json
│   └── tsconfig.json
├── generate-resume.js               # Resume PDF generator utility
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18.0.0 or higher
- [npm](https://www.npmjs.com/) v9.0.0 or higher

### Step 1: Install Dependencies

#### Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Install Backend Dependencies
```bash
cd ../backend
npm install
```

---

### Step 2: Configure Backend Environment Variables

In the `backend` folder, duplicate `.env.example` to create `.env`:

```bash
cd backend
cp .env.example .env
```

Open `backend/.env` and configure your preferred email provider:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Where you want to receive messages:
RECIPIENT_EMAIL=aquidali.dhandu@gmail.com

# OPTION 1: Resend (Recommended - https://resend.com)
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>

# OPTION 2: Standard SMTP (Gmail, Brevo, AWS SES)
# EMAIL_PROVIDER=smtp
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
```

> **Note**: If `RESEND_API_KEY` is not provided, the contact endpoint safely reports that the email service is unconfigured so the visitor receives an honest message rather than a simulated fake success.

---

### Step 3: Start Development Servers

Run both servers in separate terminal tabs:

#### Terminal 1 — Backend API:
```bash
cd backend
npm run dev
```
*Backend runs on `http://localhost:5000` (Health check: `http://localhost:5000/api/health`)*

#### Terminal 2 — Frontend UI:
```bash
cd frontend
npm run dev
```
*Frontend runs on `http://localhost:3000` with automatic Vite proxying `/api` requests to port 5000.*

---

## 🧪 Running Tests

To run the automated backend test suite (testing Zod validation, honeypot traps, and error boundaries):

```bash
cd backend
npm test
```

To run TypeScript verification across the frontend:
```bash
cd frontend
npm run build
```

---

## 🌐 Production Deployment

### 1. Frontend (Vercel / Netlify / GitHub Pages)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- If hosting on a separate domain from the backend, set environment variable:
  - `VITE_API_URL=https://your-backend-api.onrender.com`

### 2. Backend (Render / Railway / Fly.io / VPS)
- **Root Directory**: `backend`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- Add all variables from `backend/.env.example` into your hosting provider's Environment Secrets dashboard.

---

## 👤 Personalization Checklist for Aquid

- [ ] **Resume**: Place your updated master resume PDF into `frontend/public/resume.pdf` (or customize `generate-resume.js`).
- [ ] **Email Provider**: Obtain a free API key from [Resend](https://resend.com) and set `RESEND_API_KEY` in `backend/.env`.
- [ ] **Social Profiles**: Update `frontend/src/data/portfolioData.ts` if your GitHub or LinkedIn URLs change.
- [ ] **Project Repositories**: Whenever you make a repository public, set `githubUrl: 'https://github.com/Aquid-ali/...'` inside `portfolioData.ts` to automatically render the "View Source" button.

---

## 📄 License
MIT License &copy; Aquid Ali Dhandu.
