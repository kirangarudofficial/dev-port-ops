import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Code2, Bot, Zap, CloudCog, Database, Rocket, TrendingUp } from 'lucide-react';

const activities = [
  {
    icon: LayoutDashboard,
    title: 'Designing Portfolio Websites',
    description: 'Crafting beautiful, production-ready developer portfolios with React, Tailwind CSS, and modern UI/UX best practices.'
  },
  {
    icon: Bot,
    title: 'Working with LLMs',
    description: 'Building, fine-tuning, and integrating Large Language Models (OpenAI, HuggingFace, Ollama) for real-world applications.'
  },
  {
    icon: Zap,
    title: 'Automation with n8n',
    description: 'Automating workflows, data pipelines, and business processes using n8n, Zapier, and custom scripts.'
  },
  {
    icon: CloudCog,
    title: 'Cloud Infrastructure',
    description: 'Deploying and managing scalable cloud infrastructure on AWS, Azure, and GCP with Terraform and CI/CD.'
  },
  {
    icon: Code2,
    title: 'Open Source Contributions',
    description: 'Actively contributing to open source projects, dev tools, and sharing knowledge with the community.'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Designing and optimizing data pipelines, ETL processes, and analytics solutions for modern applications.'
  },
  {
    icon: Rocket,
    title: 'Startup MVP Launches',
    description: 'Helping startups and founders rapidly build and launch MVPs with robust, scalable tech stacks.'
  },
  {
    icon: TrendingUp,
    title: 'AI-Driven Automation',
    description: 'Integrating AI/ML models into automation workflows for smarter, more efficient business operations.'
  },
];

export const RecentActivities: React.FC = () => {
  return (
    <section id="recent-activities" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm text-primary-400 mb-6">
            <Zap size={16} className="animate-pulse" />
            Recent Activities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I'm <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Building & Exploring</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A snapshot of my latest work, experiments, and ongoing projects in cloud, AI, automation, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-dark-950/80 backdrop-blur-sm border border-primary-500/20 rounded-lg p-8 flex flex-col items-center hover:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/10 hover:scale-105 hover:shadow-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label={activity.title + ': ' + activity.description}
                tabIndex={0}
              >
                <Icon size={36} className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-base font-semibold text-white mb-2 text-center">{activity.title}</div>
                <div className="text-base text-gray-300 text-center">{activity.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 