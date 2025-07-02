import { Project, Skill, TimelineItem, Service, TerminalCommand } from '../types';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2022',
    title: 'Career Pivot',
    description: 'Left traditional role to pursue cloud engineering',
    achievements: [
      'Completed 500+ hours of self-directed learning',
      'Built first production-ready AWS infrastructure',
      'Established foundation in DevOps principles'
    ]
  },
  {
    year: '2023',
    title: 'Certification & Skill Building',
    description: 'Rapid skill acquisition and practical application',
    achievements: [
      'Earned AWS Solutions Architect Associate',
      'Achieved 2 institutional DevOps certifications',
      'Contributed to 15+ open-source projects',
      'Built CI/CD pipelines reducing deployment time by 75%'
    ]
  },
  {
    year: '2024',
    title: 'Advanced Specialization',
    description: 'Mastering multi-cloud and AI-enhanced DevOps',
    achievements: [
      'Mastered multi-cloud architectures (AWS, Azure, GCP)',
      'Automated infrastructure provisioning with Terraform',
      'Integrated AI/ML workflows into DevOps pipelines',
      'Mentored 20+ developers in DevOps best practices'
    ]
  },
  {
    year: '2025',
    title: 'Ready for Impact',
    description: 'Seeking senior DevOps role or high-impact consulting',
    achievements: [
      '99.9% uptime track record across managed systems',
      '$50K+ in cloud cost optimizations delivered',
      'Built scalable platforms serving 100K+ users',
      'Led digital transformation initiatives'
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'AWS', level: 95, category: 'infrastructure' },
  { name: 'Azure', level: 85, category: 'infrastructure' },
  { name: 'GCP', level: 80, category: 'infrastructure' },
  { name: 'Kubernetes', level: 90, category: 'infrastructure' },
  { name: 'Docker', level: 95, category: 'infrastructure' },
  { name: 'Terraform', level: 92, category: 'devops' },
  { name: 'Jenkins', level: 88, category: 'devops' },
  { name: 'GitHub Actions', level: 93, category: 'devops' },
  { name: 'GitLab CI', level: 85, category: 'devops' },
  { name: 'Ansible', level: 82, category: 'devops' },
  { name: 'Prometheus', level: 88, category: 'monitoring' },
  { name: 'Grafana', level: 90, category: 'monitoring' },
  { name: 'ELK Stack', level: 85, category: 'monitoring' },
  { name: 'Datadog', level: 83, category: 'monitoring' },
  { name: 'GitHub Copilot', level: 90, category: 'ai-powered' },
  { name: 'AWS CodeWhisperer', level: 85, category: 'ai-powered' },
  { name: 'ChatGPT-4', level: 92, category: 'ai-powered' },
  { name: 'Claude', level: 88, category: 'ai-powered' }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'multi-cloud-k8s',
    title: 'Multi-Cloud Kubernetes Platform',
    description: 'Enterprise-grade Kubernetes platform spanning AWS, Azure, and GCP with unified management and monitoring.',
    challenge: 'Client needed to avoid vendor lock-in while maintaining consistent deployment patterns across multiple cloud providers.',
    solution: 'Implemented GitOps-based multi-cloud Kubernetes platform with Terraform, ArgoCD, and custom operators for cross-cloud networking.',
    technologies: ['Kubernetes', 'Terraform', 'ArgoCD', 'Istio', 'Prometheus'],
    impact: '99.99% uptime, 40% cost reduction through intelligent workload placement',
    repository: 'https://github.com/example/multi-cloud-k8s',
    category: 'cloud-infrastructure'
  },
  {
    id: 'ai-powered-cicd',
    title: 'AI-Powered CI/CD Pipeline',
    description: 'Intelligent CI/CD system using machine learning for test optimization, deployment risk assessment, and automated rollbacks.',
    challenge: 'Traditional CI/CD pipelines were slow and couldn\'t predict deployment failures or optimize test execution.',
    solution: 'Built ML-enhanced pipeline that analyzes code changes, predicts failure probability, and optimizes test execution order.',
    technologies: ['GitHub Actions', 'Python', 'TensorFlow', 'Docker', 'SonarQube'],
    impact: '60% faster deployments, 85% reduction in failed production releases',
    repository: 'https://github.com/example/ai-cicd',
    category: 'ai-integration'
  },
  {
    id: 'serverless-data-platform',
    title: 'Serverless Data Processing Platform',
    description: 'Real-time data processing platform using serverless architecture for cost-effective scaling and automatic resource management.',
    challenge: 'Client\'s data processing costs were skyrocketing with traditional always-on infrastructure for variable workloads.',
    solution: 'Architected event-driven serverless platform using AWS Lambda, Kinesis, and Step Functions with automatic scaling.',
    technologies: ['AWS Lambda', 'Kinesis', 'Step Functions', 'DynamoDB', 'CloudFormation'],
    impact: '70% cost reduction, sub-second processing latency, infinite horizontal scaling',
    repository: 'https://github.com/example/serverless-data',
    category: 'cloud-infrastructure'
  },
  {
    id: 'iac-framework',
    title: 'Infrastructure as Code Framework',
    description: 'Reusable Terraform modules and compliance automation framework for rapid, secure infrastructure deployment.',
    challenge: 'Teams were duplicating infrastructure code and struggling with compliance requirements across environments.',
    solution: 'Created modular Terraform framework with built-in security policies, automated testing, and compliance validation.',
    technologies: ['Terraform', 'Terratest', 'OPA', 'AWS Config', 'GitHub Actions'],
    impact: '80% faster infrastructure deployment, 100% compliance adherence, zero security incidents',
    repository: 'https://github.com/example/iac-framework',
    category: 'ci-cd'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Infrastructure as a Service (IaaS)',
    description: 'Complete cloud infrastructure design, migration, and optimization services.',
    price: '$200/hour',
    features: [
      'Cloud migration strategy and execution',
      'Multi-cloud architecture design',
      'Disaster recovery planning',
      'Security and compliance automation',
      'Cost optimization analysis'
    ]
  },
  {
    title: 'Platform Engineering (PaaS)',
    description: 'Developer platform creation and CI/CD pipeline optimization.',
    price: '$200/hour',
    features: [
      'Developer platform creation',
      'CI/CD pipeline optimization',
      'Container orchestration setup',
      'Monitoring and observability implementation',
      'GitOps workflow establishment'
    ]
  },
  {
    title: 'DevOps Transformation',
    description: 'Comprehensive DevOps culture and process transformation consulting.',
    price: '$5K/month',
    features: [
      'Process automation and standardization',
      'Team training and mentorship',
      'Tool selection and integration',
      'Culture change facilitation',
      'Ongoing support and optimization'
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  'whoami': {
    command: 'whoami',
    output: 'Senior DevOps Engineer & Cloud Architect\nAWS Certified Solutions Architect\nBuilding the future of scalable infrastructure',
    description: 'Display current user information'
  },
  'ls': {
    command: 'ls',
    output: 'projects/\nskills/\ncertifications/\nresume.pdf\ncontact.txt',
    description: 'List directory contents'
  },
  'projects': {
    command: 'projects',
    output: () => `
🚀 Featured Projects:
├── multi-cloud-k8s-platform/     99.99% uptime, 40% cost reduction
├── ai-powered-cicd-pipeline/      60% faster deployments
├── serverless-data-platform/      70% cost savings, infinite scaling
└── iac-compliance-framework/      80% faster deployments

Use 'cd <project-name>' to explore details
`,
    description: 'Show project portfolio'
  },
  'skills': {
    command: 'skills',
    output: () => `
💻 Core Competencies:
├── Infrastructure & Cloud (95%)
│   ├── AWS ████████████████████ 95%
│   ├── Azure ███████████████████ 85%
│   └── GCP ████████████████████ 80%
├── DevOps & Automation (90%)
│   ├── Terraform ██████████████████ 92%
│   ├── Kubernetes █████████████████ 90%
│   └── Docker ████████████████████ 95%
└── AI-Enhanced DevOps (87%)
    ├── GitHub Copilot █████████████████ 90%
    ├── ChatGPT-4 ██████████████████ 92%
    └── AWS CodeWhisperer ████████████████ 85%
`,
    description: 'Display skill matrix'
  },
  'resume': {
    command: 'resume',
    output: 'Opening resume... Download initiated.',
    description: 'Download resume PDF'
  },
  'hire-me': {
    command: 'hire-me',
    output: 'Opening contact form... Let\'s build something amazing together! 🚀',
    description: 'Open contact form'
  },
  'uptime': {
    command: 'uptime',
    output: () => {
      const startDate = new Date('2022-01-01');
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `System uptime: ${diffDays} days | DevOps journey: 99.9% reliability`;
    },
    description: 'Show system uptime and career stats'
  },
  'help': {
    command: 'help',
    output: () => `
Available commands:
├── whoami        Show user profile
├── ls            List contents
├── projects      View project portfolio  
├── skills        Display skill matrix
├── resume        Download resume
├── hire-me       Open contact form
├── uptime        Show career stats
├── clear         Clear terminal
└── help          Show this help

Try typing any command!
`,
    description: 'Show available commands'
  }
};