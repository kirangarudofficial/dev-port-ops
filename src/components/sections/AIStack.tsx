import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Zap, 
  Brain, 
  Code, 
  Database,
  Workflow,
  Bot,
  Sparkles,
  ArrowRight,
  Search
} from 'lucide-react';
import { DotMatrixBackground } from '../effects/DotMatrixBackground';

interface AITool {
  id: string;
  name: string;
  company: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  color: string;
  gradient: string;
  isNew?: boolean;
}

const aiTools: AITool[] = [
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    company: 'StackBlitz',
    description: 'AI-powered full-stack development in the browser',
    category: 'Development',
    icon: Zap,
    url: 'https://bolt.new',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    isNew: true
  },
  {
    id: 'fairy-ai',
    name: 'Fairy.ai',
    company: 'Fairy',
    description: 'AI-powered DevOps automation and infrastructure management',
    category: 'DevOps',
    icon: Sparkles,
    url: 'https://fairy.ai',
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'agentops',
    name: 'AgentOps',
    company: 'AgentOps',
    description: 'Observability and monitoring for AI agents and LLM applications',
    category: 'Monitoring',
    icon: Bot,
    url: 'https://agentops.ai',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'flowise',
    name: 'Flowise',
    company: 'FlowiseAI',
    description: 'Drag & drop UI to build customized LLM flows',
    category: 'Workflow',
    icon: Workflow,
    url: 'https://flowiseai.com',
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'langflow',
    name: 'Langflow',
    company: 'Langflow',
    description: 'Visual framework for building multi-agent and RAG applications',
    category: 'Framework',
    icon: Code,
    url: 'https://langflow.org',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    company: 'Hugging Face',
    description: 'Open-source platform for machine learning models and datasets',
    category: 'Platform',
    icon: Brain,
    url: 'https://huggingface.co',
    color: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    company: 'Cursor',
    description: 'AI-first code editor built for pair-programming with AI',
    category: 'Development',
    icon: Code,
    url: 'https://cursor.sh',
    color: 'text-indigo-400',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    isNew: true
  },
  {
    id: 'v0',
    name: 'v0',
    company: 'Vercel',
    description: 'Generate UI components with simple text prompts',
    category: 'Design',
    icon: Sparkles,
    url: 'https://v0.dev',
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    company: 'Anthropic',
    description: 'Advanced AI assistant for analysis, writing, and coding',
    category: 'Assistant',
    icon: Brain,
    url: 'https://claude.ai',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-green-500/20'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    company: 'GitHub',
    description: 'AI pair programmer that helps you write code faster',
    category: 'Development',
    icon: Code,
    url: 'https://github.com/features/copilot',
    color: 'text-gray-400',
    gradient: 'from-gray-500/20 to-slate-500/20'
  },
  {
    id: 'supabase-ai',
    name: 'Supabase AI',
    company: 'Supabase',
    description: 'Integrated AI features for database and backend operations',
    category: 'Backend',
    icon: Database,
    url: 'https://supabase.com/ai',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    company: 'Replit',
    description: 'AI-powered collaborative coding environment',
    category: 'Development',
    icon: Code,
    url: 'https://replit.com/ai',
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-amber-500/20'
  }
];

const categories = ['All', 'Development', 'DevOps', 'Monitoring', 'Workflow', 'Framework', 'Platform', 'Design', 'Assistant', 'Backend'];

export const AIStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleTools, setVisibleTools] = useState(8);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedTools = filteredTools.slice(0, visibleTools);

  const loadMore = () => {
    setVisibleTools(prev => Math.min(prev + 4, filteredTools.length));
  };

  useEffect(() => {
    setVisibleTools(8);
  }, [selectedCategory, searchTerm]);

  return (
    <section id="ai-stack" className="relative py-20 bg-[#121212] overflow-hidden">
      {/* Dot Matrix Background */}
      <DotMatrixBackground className="opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm text-primary-400 mb-6"
          >
            <Brain size={16} className="animate-pulse" />
            AI-Powered Development Stack
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Modern AI
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Toolkit
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Cutting-edge AI tools and platforms that are revolutionizing how we build, 
            deploy, and manage modern applications.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedTools.map((tool, index) => {
            const Icon = tool.icon;
            const isHovered = hoveredTool === tool.id;
            
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {/* Tool Card */}
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block relative h-48 bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                    isHovered 
                      ? 'border-primary-400/50 shadow-2xl shadow-primary-500/20 scale-105' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* New Badge */}
                  {tool.isNew && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                        NEW
                      </span>
                    </div>
                  )}

                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />

                  {/* Dot Matrix Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                    <DotMatrixBackground />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={20} className={`${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                      </motion.div>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>

                    {/* Tool Info */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${tool.color} group-hover:text-white transition-colors duration-300 mb-1`}>
                        {tool.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">{tool.company}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    {/* External Link Icon */}
                    <div className="flex justify-end mt-4">
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, ${tool.gradient.replace('from-', '').replace('to-', '').replace('/20', '/10')})`,
                      filter: 'blur(20px)',
                    }}
                  />
                </motion.a>

                {/* Connection Lines (when hovered) */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -inset-2 pointer-events-none"
                  >
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id={`glow-${tool.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke={`url(#glow-${tool.id})`}
                        strokeWidth="1"
                        rx="12"
                        className="animate-pulse"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleTools < filteredTools.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={loadMore}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Tools
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-xl p-8 backdrop-blur-sm">
            <Brain size={48} className="text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Integrate AI into Your Workflow?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how these cutting-edge AI tools can accelerate your development process 
              and enhance your team's productivity.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start AI Integration Discussion
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};