import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ShimmerGridProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  speed?: 'slow' | 'medium' | 'fast';
}

export const ShimmerGrid: React.FC<ShimmerGridProps> = ({ 
  className = '', 
  intensity = 'medium',
  speed = 'medium'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    // Configuration based on props
    const config = {
      gridSize: 40,
      baseOpacity: intensity === 'subtle' ? 0.15 : intensity === 'medium' ? 0.25 : 0.35,
      shimmerOpacity: intensity === 'subtle' ? 0.4 : intensity === 'medium' ? 0.6 : 0.8,
      animationSpeed: speed === 'slow' ? 0.5 : speed === 'medium' ? 1 : 1.5,
      waveLength: 200,
      waveAmplitude: 0.3,
    };

    const animate = (timestamp: number) => {
      timeRef.current = timestamp * 0.001 * config.animationSpeed;
      
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cols = Math.ceil(rect.width / config.gridSize) + 2;
      const rows = Math.ceil(rect.height / config.gridSize) + 2;

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = i * config.gridSize - (timeRef.current * 20) % config.gridSize;
        
        // Create shimmer wave effect
        const waveOffset = Math.sin(timeRef.current + i * 0.1) * config.waveAmplitude;
        const shimmerIntensity = Math.sin(timeRef.current * 2 + i * 0.2) * 0.5 + 0.5;
        
        const opacity = config.baseOpacity + (shimmerIntensity * config.shimmerOpacity);
        
        // Create gradient for depth
        const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
        gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity * 0.3})`);
        gradient.addColorStop(0.3, `rgba(100, 200, 255, ${opacity})`);
        gradient.addColorStop(0.7, `rgba(100, 200, 255, ${opacity})`);
        gradient.addColorStop(1, `rgba(100, 200, 255, ${opacity * 0.3})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5 + waveOffset;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let j = 0; j <= rows; j++) {
        const y = j * config.gridSize - (timeRef.current * 15) % config.gridSize;
        
        // Create shimmer wave effect
        const waveOffset = Math.cos(timeRef.current + j * 0.15) * config.waveAmplitude;
        const shimmerIntensity = Math.cos(timeRef.current * 1.5 + j * 0.25) * 0.5 + 0.5;
        
        const opacity = config.baseOpacity + (shimmerIntensity * config.shimmerOpacity);
        
        // Create gradient for depth
        const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
        gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity * 0.3})`);
        gradient.addColorStop(0.3, `rgba(100, 200, 255, ${opacity})`);
        gradient.addColorStop(0.7, `rgba(100, 200, 255, ${opacity})`);
        gradient.addColorStop(1, `rgba(100, 200, 255, ${opacity * 0.3})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5 + waveOffset;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Add intersection glow points
      for (let i = 0; i <= cols; i += 2) {
        for (let j = 0; j <= rows; j += 2) {
          const x = i * config.gridSize - (timeRef.current * 20) % config.gridSize;
          const y = j * config.gridSize - (timeRef.current * 15) % config.gridSize;
          
          const glowIntensity = Math.sin(timeRef.current * 3 + i * 0.3 + j * 0.2) * 0.5 + 0.5;
          const opacity = glowIntensity * config.shimmerOpacity * 0.6;
          
          if (opacity > 0.1) {
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
            gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(100, 200, 255, ${opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(100, 200, 255, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Animated shimmer grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'transparent',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Subtle overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#121212]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#121212]/20 pointer-events-none" />
    </div>
  );
};