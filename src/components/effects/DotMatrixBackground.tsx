import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DotMatrixBackgroundProps {
  className?: string;
}

export const DotMatrixBackground: React.FC<DotMatrixBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    // Dot configuration
    const dotSpacing = 40;
    const dotRadius = 1.5;
    const maxDistance = 150;
    const baseOpacity = 0.3;
    const hoverOpacity = 0.8;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cols = Math.ceil(rect.width / dotSpacing) + 1;
      const rows = Math.ceil(rect.height / dotSpacing) + 1;

      const time = Date.now() * 0.001;
      const mouseX = mouseRef.current.x * rect.width;
      const mouseY = mouseRef.current.y * rect.height;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing + (Math.sin(time + i * 0.1) * 2);
          const y = j * dotSpacing + (Math.cos(time + j * 0.1) * 2);

          // Calculate distance from mouse
          const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
          const influence = Math.max(0, 1 - distance / maxDistance);

          // Base animation
          const wave = Math.sin(time + i * 0.1 + j * 0.1) * 0.5 + 0.5;
          let opacity = baseOpacity + wave * 0.2;

          // Mouse influence
          opacity += influence * hoverOpacity;
          opacity = Math.min(opacity, 1);

          // Color gradient based on position and mouse influence
          const hue = 200 + influence * 60 + wave * 20; // Blue to purple
          const saturation = 70 + influence * 30;
          const lightness = 50 + influence * 30;

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius + influence * 2, 0, Math.PI * 2);
          ctx.fill();

          // Connection lines for nearby dots
          if (influence > 0.3) {
            for (let k = i - 1; k <= i + 1; k++) {
              for (let l = j - 1; l <= j + 1; l++) {
                if (k >= 0 && k < cols && l >= 0 && l < rows && (k !== i || l !== j)) {
                  const x2 = k * dotSpacing + (Math.sin(time + k * 0.1) * 2);
                  const y2 = l * dotSpacing + (Math.cos(time + l * 0.1) * 2);
                  const distance2 = Math.sqrt((x2 - mouseX) ** 2 + (y2 - mouseY) ** 2);
                  const influence2 = Math.max(0, 1 - distance2 / maxDistance);

                  if (influence2 > 0.3) {
                    ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${influence * influence2 * 0.3})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};