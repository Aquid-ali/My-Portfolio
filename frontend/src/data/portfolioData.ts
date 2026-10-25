import type { Project, SkillCategory, ProfileData } from '../types/index.js';

export const profileData: ProfileData = {
  name: 'Aquid Ali Dhandu',
  role: 'Computer Science Undergraduate | Full-Stack Developer | Aspiring Cloud & DevOps Engineer',
  subTitle: 'Passionate about full-stack development, cloud technologies, DevOps, and building practical software solutions.',
  headline: 'Building thoughtful digital experiences, from web applications to cloud-powered systems.',
  degree: 'Bachelor of Engineering in Computer Science and Design',
  institution: 'Canara Engineering College',
  location: 'Mangalore, Karnataka, India',
  graduationDate: 'June 2027',
  cgpa: '8.3',
  status: 'Student / Fresher',
  primaryObjective: 'Secure a software engineering internship or entry-level position and demonstrate practical development skills through real projects.',
  socials: {
    github: 'https://github.com/Aquid-ali',
    linkedin: 'https://www.linkedin.com/in/aquid-ali',
    email: 'aliaquid3@gmail.com',
  },
  interests: [
    {
      title: 'Full-Stack Application Development',
      description: 'Designing end-to-end web applications with clean, intuitive interfaces and resilient RESTful backend services.',
      iconName: 'Layout',
    },
    {
      title: 'Cloud Infrastructure & Deployment',
      description: 'Exploring scalable cloud primitives on AWS, containerized microservices, and Infrastructure as Code.',
      iconName: 'Cloud',
    },
    {
      title: 'DevOps Automation & CI/CD',
      description: 'Building automated test and deployment pipelines with GitHub Actions and Docker to eliminate manual friction.',
      iconName: 'Cpu',
    },
    {
      title: 'AI-Powered Software Applications',
      description: 'Integrating machine learning models and intelligent heuristics into practical user-facing tools.',
      iconName: 'BrainCircuit',
    },
    {
      title: 'Application Security & Reliable System Design',
      description: 'Applying signature detection, entropy checks, role-based access control, and defense-in-depth principles.',
      iconName: 'ShieldCheck',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    categoryKey: 'languages',
    description: 'Core object-oriented and scripting languages used for systems and application development.',
    iconName: 'Code2',
    skills: ['Python', 'Java'],
  },
  {
    title: 'Frontend Development',
    categoryKey: 'frontend',
    description: 'Modern component-driven web technologies creating fast, responsive user experiences.',
    iconName: 'LayoutTemplate',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend Development',
    categoryKey: 'backend',
    description: 'Server architectures, micro-frameworks, and structured REST API interfaces.',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    title: 'Databases',
    categoryKey: 'databases',
    description: 'Data persistence, document schema modeling, and relational database management.',
    iconName: 'Database',
    skills: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    title: 'Cloud & DevOps',
    categoryKey: 'devops',
    description: 'Containerization, infrastructure provisioning, and continuous deployment workflows.',
    iconName: 'CloudCog',
    skills: [
      'AWS fundamentals',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Tools & Platforms',
    categoryKey: 'tools',
    description: 'Development environment, version control, API testing, and virtualization tooling.',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux', 'VMware'],
  },
  {
    title: 'Computer Science Fundamentals',
    categoryKey: 'fundamentals',
    description: 'Core engineering concepts underlying robust software architecture and problem-solving.',
    iconName: 'Binary',
    skills: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Debugging',
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: 'detran-ransomware-detection',
    title: 'DETRAN — AI-Assisted Ransomware Detection System',
    subtitle: 'Multi-layer security file scanner leveraging signatures, heuristics, and entropy metrics',
    badge: 'Security & Systems',
    description:
      'A security-focused file scanning application designed to identify potentially malicious files using multiple detection techniques.',
    problem:
      'Modern ransomware evades conventional single-signature scans by packing code, obfuscating binaries, and encrypting internal payloads, leaving endpoints vulnerable to zero-day attacks.',
    solution:
      'Engineered a layered scanning pipeline combining YARA rule signatures, ClamAV antivirus definitions, and file Shannon-entropy mathematical analysis to flag encrypted or heavily packed executable structures before execution.',
    techStack: ['React', 'Python', 'Flask', 'YARA', 'ClamAV', 'File Entropy Analysis'],
    keyFeatures: [
      'File upload and real-time scanning workflow',
      'Signature-based threat detection using modular YARA rules',
      'Antivirus scanning pipeline powered by ClamAV integration',
      'Shannon entropy mathematical analysis to detect packed or encrypted payloads',
      'Interactive threat scoring and detailed file metadata management',
    ],
    liveDemoUrl: 'https://aquid-ali.github.io/DETRAN-Ransomware-Detector/',
    githubUrl: undefined, // Verified live demo provided; repository URL kept configurable
    isRepoPrivateOrPending: true,
    visualType: 'security',
    architectureDetails: {
      systemFlow: [
        'User uploads target file through React web interface with validation checks',
        'Flask backend ingests payload into an isolated sandboxed processing buffer',
        'Parallel scanning stage: YARA patterns match known malware signatures',
        'ClamAV daemon verifies binary against global virus definition databases',
        'Mathematical Shannon Entropy calculator evaluates randomness density to detect encrypted payloads',
        'Scoring engine aggregates multi-engine findings and renders diagnostic threat report',
      ],
      technicalHighlights: [
        'Multi-stage heuristic defense pipeline',
        'High-speed binary stream parsing in Python',
        'Modular YARA rule configuration allowing effortless signature expansions',
      ],
      securityOrPerformance: [
        'Sandboxed file handling preventing accidental execution',
        'Strict payload size limits and automatic temp file sanitization',
      ],
    },
  },
  {
    id: 'pharmacy-inventory-management',
    title: 'Cloud-Based Pharmacy Inventory & Medicine Availability System',
    subtitle: 'Full-stack enterprise medicine tracking with role-based access and stock analytics',
    badge: 'Full-Stack & Cloud',
    description:
      'A full-stack pharmacy management platform designed to simplify medicine inventory tracking, stock management, customer availability checks, and sales analytics.',
    problem:
      'Local pharmacies struggle with manual paper records, unmonitored medicine expiry cycles, unexpected stockouts of essential medications, and lack of real-time visibility for customers searching for specific prescriptions.',
    solution:
      'Developed a centralized cloud-ready web application providing automated batch-level tracking, expiration date warnings, instant medicine search, and sales analytics dashboards with strict role-based access control.',
    techStack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'REST APIs',
    ],
    keyFeatures: [
      'Role-based access control for administrators, staff pharmacists, and customer portals',
      'Comprehensive medicine inventory and batch tracking management',
      'Proactive expiration date alerts and low-stock threshold notifications',
      'Customer-facing medicine availability lookup and pharmacy discovery',
      'Integrated order and transaction record workflow',
      'Sales analytics dashboard with revenue charts and stock replenishment reports',
    ],
    liveDemoUrl: undefined, // Configurable until live deployment URL is confirmed
    githubUrl: undefined,
    isRepoPrivateOrPending: true,
    visualType: 'inventory',
    architectureDetails: {
      systemFlow: [
        'JWT-authenticated client requests hit Express REST API endpoints with role verification',
        'MongoDB Mongoose models manage relational references between Pharmacies, Medicines, and Batches',
        'Scheduled cron checks scan batch expiration dates and flag medicines nearing expiry',
        'Pharmacy inventory state reflects real-time stock deductions upon order processing',
        'Analytics engine aggregates sales trends and generates replenishment suggestions',
      ],
      technicalHighlights: [
        'Fine-grained role-based permission middleware (Admin vs Pharmacist vs Guest)',
        'Normalized MongoDB schemas with compound indexing for instant medicine search',
        'Modular state management with responsive Tailwind UI components',
      ],
      securityOrPerformance: [
        'Bcrypt password hashing and HTTP-only JWT token validation',
        'Optimized Mongoose aggregate queries for rapid inventory summary calculations',
      ],
    },
  },
  {
    id: 'customer-churn-prediction',
    title: 'AI-Powered Customer Churn Prediction System',
    subtitle: 'Machine learning classification pipeline identifying customer retention risks',
    badge: 'Machine Learning & Python',
    description:
      'A machine-learning application that analyzes customer data to predict churn risk and present useful insights through a dashboard.',
    problem:
      'Subscription and service businesses lose significant revenue due to customer churn, often discovering dissatisfaction only after accounts are cancelled when retention interventions are too late.',
    solution:
      'Built an end-to-end predictive modeling application that ingests customer usage data, conducts feature engineering, trains classification algorithms, and delivers risk probabilities through an intuitive analytical dashboard.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Visualization Tools'],
    keyFeatures: [
      'End-to-end data preprocessing, missing-value imputation, and categorical encoding',
      'Customer churn classification modeling with probabilistic risk scoring',
      'Model evaluation across Accuracy, Precision, Recall, and ROC-AUC metrics',
      'Feature importance extraction revealing key drivers of customer attrition',
      'Interactive dashboard for exploring customer segments and retention recommendations',
    ],
    liveDemoUrl: undefined,
    githubUrl: undefined,
    isRepoPrivateOrPending: true,
    visualType: 'ml',
    architectureDetails: {
      systemFlow: [
        'Raw customer telemetry and billing history ingested via Pandas dataframes',
        'Data cleaning pipeline applies one-hot encoding, feature scaling, and outlier filtering',
        'Supervised classification models (Random Forest / Logistic Regression) trained on historical churn cohorts',
        'Cross-validation and hyperparameter tuning to optimize F1-score and minimize false negatives',
        'Model outputs calibrated probability distributions mapped to Low, Medium, and High churn risk',
      ],
      technicalHighlights: [
        'Handling class imbalance through resampling and metric threshold adjustments',
        'Interpretable feature contribution ranking (contract duration, monthly spend, support tickets)',
        'Modular Python architecture designed for clean pipeline re-execution',
      ],
      securityOrPerformance: [
        'Anonymized feature vectors protecting simulated client identifiable information',
        'Vectorized NumPy and Pandas computations for sub-second dataset transformations',
      ],
    },
  },
  {
    id: 'employee-management-system',
    title: 'Full-Stack Employee Management System',
    subtitle: 'Clean administrative web application for organizational personnel and department workflows',
    badge: 'MERN Stack',
    description:
      'A web application for managing employee records and administrative workflows using a modern JavaScript stack.',
    problem:
      'Small and mid-sized teams need straightforward, dependable internal tools to manage personnel directories, departmental assignments, and performance logs without bloated enterprise software costs.',
    solution:
      'Designed and deployed a responsive MERN (MongoDB, Express, React, Node.js) application supporting complete CRUD operations, token-based authentication, and departmental filtering.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
    keyFeatures: [
      'Comprehensive employee record directory with search, filter, and pagination',
      'Full CRUD operations for onboarding, updating, and archiving staff profiles',
      'Secure administrative authentication and protected frontend routes',
      'Departmental categorization, salary range indexing, and designation mapping',
      'Well-structured REST APIs with clean controller-service separation',
    ],
    liveDemoUrl: undefined,
    githubUrl: undefined,
    isRepoPrivateOrPending: true,
    visualType: 'employee',
    architectureDetails: {
      systemFlow: [
        'React single-page application communicates with Express REST backend via structured API services',
        'Authentication layer issues JWT tokens upon verified administrator login',
        'Route guards protect administrative dashboard views and sensitive mutation routes',
        'MongoDB stores employee records with schema-level validation constraints',
        'Instant UI updates with optimistic rendering and notification toasts',
      ],
      technicalHighlights: [
        'Clean Model-View-Controller backend architectural pattern',
        'Reusable form components with comprehensive client and server validation',
        'Asynchronous state handling with dedicated loading and error boundaries',
      ],
      securityOrPerformance: [
        'Input sanitization preventing NoSQL injection attempts',
        'Strict CORS headers and secure credential handling',
      ],
    },
  },
];
