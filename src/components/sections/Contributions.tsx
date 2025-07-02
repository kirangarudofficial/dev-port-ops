import React from 'react';
import { motion } from 'framer-motion';
import { Github, Users, Rocket, Package, Link2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

// Example data for contributions and published work
const contributions = [
  {
    label: 'Open Source Repos',
    value: 'github.com/yourusername',
    icon: Github,
    link: 'https://github.com/yourusername',
  },
  {
    label: 'AI Prompt Engineering',
    value: 'PromptBase, OpenAI Community',
    icon: Rocket,
    link: 'https://community.openai.com/',
  },
  {
    label: 'Dev Tool Feedback',
    value: 'VSCode, GitHub Copilot, Vercel',
    icon: Users,
    link: 'https://github.com/yourusername',
  },
];

const published = [
  {
    label: 'npm: cloud-utils',
    icon: Package,
    link: 'https://www.npmjs.com/package/cloud-utils',
  },
  {
    label: 'docker: devops-tools',
    icon: Package,
    link: 'https://hub.docker.com/r/yourusername/devops-tools',
  },
];

export const Contributions: React.FC = () => {
  return (
    <section id="contributions" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
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
            <Users size={16} className="animate-pulse" />
            Contributions & Collaborations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Open to <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Collaboration</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I love building in public, contributing to open source, and collaborating on innovative projects. If you're a founder, startup, or developer with a bold idea, let's build your MVP or next big thing together!
          </p>
        </motion.div>

        {/* Current Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contributions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-900/80 backdrop-blur-sm border border-primary-500/20 rounded-lg p-8 flex flex-col items-center hover:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/10"
              >
                <Icon size={32} className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
                <div className="text-primary-400 text-sm mb-2">{item.value}</div>
                <span className="inline-flex items-center gap-1 text-gray-300 group-hover:text-primary-400 text-xs transition-colors">
                  <Link2 size={14} /> Visit
                </span>
              </a>
            );
          })}
        </motion.div>

        {/* Published Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Published Modules & Images</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {published.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-dark-900/80 border border-primary-500/20 rounded-lg hover:border-primary-400 transition-all duration-300 shadow group"
                >
                  <Icon size={24} className="text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">{item.label}</span>
                  <Link2 size={16} className="text-primary-400" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500/10 to-accent-orange/10 border border-primary-500/20 rounded-full px-8 py-6">
            <div className="text-lg text-white mb-2 font-semibold">
              Are you a founder or startup?
            </div>
            <div className="text-gray-300 mb-4 max-w-xl mx-auto">
              I'm open to collaborating on MVPs, open source, and innovative dev tools. Let's connect and build something impactful!
            </div>
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/25"
            >
              Start a Collaboration
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 