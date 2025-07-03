import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Terminal, ArrowRight, Download, Play, Zap, Users, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { LazyImage } from '../ui/LazyImage';

export const OptimizedHero: React.FC = () => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const terminalCommands = useMemo(() => [
    'aws s3 ls my-infrastructure-bucket',
    'kubectl get pods --all-namespaces',
    'terraform plan -out=production.tfplan',
    'docker-compose up -d --scale web=3',
    'helm upgrade myapp ./charts/myapp',
  ], []);

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeWriter = () => {
      const currentCommand = terminalCommands[commandIndex];
      
      if (!isDeleting) {
        setTerminalText(currentCommand.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentCommand.length) {
          timeoutId = setTimeout(() => { isDeleting = true; }, 2000);
          return;
        }
      } else {
        setTerminalText(currentCommand.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          commandIndex = (commandIndex + 1) % terminalCommands.length;
        }
      }
      
      timeoutId = setTimeout(typeWriter, isDeleting ? 50 : 100);
    };

    typeWriter();
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [terminalCommands]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const stats = useMemo(() => [
    { label: 'Uptime', value: '99.9%', color: 'text-green-400', icon: Zap },
    { label: 'Cost Saved', value: '$50K+', color: 'text-primary-400', icon: Award },
    { label: 'Projects', value: '25+', color: 'text-accent-orange', icon: Terminal },
    { label: 'Years', value: '3+', color: 'text-purple-400', icon: Users },
  ], []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d] pt-20">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
      
      {/* Optimized Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(0, 217, 255, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)]">
          {/* Left Content - Optimized for desktop */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Main Headline - Optimized typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Build scalable
                <br />
                <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-orange bg-clip-text text-transparent">
                  cloud infrastructure
                </span>
                <br />
                that never fails
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                DevOps Engineer & Cloud Architect specializing in bulletproof systems, 
                automated deployments, and infrastructure that scales from zero to millions of users.
              </p>
            </motion.div>

            {/* Terminal Simulation - Enhanced for desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 lg:p-8 font-mono max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4 lg:mb-6 pb-4 border-b border-dark-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm lg:text-base ml-2">~/production-infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-400">$</span>
                <span className="text-green-400 text-base lg:text-lg">{terminalText}</span>
                <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Desktop optimized */}
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
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/25 text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5"
              >
                View My Infrastructure
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Play}
                onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-500/50 text-primary-400 hover:bg-primary-500/10 text-lg lg:text-xl px-8 lg:px-10 py-4 lg:py-5"
              >
                Live Demo
              </Button>
            </motion.div>

            {/* Stats - Enhanced for desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left group"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <div className="w-12 h-12 bg-dark-800/50 rounded-lg flex items-center justify-center border border-primary-500/20 group-hover:border-primary-500/40 transition-colors duration-300">
                      <stat.icon size={20} className={stat.color} />
                    </div>
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visualization - Desktop optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[600px] xl:h-[700px]"
          >
            {/* Optimized visualization placeholder */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] relative">
                {/* Central Core */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-accent-orange/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Orbital Elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-primary-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((i * Math.PI * 2) / 8) * 150,
                        y: Math.sin((i * Math.PI * 2) / 8) * 150,
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
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