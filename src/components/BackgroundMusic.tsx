import React, { useState, useEffect } from 'react';
import { Music, Music2 as Music2Off } from 'lucide-react';
import useSound from 'use-sound';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('https://www.chosic.com/wp-content/uploads/2023/05/ed_sheeran_perfect.mp3', {
    volume: 0.5,
    loop: true
  });

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      stop(); // Cleanup on unmount
    };
  }, [stop]);

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 bg-teal-900/90 p-3 rounded-full shadow-lg hover:bg-teal-800 transition-colors"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Music className="w-6 h-6 text-white" />
      ) : (
        <Music2Off className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default BackgroundMusic;