import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Infinity Loop SVG with neon blue/purple glow and sparkles.
 * Responsive and suitable for dark backgrounds.
 */
export const InfinityLoop: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 ${className}`}>
      <svg
        width="80%"
        height="80%"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: 700, maxHeight: 350 }}
      >
        <defs>
          <linearGradient id="infinity-gradient" x1="0" y1="200" x2="800" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D9FF" />
            <stop offset="0.5" stopColor="#7F5CFF" />
            <stop offset="1" stopColor="#00D9FF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Animated Infinity Path */}
        <motion.path
          d="M 150 200 Q 250 50 400 200 Q 550 350 650 200 Q 750 50 400 200 Q 50 350 150 200 Z"
          stroke="url(#infinity-gradient)"
          strokeWidth="10"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        {/* Sparkles */}
        {[...Array(24)].map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const r = 120 + 80 * Math.sin(angle * 2);
          const cx = 400 + Math.cos(angle) * r;
          const cy = 200 + Math.sin(angle) * r * 0.6;
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={Math.random() * 2 + 1}
              fill="#00D9FF"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
              filter="url(#glow)"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default InfinityLoop; 