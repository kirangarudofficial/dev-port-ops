import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, TrendingUp, Award, Rocket, Zap, Target, Star, Trophy } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/constants';

const iconMap = {
  '2022': Rocket,
  '2023': TrendingUp,
  '2024': Award,
  '2025': Target,
};

const connectionPaths = [
  { from: 0, to: 1, delay: 0.5 },
  { from: 1, to: 2, delay: 1.0 },
  { from: 2, to: 3, delay: 1.5 },
];

export const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 to-[#0d0d0d]" />
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />

      {/* Background Grid */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="timeline-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 217, 255, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Star size={16} className="animate-pulse" />
            Professional Evolution Map
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Journey to
            <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              {' '}Cloud Mastery
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From career transformation to cloud expertise - a data-driven evolution story
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Central Pathway */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ height: '800px' }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main Connection Path */}
            <motion.path
              d="M 100 150 Q 300 100 500 200 Q 700 300 900 250"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Branch Connections */}
            {connectionPaths.map((path, index) => (
              <motion.line
                key={index}
                x1={100 + index * 250}
                y1={200}
                x2={150 + index * 250}
                y2={300}
                stroke="#00D9FF"
                strokeWidth="1"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: path.delay }}
              />
            ))}
          </svg>

          {/* Timeline Nodes */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {TIMELINE_DATA.map((item, index) => {
              const Icon = iconMap[item.year as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="relative group"
                >
                  {/* Connection Node */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-dark-950 z-20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  {/* Card Container */}
                  <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/10 relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    {/* Year Badge */}
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-orange/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-primary-400">{item.year}</span>
                        <div className="w-12 h-px bg-gradient-to-r from-primary-500 to-transparent"></div>
                      </div>
                    </motion.div>
                    
                    <motion.h3
                      className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 1 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-300 mb-4 text-sm leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 1.2 }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.ul
                      className="space-y-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.3 + 1.4 }}
                    >
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-sm text-gray-300"
                          initial={{ x: -10, opacity: 0 }}
                          animate={inView ? { x: 0, opacity: 1 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.3 + 1.6 + achievementIndex * 0.1 
                          }}
                        >
                          <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="group-hover:text-gray-200 transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.1), rgba(255, 107, 53, 0.1))',
                        filter: 'blur(20px)',
                      }}
                    />
                  </div>

                  {/* Data Flow Animation */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary-400 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      scaleY: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 relative"
          >
            <div className="bg-dark-900/60 backdrop-blur-sm border border-primary-500/20 rounded-lg p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="achievement-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="30" cy="30" r="1" fill="#00D9FF" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#achievement-pattern)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Mission Accomplished</h3>
                  <p className="text-gray-300">Quantified impact across the transformation journey</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {[
                    { label: 'Learning Hours', value: '2000+', icon: TrendingUp, color: 'text-primary-400' },
                    { label: 'Certifications', value: '5', icon: Award, color: 'text-accent-orange' },
                    { label: 'Projects Delivered', value: '25+', icon: CheckCircle, color: 'text-green-400' },
                    { label: 'Systems Uptime', value: '99.9%', icon: Trophy, color: 'text-purple-400' },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    >
                      <div className="w-16 h-16 bg-dark-800/50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-dark-700/50 transition-colors duration-300 border border-primary-500/20">
                        <stat.icon size={24} className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
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