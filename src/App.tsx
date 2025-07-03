import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Timeline } from './components/sections/Timeline';
import { Projects } from './components/sections/Projects';
import { ArchitectureShowcase } from './components/sections/ArchitectureShowcase';
import { Terminal } from './components/sections/Terminal';
import { Contact } from './components/sections/Contact';
import { Contributions } from './components/sections/Contributions';
import { RecentActivities } from './components/sections/RecentActivities';
import { ModernServices } from './components/sections/ModernServices';
import { AIStack } from './components/sections/AIStack';
import { BlogInsights } from './components/sections/BlogInsights';
import { ShimmerGrid } from './components/effects/ShimmerGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-dark-50 relative">
      {/* Global Shimmer Grid Background */}
      <ShimmerGrid 
        className="fixed inset-0 z-0" 
        intensity="subtle" 
        speed="slow" 
      />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation />
        <main className="overflow-x-hidden">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RecentActivities />
          </div>
          <Timeline />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Projects />
          </div>
          <Contributions />
          <ArchitectureShowcase />
          <ModernServices />
          <AIStack />
          <BlogInsights />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Terminal />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;