import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  Layers, 
  Database, 
  Zap, 
  Bot, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { DotMatrixBackground } from '../effects/DotMatrixBackground';

interface ServiceModel {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  definition: string;
  useCase: string;
  color: string;
  gradient: string;
}

const serviceModels: ServiceModel[] = [
  {
    id: 'saas',
    name: 'SaaS',
    icon: Cloud,
    definition: 'Software as a Service - Complete applications delivered over the internet',
    useCase: 'Salesforce, Google Workspace, Slack for business productivity',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'paas',
    name: 'PaaS',
    icon: Layers,
    definition: 'Platform as a Service - Development platform with runtime environment',
    useCase: 'Heroku, Vercel, AWS Elastic Beanstalk for app deployment',
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'iaas',
    name: 'IaaS',
    icon: Database,
    definition: 'Infrastructure as a Service - Virtualized computing resources',
    useCase: 'AWS EC2, Azure VMs, Google Compute Engine for scalable infrastructure',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'baas',
    name: 'BaaS',
    icon: Zap,
    definition: 'Backend as a Service - Ready-to-use backend infrastructure',
    useCase: 'Firebase, Supabase, AWS Amplify for rapid app development',
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 'aiops',
    name: 'AIOps',
    icon: Bot,
    definition: 'AI for IT Operations - Machine learning for infrastructure management',
    useCase: 'Datadog AI, New Relic AI for predictive monitoring and automation',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'faas',
    name: 'FaaS',
    icon: Code,
    definition: 'Function as a Service - Event-driven serverless computing',
    useCase: 'AWS Lambda, Vercel Functions for microservices and automation',
    color: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  }
];

export const ModernServices: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="modern-services" className="relative py-20 bg-[#121212] overflow-hidden">
      {/* Dot Matrix Background */}
      <DotMatrixBackground className="opacity-40" />
      
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
            <Layers size={16} className="animate-pulse" />
            Service Models & Architecture
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cloud Service
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Models
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Understanding the modern cloud service landscape - from traditional infrastructure 
            to cutting-edge AI-powered operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceModels.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative h-80"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Service Card */}
                <div className={`relative h-full bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                  isHovered 
                    ? 'border-primary-400/50 shadow-2xl shadow-primary-500/20 scale-105' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}>
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    initial={false}
                  />

                  {/* Dot Matrix Overlay */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <DotMatrixBackground />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={28} className={`${service.color} group-hover:scale-110 transition-transform duration-300`} />
                      </motion.div>
                      <div>
                        <h3 className={`text-2xl font-bold ${service.color} group-hover:text-white transition-colors duration-300`}>
                          {service.name}
                        </h3>
                        <div className={`w-8 h-px bg-gradient-to-r ${service.gradient.replace('/20', '')} mt-1`} />
                      </div>
                    </div>

                    {/* Definition */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Definition</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.definition}
                      </p>
                    </div>

                    {/* Use Case */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Real-world Example</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.useCase}
                      </p>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      className={`w-full py-3 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-primary-500/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, ${service.gradient.replace('from-', '').replace('to-', '').replace('/20', '/10')})`,
                      filter: 'blur(20px)',
                    }}
                  />
                </div>

                {/* Connection Lines (when hovered) */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -inset-4 pointer-events-none"
                  >
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id={`glow-${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                        stroke={`url(#glow-${service.id})`}
                        strokeWidth="1"
                        rx="16"
                        className="animate-pulse"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-xl p-8 backdrop-blur-sm">
            <CheckCircle size={48} className="text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Architect Your Cloud Strategy?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's design the perfect service model mix for your business needs. 
              From infrastructure planning to AI-powered operations.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Architecture Discussion
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};