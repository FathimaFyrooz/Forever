import React from 'react';
import { HeartHandshake, Star, Plane, Coffee, Music, Book, Palette, Camera } from 'lucide-react';

const wishes = [
  {
    title: "Safe Travels",
    icon: <Plane className="w-8 h-8 text-cyan-500" />,
    content: "May your journey be smooth and your adventures be plentiful. I wish you safe travels and exciting discoveries in your new home."
  },
  {
    title: "Endless Opportunities",
    icon: <Star className="w-8 h-8 text-emerald-500" />,
    content: "This new chapter will bring countless opportunities. Embrace them all and shine brightly as you always do."
  },
  {
    title: "New Friendships",
    icon: <HeartHandshake className="w-8 h-8 text-teal-500" />,
    content: "You'll meet amazing people who will become lifelong friends. Your warmth and kindness will draw them to you."
  },
  {
    title: "Cozy Moments",
    icon: <Coffee className="w-8 h-8 text-cyan-700" />,
    content: "Even in a new place, I hope you find those small, peaceful moments that make you feel at home."
  },
  {
    title: "Creative Inspiration",
    icon: <Palette className="w-8 h-8 text-emerald-500" />,
    content: "May this new environment inspire you and fuel your creativity in ways you never imagined."
  },
  {
    title: "Cultural Experiences",
    icon: <Book className="w-8 h-8 text-teal-600" />,
    content: "Immerse yourself in the local culture, try new foods, learn the language, and embrace every tradition."
  }
];

const Wishes: React.FC = () => {
  return (
    <section id="wishes\" className="py-20 bg-gradient-to-b from-teal-900 to-emerald-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">My Wishes For You</h2>
        <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-16">
          As you embark on this new journey, here are my heartfelt wishes that I hope will accompany you every step of the way.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {wish.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{wish.title}</h3>
              </div>
              <p className="text-white/80">{wish.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;