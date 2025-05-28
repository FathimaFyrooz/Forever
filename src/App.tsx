import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import Timeline from './components/Timeline';
import FinalMessage from './components/FinalMessage';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Until We Meet Again | Our Love Story';
    
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Wishes />
      <Timeline />
      <FinalMessage />
      <BackgroundMusic />
    </div>
  );
}

export default App;