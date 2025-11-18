export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-crypto-ml",
    slug: "crypto-ml-trading",
    title: "Machine-Learning-Based Cryptocurrency Price/Movement Prediction and Trading Signal Generation Model",
    description:
      "An AI-powered cryptocurrency trading platform that generates real-time trading signals using machine learning algorithms.",
    longDescription:
      "An AI-powered cryptocurrency trading platform that generates real-time trading signals using machine learning algorithms. The application combines LSTM neural networks and Random Forest models to analyze BTC/USDT market data and provide trading recommendations. Features a modern React frontend with interactive candlestick charts, technical indicators, and live market data for top 20 cryptocurrencies with automatic updates every 3 minutes.",
    image: "/images/projects/crypto-ml-preview.png",
    technologies: [
      "Python",
      "LSTM",
      "Random Forest",
      "React",
      "Machine Learning",
      "TensorFlow",
      "REST API",
      "JavaScript",
      "Chart.js",
      "WebSocket",
    ],
    features: [
      "Machine learning trading signals using LSTM and Random Forest models",
      "Real-time market data for top 20 cryptocurrencies",
      "Interactive candlestick charts with technical indicators",
      "Live updates every 3 minutes",
      "BTC/USDT market analysis and predictions",
      "Modern React frontend with responsive design",
      "RESTful API for data communication",
    ],
    github: "https://github.com/ertugrulbayraktar/crypto-ml-trading",
    featured: true,
  },
  {
    id: "project-llux-ecommerce",
    slug: "llux-ecommerce-platform",
    title: "LLUX E-Commerce Platform",
    description:
      "A modern full-stack e-commerce application developed to provide a seamless online shopping experience with ASP.NET Core Web API and React TypeScript.",
    longDescription:
      "A modern full-stack e-commerce application developed to provide a seamless online shopping experience. The backend is powered by ASP.NET Core Web API, while the frontend is built with React and TypeScript, ensuring both scalability and a responsive user interface. Features comprehensive product and category management for admins, shopping cart functionality with order processing, secure authentication with JWT and role-based access control, advanced search, sorting, and filtering capabilities, Redis caching for performance optimization, and structured logging with Serilog. The API is fully documented with Swagger/OpenAPI for testing and integration.",
    image: "/images/projects/llux-ecommerce-preview.png",
    technologies: [
      "ASP.NET Core Web API",
      ".NET 8",
      "React",
      "TypeScript",
      "JWT Authentication",
      "Redis",
      "Serilog",
      "Swagger/OpenAPI",
      "Entity Framework Core",
      "SQL Server",
    ],
    features: [
      "Comprehensive product and category management system",
      "Shopping cart functionality with quantity updates and order processing",
      "Secure user registration, login, and role-based access with JWT",
      "Advanced search, sorting, and filtering for product discovery",
      "Redis caching for performance optimization",
      "Structured logging and monitoring with Serilog",
      "Comprehensive API documentation with Swagger/OpenAPI",
    ],
    github: "https://github.com/ertugrulbayraktr/Llux-E-Commerce-Platform",
    featured: true,
  },
  {
    id: "project-ticketly",
    slug: "ticketly-flight-ticketing-system",
    title: "Ticketly - Flight Ticketing System",
    description:
      "A full-stack web application designed to streamline the process of airline ticket sales and management with ASP.NET Core Web API and React TypeScript.",
    longDescription:
      "A full-stack web application designed to streamline the process of airline ticket sales and management. The system is built with ASP.NET Core Web API on the backend and React with TypeScript on the frontend, providing a scalable and user-friendly solution. Features secure authentication with JWT, role-based access control for Admin and Customer roles, comprehensive flight management, ticket booking system with cart functionality, simulated payment gateways, Redis caching for improved performance, and structured logging with Serilog. The API is fully documented with Swagger/OpenAPI for testing and integration.",
    image: "/images/projects/ticketly-preview.png",
    technologies: [
      "ASP.NET Core Web API",
      ".NET 8",
      "React",
      "TypeScript",
      "JWT Authentication",
      "Redis",
      "Serilog",
      "Swagger/OpenAPI",
      "Entity Framework Core",
      "SQL Server",
    ],
    features: [
      "Secure JWT-based authentication with role-based access control",
      "Admin panel for flight management and real-time availability tracking",
      "Customer ticket booking with search and cart functionality",
      "Simulated payment gateway integration with order history",
      "Redis caching for improved performance and scalability",
      "Structured logging and monitoring with Serilog",
      "Comprehensive API documentation with Swagger/OpenAPI",
      "Enterprise-level architecture and design patterns",
    ],
    github: "https://github.com/ertugrulbayraktr/Ticketly-Flight-Ticketing-System",
    featured: true,
  },
  {
    id: "project-taskmaster",
    slug: "taskmaster-pm",
    title: "TaskMaster Project Management Tool",
    description:
      "A comprehensive project management web application that enables teams to collaborate effectively through task tracking and project coordination.",
    longDescription:
      "A comprehensive project management web application that enables teams to collaborate effectively through task tracking and project coordination. The system features an interactive Kanban board with drag-and-drop functionality, role-based access control, and real-time notifications. Built with Django's ORM for complex database relationships between users, teams, projects, and tasks. Implemented AJAX for seamless user interactions and responsive design for cross-platform compatibility.",
    image: "/images/projects/taskmaster-preview.png",
    technologies: [
      "Django",
      "Python",
      "JavaScript",
      "HTML/CSS",
      "AJAX",
      "PostgreSQL",
      "Django ORM",
      "Bootstrap",
      "jQuery",
    ],
    features: [
      "Multi-user collaboration with role-based access control",
      "Interactive Kanban board with drag-and-drop functionality",
      "Team creation and management",
      "Progress tracking and task monitoring",
      "Real-time notification system",
      "AJAX-powered seamless user interactions",
      "Responsive design for cross-platform compatibility",
    ],
    github: "https://github.com/ertugrulbayraktr/cs50w-finalproject-TaskMaster",
    featured: true,
  },
  {
    id: "project-candle-bot",
    slug: "candle-range-bot",
    title: "CandleRangeTheory Pattern Detection Telegram Bot For Forex and Cryptocurrency Trading",
    description:
      "An advanced trading automation tool that scans Forex and Cryptocurrency markets to detect Candle Range Theory patterns with automated Telegram alerts.",
    longDescription:
      "An advanced trading automation tool that scans the Forex and Cryptocurrency markets to detect Candle Range Theory (CRT) patterns on 4H, 1D, and Weekly timeframes. The system automatically calculates entry, stop-loss, and take-profit levels with defined risk/reward ratios, and delivers instant alerts via Telegram notifications. This project is built with Python and integrates market data analysis with Telegram Bot API, providing traders with a seamless and reliable solution for automated pattern detection and trade signal delivery.",
    image: "/images/projects/candle-bot-preview.png",
    technologies: [
      "Python",
      "Telegram Bot API",
      "Trading APIs",
      "Technical Analysis",
      "Forex Trading",
      "Cryptocurrency",
      "Risk Management",
      "Pattern Recognition",
    ],
    features: [
      "Automatic detection of Candle Range Theory (CRT) patterns",
      "Multi-timeframe scanning (4H, 1D, Weekly)",
      "Risk/Reward calculation with entry, stop-loss, and take-profit levels",
      "Real-time Telegram notifications for immediate trade alerts",
      "Built with Python for flexibility and extensibility",
      "Modular design for integrating with multiple data sources and exchanges",
      "Efficient and reliable system for Forex and Cryptocurrency trading",
    ],
    github: "https://github.com/ertugrulbayraktar/candle-range-bot",
    featured: true,
  },
  {
    id: "project-portfolio",
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase projects and skills.",
    longDescription:
      "This portfolio website serves as a central hub to showcase projects, skills, and experience. Built with Next.js and React, it features a clean, responsive design with subtle animations and a carefully selected color scheme. The site includes project showcases with detailed descriptions, an about page highlighting education and experience, and optimized performance with server-side rendering. The modular component structure and clean code organization demonstrate front-end development approach.",
    image: "/images/projects/portfolio-preview.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS Animations",
    ],
    features: [
      "Clean, modern UI with carefully selected color scheme",
      "Responsive design that works seamlessly on all devices",
      "Subtle animations and interactive elements for enhanced user experience",
      "Project showcase with detailed descriptions and links",
      "About page with education, experience, and skills sections",
      "Optimized performance with Next.js server-side rendering",
      "Modular component structure for maintainability",
    ],
    github: "https://github.com/ertugrulbayraktar/portfolio",
    featured: true,
  },
  {
    id: "project-expense-tracker",
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A desktop financial management application that helps users track expenses, manage budgets, and analyze spending patterns.",
    longDescription:
      "A desktop financial management application that helps users track expenses, manage budgets, and analyze spending patterns. The system supports multi-user authentication, hierarchical expense categorization, and comprehensive reporting with data visualizations. Features include budget tracking with overspending alerts, CSV import/export functionality, and anomaly detection for unusual expenses. Built with an intuitive GUI offering multiple themes and interactive charts.",
    image: "/images/projects/expense-tracker-preview.png",
    technologies: [
      "Python",
      "Tkinter",
      "SQLite",
      "Pandas",
      "Matplotlib",
      "CSV",
      "GUI Development",
    ],
    features: [
      "Multi-user support with secure authentication",
      "Hierarchical expense categorization",
      "Budget management with overspending alerts",
      "Data visualization with interactive charts",
      "Spending analytics and pattern recognition",
      "CSV import/export functionality",
      "Anomaly detection for unusual expenses",
      "Multiple themes and intuitive GUI",
    ],
    github: "https://github.com/ertugrulbayraktr/expense-tracker-python",
    featured: true,
  },
  {
    id: "project-notes-api",
    slug: "notes-api",
    title: "Notes",
    description:
      "A backend application that provides a REST API for users to manage their notes with Kafka integration.",
    longDescription:
      "A backend application that provides a REST API for users to manage their notes. It performs CRUD operations using a PostgreSQL database. Additionally, it integrates with Kafka using Apache Camel to produce messages. Whenever a note is created, updated, or deleted, a corresponding Kafka event is sent. This ensures that every change triggers a Kafka message immediately, allowing external systems to receive real-time updates.",
    image: "/images/projects/notes-api-preview.png",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Kafka",
      "Apache Camel",
      "REST API",
      "Maven",
      "JPA/Hibernate",
    ],
    features: [
      "Complete CRUD operations for note management",
      "PostgreSQL database integration",
      "Kafka message production with Apache Camel",
      "Real-time event streaming for external systems",
      "RESTful API design",
      "Immediate message triggering on data changes",
      "Scalable microservices architecture",
    ],
    github: "https://github.com/ertugrulbayraktr/quarkus-kafka-notes-app",
    featured: true,
  },
  {
    id: "project-media-player",
    slug: "cross-platform-media-player",
    title: "Cross Platform Mobile Media Player",
    description:
      "A modern, cross-platform media player built with React Native and Expo featuring online streaming and local playback.",
    longDescription:
      "A modern, cross-platform media player built with React Native and Expo. Features online music streaming via Deezer API, local media playback, and a sleek UI with animations and gestures. Supports iOS, Android, and Web platforms with a unified codebase and responsive design.",
    image: "/images/projects/media-player-preview.png",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Deezer API",
      "Mobile Development",
      "Cross-Platform",
      "Animations",
    ],
    features: [
      "Online music streaming via Deezer API",
      "Local media file playback support",
      "Sleek UI with smooth animations and gestures",
      "Cross-platform support (iOS, Android, Web)",
      "Unified codebase with React Native",
      "Responsive design for different screen sizes",
      "Modern media player controls and interface",
    ],
    github: "https://github.com/ertugrulbayraktr/react-native-mobile-media-player",
    featured: true,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured).slice(0, 4);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
