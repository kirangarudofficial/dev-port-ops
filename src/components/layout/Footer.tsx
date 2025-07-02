import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d0d0d] border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Terminal size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">DevOps.io</span>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Senior DevOps Engineer & Cloud Architect specializing in scalable infrastructure, 
              CI/CD automation, and cloud-native solutions. Building the future of technology 
              infrastructure.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                icon={Github}
                href="https://github.com/example"
              >{" "}</Button>
              <Button
                variant="ghost"
                size="sm"
                icon={Linkedin}
                href="https://linkedin.com/in/example"
              >{" "}</Button>
              <Button
                variant="ghost"
                size="sm"
                icon={Mail}
                href="mailto:devops@example.com"
              >{" "}</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#timeline' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>Cloud Architecture</li>
              <li>DevOps Consulting</li>
              <li>Infrastructure as Code</li>
              <li>CI/CD Implementation</li>
              <li>Platform Engineering</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-dark-400 text-sm">
            © 2025 DevOps Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-dark-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};