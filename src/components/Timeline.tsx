import React from 'react';

// Update these with your actual dates and events
const events = [
  {
    date: "July 9, 2023 1:30 am",
    title: "The Day i proposed you...",
    description: "koree peediyode anelum nan engene okeyoo ninod ente ishtam thurann parana devsam..orikalum marakillaaa..."
  },
  {
    date: "August 3, 2023",
    title: "Our IV Day..The day we Fall each other",
    description: "The day we hold our hands for the first time...",
  },
  {
    date: "October 13,2023",
    title: "IEDC Summit Day",
    description: "Our first kiss..."
  },
  {
    date: "November 11,2023",
    title: "Our First date ",
    description: "First date at airport ",
  },
  {
    date: "December 14,2023",
    title: "College Trip",
    description: "The days we enjoyed like honeymoonn.."
  },
  {
    date: "February 14,2025",
    title: "Valentines Day",
    description: "Our First Valentines Day Toegther"
  },
  {
    date: "May 17,2025",
    title: "Our first Car Date",
    description: "Panamkuzhi Day and your birthday..."
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-r from-cyan-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center text-teal-900">Our Journey Together</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Every moment with you has been a treasure. Here's a look back at some of our most special memories.
        </p>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-teal-500 to-emerald-500"></div>
          
          {events.map((event, index) => (
            <div key={index} className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2"></div>
              <div className="rounded-full w-8 h-8 bg-teal-600 border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2 hidden md:block"></div>
              <div className={`md:w-1/2 p-6 rounded-lg shadow-lg bg-white relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <span className="text-sm font-semibold text-teal-600 block mb-1">{event.date}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;