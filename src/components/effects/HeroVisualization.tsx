import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        className="relative w-80 h-80"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-500/30"
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

        {/* Middle Ring */}
        <motion.div
          className="absolute inset-8 rounded-full border border-primary-400/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-orange rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: -360,
                x: Math.cos((i * Math.PI * 2) / 6) * 110,
                y: Math.sin((i * Math.PI * 2) / 6) * 110,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* Inner Core */}
        <motion.div
          className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-orange/20 backdrop-blur-sm border border-primary-400/50"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/30 to-transparent animate-pulse" />
        </motion.div>

        {/* Data Streams */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-t from-primary-400/60 to-transparent"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 100%',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              scaleY: [0, 1, 0.5, 1, 0],
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Code Snippets */}
      <motion.div
        className="absolute top-20 left-20 bg-dark-800/80 backdrop-blur-sm border border-primary-500/30 rounded-lg p-3 font-mono text-xs text-primary-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        kubectl apply -f deployment.yaml
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 bg-dark-800/80 backdrop-blur-sm border border-accent-orange/30 rounded-lg p-3 font-mono text-xs text-accent-orange"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        terraform plan -out=main.tfplan
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 bg-dark-800/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 font-mono text-xs text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        docker-compose up -d --scale web=3
      </motion.div>
    </div>
  );
};