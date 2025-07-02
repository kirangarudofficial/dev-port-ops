import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerGridCSSProps {
  className?: string;
  variant?: 'default' | 'dense' | 'sparse';
}

export const ShimmerGridCSS: React.FC<ShimmerGridCSSProps> = ({ 
  className = '',
  variant = 'default'
}) => {
  const gridSizes = {
    default: 'bg-[length:40px_40px]',
    dense: 'bg-[length:25px_25px]',
    sparse: 'bg-[length:60px_60px]'
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Primary shimmer grid layer */}
      <motion.div
        className={`absolute inset-0 opacity-30 ${gridSizes[variant]}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 200, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 200, 255, 0.3) 1px, transparent 1px)
          `,
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary shimmer layer with different timing */}
      <motion.div
        className={`absolute inset-0 opacity-20 ${gridSizes[variant]}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(150, 220, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(150, 220, 255, 0.4) 1px, transparent 1px)
          `,
        }}
        animate={{
          backgroundPosition: ['40px 40px', '0px 0px'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Animated shimmer waves */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 opacity-10"
            style={{
              background: `linear-gradient(
                ${45 + i * 30}deg,
                transparent 0%,
                transparent 45%,
                rgba(100, 200, 255, 0.6) 50%,
                transparent 55%,
                transparent 100%
              )`,
            }}
            animate={{
              transform: [
                'translateX(-100%) translateY(-100%)',
                'translateX(100vw) translateY(100vh)'
              ],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>
      
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#121212]/40 pointer-events-none" />
    </div>
  );
};