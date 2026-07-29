// Project images: drop a file named `<slug>.jpg` (or .png) into /public/projects/
// e.g. /public/projects/shopverse-marketplace.svg — the card will pick it up
// automatically. Until an image exists, the card falls back to a branded
// gradient placeholder, so nothing breaks if an image is missing.

// Prefix with the app's base path (e.g. '/hexint-soft-website/') so images
// resolve correctly both in dev and when deployed under a sub-path.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const projects = [
  {
    slug: 'shopverse-marketplace',
    title: 'ShopVerse — Multi-Vendor E-commerce Marketplace',
    category: 'E-commerce',
    role: 'Full-Stack Developer',
    description:
      'A full-stack multi-vendor marketplace with dedicated Customer, Vendor, and Admin dashboards, built to handle real-world catalog, cart, and order-management workflows end to end.',
    features: [
      'Secure JWT authentication across three distinct dashboards',
      'Product management, shopping cart, wishlist, and order tracking',
      'Advanced search, filtering, and vendor analytics dashboards',
      'Scalable REST APIs backed by MongoDB',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Chart.js', 'Cloudinary'],
    image: asset('projects/shopverse-marketplace.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/shopverse-marketplace',
  },
  {
    slug: 'smart-study-planner',
    title: 'Smart Study Planner',
    category: 'Full-Stack Web App',
    role: 'Full-Stack Developer',
    description:
      'A full-stack study planning application that helps students organize subjects, tasks, and schedules with a data-driven dashboard for tracking progress over time.',
    features: [
      'JWT-secured subject management and task tracking',
      'Interactive calendar with progress analytics and charts',
      'Responsive dashboard with dark/light mode',
      'RESTful APIs backed by MongoDB',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap 5', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
    image: asset('projects/smart-study-planner.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/smart-study-planner',
  },
  {
    slug: 'loan-default-prediction-system',
    title: 'AI-Powered Loan Default Prediction System',
    category: 'AI / ML Project',
    role: 'ML & Full-Stack Developer',
    description:
      'An end-to-end machine learning system that assesses borrower default risk in real time, wrapped in a full web application with authentication and prediction history.',
    features: [
      'Logistic Regression model trained with data preprocessing and label encoding',
      'Real-time predictions via a Flask-based web app',
      'User authentication with saved prediction history',
      'Interactive dashboard for reviewing risk assessments',
    ],
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'SQLite', 'Jinja2', 'Bootstrap'],
    image: asset('projects/loan-default-prediction-system.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/loan-default-prediction-system',
  },
  {
    slug: 'ai-finance-tracker',
    title: 'AI Finance Tracker',
    category: 'AI / ML Project',
    role: 'Python Developer',
    description:
      'An AI-inspired personal finance tracker that goes beyond expense logging, using rule-based logic and time-series analysis to flag spending patterns and score financial health.',
    features: [
      'Financial health scoring engine (0–100)',
      'Rule-based auto-categorization of expenses',
      'Time-series analysis to detect spending spikes',
      'Bill detection and budget monitoring',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Rule-Based AI Logic', 'CSV/JSON'],
    image: asset('projects/ai-finance-tracker.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/AI-Python-Project',
  },
  {
    slug: 'responsive-ecommerce-website',
    title: 'Responsive E-Commerce Website',
    category: 'E-commerce',
    role: 'Frontend Developer',
    description:
      'A fully responsive e-commerce front end focused on clean visual design and usability, built with hand-written HTML, CSS, and vanilla JavaScript across every breakpoint.',
    features: [
      'Fully responsive across mobile, tablet, and desktop',
      'Interactive UI components built without a framework',
      'Modern, conversion-friendly layout and visual hierarchy',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'Bootstrap', 'Responsive Web Design'],
    image: asset('projects/responsive-ecommerce-website.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/Arisha-Inayat',
  },
  {
    slug: 'flight-management-system',
    title: 'Flight Management System',
    category: 'C++ / DSA Project',
    role: 'C++ Developer',
    description:
      'A console-based airline booking and management system built around graph algorithms, engineered to calculate optimal routes and manage passengers efficiently at scale.',
    features: [
      "Graph-based shortest and cheapest route calculation using Dijkstra's algorithm",
      'Custom data structures for flight, route, and passenger handling',
      'Queue-based and priority-queue processing for booking logic',
    ],
    tech: ['C++', 'Graph Algorithms', "Dijkstra's Algorithm", 'Priority Queue', 'Linked List'],
    image: asset('projects/flight-management-system.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/Cpp-Project',
  },
  {
    slug: 'university-management-system',
    title: 'University Management System',
    category: 'Java Project',
    role: 'Java Developer',
    description:
      'A desktop-based university management system built on solid OOP principles, handling student records, course registration, and academic data with a normalized MySQL backend.',
    features: [
      'Modules for student management, course registration, and academic records',
      'JDBC-based MySQL integration for persistent, secure storage',
      'Modular, scalable architecture using encapsulation and validation',
    ],
    tech: ['Java', 'MySQL', 'JDBC', 'OOP', 'Exception Handling'],
    image: asset('projects/university-management-system.svg'),
    demoUrl: null,
    githubUrl: 'https://github.com/Arisha328/OOP-Java-Project',
  },
  {
    slug: 'skincare-mobile-app-ui',
    title: 'Skin Care Mobile App — UI/UX Design',
    category: 'UI/UX Design',
    role: 'UI/UX Designer',
    description:
      'A high-fidelity, 30-screen mobile and web prototype for a skincare app, designed around intuitive user flows and a clean, modern aesthetic grounded in real UI/UX principles.',
    features: [
      '30 high-fidelity screens covering full user flows',
      'Skincare routine tracking and personalized recommendations UI',
      'Applied visual hierarchy, consistency, and usability best practices',
    ],
    tech: ['Figma', 'Wireframing', 'Prototyping', 'User Flow Design'],
    image: asset('projects/skincare-mobile-app-ui.svg'),
    demoUrl: 'https://drive.google.com/drive/folders/1i_cbI2eaogTZx_kyapOf9Lj6wxFz_c4b?usp=sharing',
    demoLabel: 'View Prototype',
    githubUrl: null,
  },
]

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
]
