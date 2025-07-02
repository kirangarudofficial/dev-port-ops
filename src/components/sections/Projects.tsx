import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { PROJECTS_DATA } from '../../data/constants';
import { ProjectCategory } from '../../types';

const categoryLabels: Record<ProjectCategory, string> = {
  all: 'All Projects',
  'cloud-infrastructure': 'Cloud Infrastructure',
  'ci-cd': 'CI/CD',
  'microservices': 'Microservices',
  'ai-integration': 'AI Integration',
  'cost-optimization': 'Cost Optimization',
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-world solutions with quantified impact and proven results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg overflow-hidden hover:border-primary-500/30 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-dark-700">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.repository && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Github}
                        href={project.repository}
                      ><span className="sr-only">GitHub</span></Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={ExternalLink}
                        href={project.liveDemo}
                      ><span className="sr-only">Live Demo</span></Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{project.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">Impact</h4>
                  <p className="text-green-400 text-sm font-medium">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-orange/10 border border-primary-500/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how I can help scale your infrastructure and optimize your DevOps processes.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};