import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-teal-900 via-emerald-800 to-cyan-900">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
              transform: `scale(${Math.random() * 2 + 0.5})`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight animate-fade-in">
          <span className="block">Until We</span>
          <span className="block mt-2">Meet Again</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
Saade This is small gift for you...Inside, you’ll find a collection of our cherished memories —
moments we laughed, lived, and shared together.

Each one is a piece of our journey,
a reminder of how much you mean to me,
and how deeply I treasure every second we’ve spent side by side.....and Love u soooooo soooo much🥰😘😘😘😘😘😘💕
        </p>
        <div className="animate-bounce mt-12">
          <a 
            href="#gallery" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg-gray-100 md:text-lg"
          >
            Explore Our Memories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;