import type { SkillCategory, KnowledgeSection, EducationItem, ExperienceItem, DevelopmentApproachItem } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: ['Java (Primary)', 'C++', 'Python', 'SQL', 'JavaScript']
  },
  {
    title: 'Backend Engineering',
    iconName: 'Server',
    skills: [
      'Spring Boot',
      'RESTful APIs',
      'Spring Data JPA',
      'JDBC & MySQL',
      'Spring Security & Auth',
      'Maven',
      'JUnit'
    ]
  },
  {
    title: 'Artificial Intelligence & ML',
    iconName: 'Brain',
    skills: [
      'Machine Learning',
      'Deep Learning (PyTorch)',
      'ResNet-34 Architecture',
      'XGBoost & Ensembles',
      'Autoencoders',
      'Computer Vision'
    ]
  },
  {
    title: 'Generative AI & RAG',
    iconName: 'Sparkles',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'Multi-Agent Systems (LangGraph)',
      'Vector DB (Qdrant)',
      'Hybrid Search (BM25)',
      'Prompt Engineering'
    ]
  },
  {
    title: 'IoT & Edge Computing',
    iconName: 'Cpu',
    skills: [
      'ESP32 & Microcontrollers',
      'MQTT Protocol',
      'Edge Computing & TinyML',
      'IoT Sensor Telemetry',
      'Network Anomaly Detection'
    ]
  },
  {
    title: 'Databases & Tools',
    iconName: 'Database',
    skills: ['MySQL', 'Git & GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Google Colab']
  }
];

export const knowledgeSectionsData: KnowledgeSection[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    iconName: 'Terminal',
    summary: 'Strong object-oriented fundamentals, clean code principles, REST API design, and end-to-end database integration.',
    details: [
      'Object-Oriented Programming (OOP) Principles',
      'Clean Code & Modular Architecture',
      'RESTful API Design & Versioning',
      'Database Integration & Persistence Management',
      'Software Development Lifecycle & Git'
    ]
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving & DSA',
    iconName: 'Binary',
    summary: 'Active focus on Data Structures and Algorithms in Java for efficient problem solving.',
    details: [
      'Arrays, Strings & Two Pointers',
      'Stacks, Queues & HashMaps',
      'Recursion & Backtracking',
      'Trees & Binary Search Trees',
      'Graphs (BFS, DFS)',
      'Time & Space Complexity Optimization'
    ]
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    iconName: 'ServerCognitive',
    summary: 'Building production-grade Java Spring Boot APIs following layered architecture patterns.',
    details: [
      'Spring Boot Controllers, Services & Repositories',
      'Spring Data JPA & JDBC Persistence',
      'DTO Pattern & Request Validation',
      'Authentication & Exception Handling',
      'Unit Testing with JUnit'
    ]
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & ML',
    iconName: 'BrainCircuit',
    summary: 'Hands-on experience with medical image classification, tabular anomaly detection, and deep neural networks.',
    details: [
      'Classification & Anomaly Detection',
      'Transfer Learning (ResNet-34)',
      'Ensemble Models (XGBoost)',
      'Autoencoders for Feature Extraction',
      'Precision, Recall, F1 & ROC-AUC Evaluation'
    ]
  },
  {
    id: 'genai-rag',
    title: 'Generative AI & RAG',
    iconName: 'Sparkles',
    summary: 'Designing multi-agent workflows, vector search pipelines, and citation-verified document AI.',
    details: [
      'Retrieval-Augmented Generation (RAG)',
      'Vector Search (Qdrant) & Hybrid Lexical (BM25)',
      'Multi-Agent Workflows via LangGraph',
      'Document Intelligence & Chunking',
      'Citation-Based AI Response Verification'
    ]
  },
  {
    id: 'iot-edge',
    title: 'IoT & Edge AI',
    iconName: 'Radio',
    summary: 'Hardware sensor telemetry, MQTT communication, and real-time edge anomaly detection.',
    details: [
      'ESP32 Microcontroller Programming',
      'MQTT Pub/Sub Telemetry Protocols',
      'IoT Sensor Telemetry Pipelines',
      'TinyML & Edge Anomaly Detection',
      'Edge-to-Cloud Integration'
    ]
  }
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Engineering',
  specialization: 'B.E. Computer Science and Engineering – Internet of Things',
  institution: 'Sri Krishna College of Technology, Coimbatore',
  duration: '2023 – 2027',
  cgpa: '7.7',
  status: 'Undergraduate Student',
  relevantAreas: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Computer Networks',
    'Internet of Things',
    'Machine Learning'
  ]
};

export const experienceData: ExperienceItem = {
  title: 'Software Development Intern',
  company: 'Mist Solutions',
  duration: 'May 2025 – June 2025',
  project: 'Vetri Foods Admin Panel',
  responsibilities: [
    'Engineered administrative frontend and backend components for food distribution workflows',
    'Built authentication, session security, and structured inventory management modules',
    'Implemented category taxonomy workflows and optimized MySQL database queries',
    'Performed end-to-end integration testing and bug fixes across frontend and backend layers'
  ]
};

export const developmentApproachData: DevelopmentApproachItem[] = [
  {
    title: 'Understand',
    description: 'Analyze core problem requirements, technical constraints, and data flows.',
    iconName: 'Search',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Design',
    description: 'Architect data models, RESTful APIs, and component interactions.',
    iconName: 'Compass',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Build',
    description: 'Implement modular, maintainable code adhering to clean architecture standards.',
    iconName: 'Code',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Test & Refine',
    description: 'Verify edge cases, optimize queries, and refine performance.',
    iconName: 'Zap',
    color: 'from-purple-500 to-pink-500'
  }
];

export const currentlyLearningData: string[] = [
  'Advanced Spring Boot & Microservices',
  'Data Structures & Algorithms in Java',
  'System Design Fundamentals',
  'Multi-Agent AI Systems (LangGraph)',
  'Edge Computing & TinyML'
];
