export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; evidence?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / Machine Learning",
    icon: "brain-circuit",
    skills: [
      { name: "Python", evidence: "Used across ML, automation and AI-agent projects" },
      { name: "TensorFlow", evidence: "Face Mask Detection System" },
      { name: "Scikit-learn", evidence: "Student Performance Prediction System" },
      { name: "XGBoost", evidence: "Student Performance Prediction System (R² 0.914)" },
      { name: "OpenCV", evidence: "Face Mask Detection System" },
      { name: "Pandas / Matplotlib / Seaborn", evidence: "Exploratory Data Analysis — Starbucks Dataset" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "layout-panel-left",
    skills: [
      { name: "React & TypeScript", evidence: "CodeForge, Resume AI" },
      { name: "JavaScript (DOM/UI)", evidence: "Aether Weather App, Furqan Chess" },
      { name: "HTML5 & CSS3", evidence: "Used across all frontend projects" },
      { name: "Tailwind CSS", evidence: "Freelance client web apps" },
      { name: "Chart.js", evidence: "Student Management System (Web-Based)" },
    ],
  },
  {
    category: "Backend Development",
    icon: "server",
    skills: [
      { name: "PHP", evidence: "Furqan Store, Student Fee Management System" },
      { name: "Node.js / Express.js", evidence: "CodeForge backend" },
      { name: "REST-style APIs", evidence: "Client freelance projects" },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", evidence: "Furqan Store, Student Fee Management System" },
      { name: "Microsoft SQL Server", evidence: "SQL query practice & relational analysis" },
    ],
  },
  {
    category: "Automation",
    icon: "workflow",
    skills: [
      { name: "n8n", evidence: "Restaurant AI Automation Workflow" },
      { name: "Gemini API (LLM Integration)", evidence: "Restaurant AI Automation Workflow" },
    ],
  },
  {
    category: "Developer Tools",
    icon: "wrench",
    skills: [
      { name: "Git & GitHub", evidence: "Version control across 30+ repositories" },
      { name: "VS Code", evidence: "Primary development environment" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    icon: "graduation-cap",
    skills: [
      { name: "Data Structures & Algorithms", evidence: "DSA Lab Implementations (C++)" },
      { name: "OOP & System Design", evidence: "C++ Object-Oriented Programming" },
      { name: "C++", evidence: "9+ systems programming projects" },
    ],
  },
];
