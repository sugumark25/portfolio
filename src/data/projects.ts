import type { Project } from '../types';


export const projectsData: Project[] = [
  {
    id: 'iot-sandbox',
    number: '01',
    title: 'AI-Based Sandbox for Analyzing IoT Networks',
    subtitle: 'Edge AI Anomaly Detection & Attack Simulation Environment',
    repoUrl: 'https://github.com/sugumark25/AI-Based_Sandox_For_Analyzing_IoT_Networks',
    overview: 'An end-to-end AI-powered IoT security sandbox designed to collect IoT network traffic, detect anomalies, train machine learning models, perform real-time edge detection, and simulate attacks. The system combines IoT devices, edge computing, TinyML, machine learning models, real-time monitoring, and backend validation to identify suspicious network activity.',
    objective: {
      main: 'Build an intelligent IoT security framework capable of detecting abnormal network behavior at the edge and performing deeper analysis in a sandbox environment.',
      bullets: [
        'Monitor IoT network activity in real time',
        'Extract meaningful network traffic features for anomaly modeling',
        'Detect suspicious behavior and apply Z-score pre-filtering',
        'Perform real-time edge anomaly detection using TinyML (TensorFlow Lite Micro)',
        'Send suspicious traffic flows for deeper backend validation via MQTT/HTTP',
        'Simulate attack scenarios for automated security testing & dashboard monitoring'
      ]
    },
    keyFeatures: [
      'ESP32-based edge monitoring',
      'IoT network traffic analysis & extraction',
      'Real-time anomaly detection pipeline',
      'Z-score based statistical pre-filtering',
      'TinyML edge inference on microcontroller',
      'Machine learning-based backend validation',
      'XGBoost anomaly detection classification',
      'Autoencoder-based reconstruction anomaly detection',
      'Ensemble-based decision making engine',
      'MQTT & HTTP fallback communication protocols',
      'Real-time data collection & feature store',
      'Synthetic attack simulation environment',
      'Backend prediction APIs (Flask & Socket.IO)',
      'Real-time monitoring security dashboard'
    ],
    architecture: {
      nodes: [
        'ESP32 Edge Device',
        'Network Traffic Monitoring',
        'Feature Extraction',
        'Z-Score Pre-Filtering',
        'TinyML Anomaly Detection',
        'Suspicious Flow Mirroring',
        'MQTT / HTTP Protocol',
        'Python Backend Sandbox',
        'XGBoost + Autoencoder Ensemble',
        'Final Threat Decision',
        'Alert / Block Command / Dashboard'
      ],
      description: 'Hierarchical edge-to-cloud cyber-physical threat identification pipeline'
    },
    techStack: [
      {
        category: 'IoT & Edge Computing',
        items: ['ESP32', 'Embedded C++', 'Arduino', 'DHT22 Sensors', 'MQTT', 'Mosquitto Broker']
      },
      {
        category: 'Machine Learning & Analytics',
        items: ['Python', 'Scikit-learn', 'XGBoost', 'Autoencoders', 'SMOTE', 'StandardScaler', 'Pandas']
      },
      {
        category: 'TinyML',
        items: ['TensorFlow Lite Micro', 'Edge Inference', 'Quantized Neural Networks']
      },
      {
        category: 'Backend & APIs',
        items: ['Flask', 'REST APIs', 'Socket.IO Realtime Engine']
      }
    ]
  },
  {
    id: 'metastatic-detection',
    number: '02',
    title: 'Metastatic Tissue Detection',
    subtitle: 'Deep Learning Histopathology Image Classification System',
    repoUrl: 'https://github.com/sugumark25/Metastatic_Tissue_Detection',
    overview: 'An automated deep learning system designed to classify histopathology images into metastatic and non-metastatic tissue categories using ResNet-34 transfer learning to assist in automated medical screening.',
    objective: {
      main: 'Develop an AI-powered image classification system capable of identifying metastatic tissue patterns from histopathology images with high clinical sensitivity.',
      bullets: [
        'Automate microscopic histopathology tissue analysis',
        'Apply ResNet-34 transfer learning to extract complex histological feature representations',
        'Improve automated cancer screening reliability with statistical validation metrics',
        'Deploy backend API and interactive diagnostic dashboard'
      ]
    },
    keyFeatures: [
      'Histopathology image classification',
      'Metastatic tissue detection & localization',
      'Non-metastatic tissue classification',
      'ResNet-34 transfer learning architecture',
      'Deep learning training & evaluation pipeline',
      'Automated image preprocessing & normalization',
      'Comprehensive performance evaluation (Precision, Recall, F1, ROC-AUC)',
      'FastAPI REST server deployment',
      'Interactive Streamlit web frontend'
    ],
    metrics: [
      { label: 'Test Accuracy', value: '92.3%' },
      { label: 'Recall (Sensitivity)', value: '95.2%' },
      { label: 'Precision', value: '91.8%' },
      { label: 'F1 Score', value: '93.4%' },
      { label: 'ROC-AUC', value: '0.963' }
    ],
    techStack: [
      {
        category: 'Deep Learning & Vision',
        items: ['Python', 'PyTorch', 'ResNet-34', 'Transfer Learning', 'Computer Vision', 'Torchvision']
      },
      {
        category: 'API & Web Interface',
        items: ['FastAPI', 'Streamlit', 'NumPy', 'Matplotlib', 'Scikit-learn']
      }
    ]
  },
  {
    id: 'multi-agent-rag',
    number: '03',
    title: 'Multi-Agent RAG System for Verified Document Intelligence',
    subtitle: 'History-Aware Hybrid Vector Search & Agentic Citation System',
    repoUrl: 'https://github.com/sugumark25/Multi-Agent_RAG_System_for_Verified_Document_Intelligence',
    overview: 'A history-aware Multi-Agent Retrieval-Augmented Generation system designed for verified document intelligence. The system retrieves relevant information from documents, performs hybrid search, manages conversational history, coordinates multiple AI agents, and generates citation-based responses.',
    objective: {
      main: 'Build a reliable AI document intelligence system that answers queries based on indexed documents while eliminating hallucinations using multi-agent verification and hybrid vector retrieval.',
      bullets: [
        'Coordinate autonomous specialized AI agents using LangGraph graph execution',
        'Implement hybrid retrieval combining semantic vector search (Qdrant) and keyword search (BM25)',
        'Manage full conversational history and selective state memory across user sessions',
        'Provide verified citation-grounded responses back to the user'
      ]
    },
    keyFeatures: [
      'Multi-Agent AI architecture with state graph workflow engine',
      'Retrieval-Augmented Generation (RAG) framework',
      'Document intelligence & structure parsing',
      'History-aware context retention & conversational memory',
      'LangGraph workflow orchestrator',
      'Qdrant vector database integration',
      'BM25 lexical retrieval engine',
      'Hybrid search re-ranking',
      'FastAPI asynchronous backend server',
      'Citation-based response generation for hallucination check'
    ],
    techStack: [
      {
        category: 'AI & Multi-Agent Frameworks',
        items: ['TypeScript', 'LangGraph', 'RAG Architecture', 'Multi-Agent AI', 'Conversational Memory']
      },
      {
        category: 'Vector Search & Information Retrieval',
        items: ['Qdrant Vector DB', 'BM25 Engine', 'Hybrid Search', 'Dense & Sparse Embeddings']
      },
      {
        category: 'Backend APIs',
        items: ['FastAPI', 'Async Python', 'REST Endpoints']
      }
    ]
  },
  {
    id: 'user-feedback-system',
    number: '04',
    title: 'User Feedback System for Websites',
    subtitle: 'Production-Grade Java Spring Boot Backend Engine',
    repoUrl: 'https://github.com/sugumark25/User_Feedback_System_for_Websites',
    overview: 'A backend application designed to help websites collect, store, manage, filter, and analyze user feedback efficiently. The system provides APIs and backend services for managing feedback data using a structured Java and Spring Boot architecture.',
    objective: {
      main: 'Develop a scalable backend system for collecting and managing website feedback, emphasizing clean API design, database normalization, validation, and testable service architecture.',
      bullets: [
        'Design modular RESTful API endpoints following layered controller-service-repository architecture',
        'Integrate MySQL relational database with Spring Data JPA and Hibernate ORM',
        'Implement input validation, centralized exception handling, and custom error DTOs',
        'Ensure reliability with unit tests and database integration tests'
      ]
    },
    keyFeatures: [
      'Feedback submission & payload validation',
      'Structured feedback persistence in MySQL',
      'Full RESTful CRUD API endpoints',
      'Dynamic multi-criteria feedback filtering & pagination',
      'Layered Java architecture (Controller -> Service -> Repository -> Entity)',
      'Custom exception handlers & HTTP response status mapping',
      'Hibernate ORM & JPA entity relationships',
      'Unit testing & API endpoint integration tests using JUnit 5 & Mockito'
    ],
    techStack: [
      {
        category: 'Core Java & Backend Framework',
        items: ['Java 17+', 'Spring Boot', 'Spring Data JPA', 'Hibernate']
      },
      {
        category: 'Database & Build Tools',
        items: ['MySQL', 'SQL Queries', 'Maven', 'REST APIs', 'JUnit 5']
      }
    ]
  },
  {
    id: 'recipe-finder',
    number: '05',
    title: 'Recipe Finder App',
    subtitle: 'Interactive Modern React Discovery Web Application',
    repoUrl: 'https://github.com/sugumark25/Recipe-Finder-App',
    overview: 'A modern recipe discovery web application that allows users to search, discover, and manage their favorite recipes. The application focuses on a smooth user experience and modern React development practices.',
    objective: {
      main: 'Build a responsive and user-friendly recipe discovery platform where users can efficiently search and explore culinary recipes from external REST APIs.',
      bullets: [
        'Deliver a sleek, mobile-first responsive user interface',
        'Integrate real-time recipe API searching and detail view rendering',
        'Provide client-side favorite recipe bookmarking & persistent state',
        'Apply modern React component composition and clean CSS styling'
      ]
    },
    keyFeatures: [
      'Real-time recipe search query filtering',
      'Recipe discovery feed & detailed view modal',
      'Responsive UI optimized across desktop and mobile devices',
      'Modern modular React component architecture',
      'Favorites bookmarking system with local persistence',
      'Asynchronous REST API integration & error handling',
      'Interactive animations & micro-interactions'
    ],
    techStack: [
      {
        category: 'Frontend & UI',
        items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite']
      },
      {
        category: 'API & Architecture',
        items: ['REST APIs', 'Fetch API', 'Component State Management']
      }
    ]
  }
];
