import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Perspective Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
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
            <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 217, 255, 0)" />
              <stop offset="50%" stopColor="rgba(0, 217, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(0, 217, 255, 0)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
          <rect width="100%" height="100%" fill="url(#gridFade)" />
        </svg>
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-950/80"></div>
    </div>
  );
};