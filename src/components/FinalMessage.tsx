import React from 'react';
import { Heart } from 'lucide-react';

const FinalMessage: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-teal-800 via-emerald-900 to-cyan-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <Heart className="w-16 h-16 mx-auto mb-8 text-cyan-400 animate-pulse" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Until We Meet Again</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed mb-6">
            Saade You are the most Beautiful thing that ever happened to me...you are my love,Home,world and my comfort zone...Thanku for loving
            me like this.. I love u soooo sooo soooo much....Love uuu kore kore koreeeeeeeeeeeeeeeeem!!!!!   inn mone yathra ayakan varanam enn vaynakara agraham arnn..pashe nadanilla    </p>
          
          <p className="text-xl leading-relaxed mb-10">
            padachoon monte joliyil ellaa barakathum nalki anugrahikate..Aaaameen...Namal agrahicha life ethreyum vegam nalkate...namakum namade parenstinum aysusum arogyavum afiyathum nalkate...Aaaameeen
          </p>
          <p className="text-xl leading-relaxed mb-10">
          The distance between us is just physical - our hearts will always be connected.
          I'll be counting down the days until I can see your smile again.
          </p>
          
          <div className="text-2xl font-bold mt-10">
            Forever yours,
            <p className="mt-3 text-3xl italic text-cyan-300">Ninte Fyroo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;