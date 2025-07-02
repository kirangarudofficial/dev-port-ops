import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Layers, Cloud, Database, Shield, Zap, Network } from 'lucide-react';
import { Button } from '../ui/Button';
import { DotMatrixBackground } from '../effects/DotMatrixBackground';

interface ArchitectureProject {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  metrics: {
    uptime: string;
    performance: string;
    cost: string;
  };
  diagramUrl: string;
  caseStudyUrl?: string;
  repositoryUrl?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const architectureProjects: ArchitectureProject[] = [
  {
    id: 'multi-cloud-platform',
    title: 'Multi-Cloud Kubernetes Platform',
    description: 'Enterprise-grade container orchestration platform spanning AWS, Azure, and GCP with unified management, automated scaling, and cross-cloud networking.',
    category: 'Cloud Infrastructure',
    technologies: ['Kubernetes', 'Terraform', 'Istio', 'ArgoCD', 'Prometheus'],
    metrics: {
      uptime: '99.99%',
      performance: '< 100ms',
      cost: '40% reduction'
    },
    diagramUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    caseStudyUrl: '#',
    repositoryUrl: '#',
    icon: Cloud
  },
  {
    id: 'serverless-data-pipeline',
    title: 'Serverless Data Processing Pipeline',
    description: 'Real-time data ingestion and processing platform using event-driven architecture with automatic scaling and cost optimization.',
    category: 'Data Architecture',
    technologies: ['AWS Lambda', 'Kinesis', 'DynamoDB', 'Step Functions', 'CloudFormation'],
    metrics: {
      uptime: '99.9%',
      performance: '< 50ms',
      cost: '70% reduction'
    },
    diagramUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    caseStudyUrl: '#',
    repositoryUrl: '#',
    icon: Database
  },
  {
    id: 'zero-trust-security',
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive security framework implementing zero trust principles with identity-based access control and continuous monitoring.',
    category: 'Security',
    technologies: ['AWS IAM', 'Vault', 'Istio', 'Falco', 'OPA'],
    metrics: {
      uptime: '100%',
      performance: '< 10ms',
      cost: '25% reduction'
    },
    diagramUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    caseStudyUrl: '#',
    repositoryUrl: '#',
    icon: Shield
  },
  {
    id: 'edge-computing-cdn',
    title: 'Global Edge Computing Network',
    description: 'High-performance content delivery network with edge computing capabilities for ultra-low latency applications worldwide.',
    category: 'Edge Computing',
    technologies: ['CloudFlare Workers', 'AWS CloudFront', 'Redis', 'Docker', 'Terraform'],
    metrics: {
      uptime: '99.99%',
      performance: '< 20ms',
      cost: '50% reduction'
    },
    diagramUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    caseStudyUrl: '#',
    repositoryUrl: '#',
    icon: Network
  }
];

export const ArchitectureShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="architecture" className="relative py-20 bg-[#0d0d0d] overflow-hidden">
      {/* Dot Matrix Background */}
      <DotMatrixBackground className="opacity-60" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
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
            System Architecture Gallery
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cloud Architecture
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Blueprints
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Production-ready system designs that scale from startup MVPs to enterprise platforms. 
            Each architecture is battle-tested with quantified performance metrics.
          </p>
        </motion.div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {architectureProjects.map((project, index) => {
            const Icon = project.icon;
            const isSelected = selectedProject === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
              >
                {/* Architecture Card */}
                <div className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 ${
                  isSelected 
                    ? 'border-primary-400/50 shadow-2xl shadow-primary-500/20 scale-105' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Architecture Diagram */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.diagramUrl}
                      alt={`${project.title} Architecture`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-xs text-primary-300 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Metrics Overlay */}
                    <div className="absolute top-4 right-4 space-y-1">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 text-xs">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span className="text-green-400 font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30 group-hover:bg-primary-500/30 transition-colors duration-300">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 hover:border-primary-500/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      {project.caseStudyUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          icon={ArrowRight}
                          iconPosition="right"
                          href={project.caseStudyUrl}
                          className="flex-1 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400"
                        >
                          Case Study
                        </Button>
                      )}
                      {project.repositoryUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          icon={Github}
                          href={project.repositoryUrl}
                          className="border-gray-600 text-gray-300 hover:border-primary-500/50 hover:text-primary-400"
                        />
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={ExternalLink}
                        className="text-gray-400 hover:text-primary-400"
                      />
                    </div>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary-400/0 group-hover:border-primary-400/30 transition-all duration-500"
                    initial={false}
                  />
                </div>

                {/* Connection Lines (when selected) */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -inset-4 pointer-events-none"
                  >
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id={`glow-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
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
                        stroke={`url(#glow-${project.id})`}
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
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-xl p-8 backdrop-blur-sm">
            <Zap size={48} className="text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Architect Your Next System?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's design a scalable, resilient architecture that grows with your business. 
              From proof of concept to enterprise scale.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-400 hover:to-purple-400 shadow-lg shadow-primary-500/25"
            >
              Start Architecture Discussion
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
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