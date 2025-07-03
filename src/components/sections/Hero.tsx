import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Terminal, Github, ArrowRight, Download, Play, Zap, Users, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { ParticlesBackground } from '../effects/ParticlesBackground';
import { GridBackground } from '../effects/GridBackground';
import { FloatingElements } from '../effects/FloatingElements';
import { HeroVisualization } from '../effects/HeroVisualization';

export const Hero: React.FC = () => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const terminalCommands = [
    'aws s3 ls my-infrastructure-bucket',
    'kubectl get pods --all-namespaces',
    'terraform plan -out=production.tfplan',
    'docker-compose up -d --scale web=3',
    'helm upgrade myapp ./charts/myapp',
  ];

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentCommand = terminalCommands[commandIndex];
      
      if (!isDeleting) {
        setTerminalText(currentCommand.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentCommand.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      } else {
        setTerminalText(currentCommand.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          commandIndex = (commandIndex + 1) % terminalCommands.length;
        }
      }
    };

    const interval = setInterval(typeWriter, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d] pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      <GridBackground />
      <ParticlesBackground />
      <FloatingElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content - 7 columns on desktop */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Build scalable
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-orange bg-clip-text text-transparent">
                  cloud infrastructure
                </span>
                <br />
                that never fails
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                DevOps Engineer & Cloud Architect specializing in bulletproof systems, 
                automated deployments, and infrastructure that scales from zero to millions of users.
              </p>
            </motion.div>

            {/* Terminal Simulation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4 lg:p-6 font-mono max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-3 lg:mb-4 pb-3 border-b border-dark-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs lg:text-sm ml-2">~/production-infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-400">$</span>
                <span className="text-green-400 text-sm lg:text-base">{terminalText}</span>
                <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/25 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
              >
                View My Infrastructure
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Play}
                onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-500/50 text-primary-400 hover:bg-primary-500/10 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
              >
                Live Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6 lg:pt-8"
            >
              {[
                { label: 'Uptime', value: '99.9%', color: 'text-green-400', icon: Zap },
                { label: 'Cost Saved', value: '$50K+', color: 'text-primary-400', icon: Award },
                { label: 'Projects', value: '25+', color: 'text-accent-orange', icon: Terminal },
                { label: 'Years', value: '3+', color: 'text-purple-400', icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left group"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon size={16} className={stat.color} />
                    <div className={`text-xl sm:text-2xl lg:text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visualization - 5 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[500px] xl:h-[600px]"
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('recent-activities')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};