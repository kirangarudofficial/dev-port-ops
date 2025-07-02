import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Cpu, Network } from 'lucide-react';

const floatingIcons = [
  { Icon: Cloud, delay: 0, x: '10%', y: '20%' },
  { Icon: Server, delay: 1, x: '85%', y: '15%' },
  { Icon: Database, delay: 2, x: '15%', y: '70%' },
  { Icon: Shield, delay: 0.5, x: '80%', y: '75%' },
  { Icon: Cpu, delay: 1.5, x: '5%', y: '45%' },
  { Icon: Network, delay: 2.5, x: '90%', y: '45%' },
];

export const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.1, 0.3],
            scale: [0, 1, 1.1, 1],
            y: [0, -20, 0, -10, 0]
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-lg flex items-center justify-center">
            <Icon size={20} className="text-primary-400/60" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};