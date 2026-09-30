import React, { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    { src: '/images/the_bihar_guy_banner.jpg', alt: 'The Bihar Guy Wildlife Rescuer Banner' },
    { src: '/images/rescue_bird_net_police.jpg', alt: 'Wildlife Rescue Field Action' },
    { src: '/images/indian_roller.jpg', alt: 'Indian Roller Neelkanth Bird' },
    { src: '/images/greater_coucal.jpg', alt: 'Greater Coucal Bird Rescue' },
    { src: '/images/owl_in_net.jpg', alt: 'Owl Netting Extrication' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full max-w-full aspect-[16/9] sm:aspect-[16/9] md:h-[80vh] lg:h-[88vh] overflow-hidden bg-white m-0 p-0 border-none">
      {/* 3-second Carousel Image Slider */}
      {images.map((item, idx) => (
        <div
          key={item.src}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover object-center border-none p-0 m-0 block"
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 sm:h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-emerald-400 w-5 sm:w-8 shadow-md shadow-emerald-400/50'
                : 'bg-white/70 hover:bg-white w-1.5 sm:w-3'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
