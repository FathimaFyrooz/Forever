import React, { useState } from 'react';
import { X } from 'lucide-react';

// Import all images
import airport from '../assets/airport.jpeg';
// import airport2 from '../assets/airport2.jpeg';
import aluvaPark from '../assets/AluvaPark.jpeg';
import amritha from '../assets/Amritha.jpeg';
import ansilAwdng from '../assets/ansilawdng.jpeg';
import asnaAwdng from '../assets/Asnawdng.jpeg';
import asnaWedig from '../assets/Asnawedig.jpeg';
import carDate from '../assets/CarDate.jpeg';
import classImg from '../assets/class.jpeg';
import firstDate from '../assets/firsst date.jpeg';
import graduation from '../assets/graduation.jpeg';
import hand from '../assets/hand.jpeg';
import iedc from '../assets/iedc.jpeg';
import lab from '../assets/lab.jpeg';
import manapuram from '../assets/manapuram.jpeg';
import myBirthday from '../assets/mybirthday.jpeg';
import office from '../assets/office.jpeg';
import panamkuzhi from '../assets/Panamkuzhi.jpeg';
import panamkuzhi1 from '../assets/panamkuzhi1.jpeg';
import panieyeli from '../assets/Panieyeli.jpeg';
import trip from '../assets/trip.jpeg';
import River from '../assets/River.jpeg';
import Palam from '../assets/Palam.jpeg';
import Trip3 from '../assets/Trip3.jpeg';
import Fingers from '../assets/Fingers.jpeg';

const images = [
  { url: airport, title: "Airport" },
  { url: aluvaPark, title: "Aluva Park" },
  { url: amritha, title: "Amritha" },
  { url: ansilAwdng, title: "Ansila's Wedding" },
  { url: asnaAwdng, title: "Our Favourite pic together" },
  { url: asnaWedig, title: "Asna Wedding" },
  { url: carDate, title: "Our First Car Date" },
  { url: classImg, title: "Class Time" },
  { url: firstDate, title: "First Date of us" },
  { url: graduation, title: "Graduated Together" },
  { url: hand, title: "Hand in Hand" },
  { url: iedc, title: "IEDC Event" },
  { url: lab, title: "Lab Moments" },
  { url: manapuram, title: "Manapuram" },
  { url: myBirthday, title: "My Birthday" },
  { url: office, title: "Office Mirror" },
  { url: panamkuzhi, title: "Panamkuzhi" },
  { url: panamkuzhi1, title: "Panamkuzhi" },
  { url: panieyeli, title: "Panieyeli Poru" },
  { url: trip, title: "Our CollegeTrip" },
  {url:River,title:"Dres u gifted me"},
  {url:Palam,title:"Again our spot,Manapuram"},
  {url:Fingers,title:"Your Art"},
  { url: Trip3, title: "trip" },
  
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-r from-cyan-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-900">Some of Our Beautiful Memories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative h-72">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-4">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
