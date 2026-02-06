import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Relevant images (pharma lab, vials, injectables, production — royalty-free style sources)
  // Replace these URLs with your own hosted images (e.g. in /public or CDN) for production
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern pharmaceutical lab with sterile environment',
      caption: 'State-of-the-Art Manufacturing',
    },
    {
      url: 'https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Sterile injectable vials on production line',
      caption: 'High-Purity Injectables',
    },
    {
      url: 'https://tse3.mm.bing.net/th/id/OIP.buKhrvZmFJ6e5Sf4RhjAfwHaEL?pid=Api&P=0&h=220',
      alt: 'Automated vial filling in pharma factory',
      caption: 'Precision Filling Technology',
    },
    {
      url: 'https://tse3.mm.bing.net/th/id/OIP.uTVDWkLhWuGCX092eYBrRgHaDt?pid=Api&P=0&h=220',
      alt: 'Pharmaceutical quality control testing',
      caption: 'Strict Quality Assurance',
    },
    {
      url: 'https://tse3.mm.bing.net/th/id/OIP.dK0gSuJNEIo2DtGYEX2KUwHaEK?pid=Api&P=0&h=220',
      alt: 'Hands handling sterile ampoules in cleanroom',
      caption: 'Cleanroom Excellence',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-gradient min-h-[90vh] lg:min-h-screen pt-16 lg:pt-20 pb-8 lg:pb-12 relative overflow-hidden">
      <div className="star-field absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-5 lg:space-y-8 opacity-0 animate-fadeInUp">
            <div className="space-y-3 lg:space-y-4">
              <p className="text-teal-400 text-sm sm:text-base lg:text-lg font-body font-medium tracking-[0.25em] uppercase">
                Welcome to Anabolic DNA
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight tracking-tight">
                LEADING<br />
                PHARMACEUTICAL<br />
                FORMULATIONS<br />
                COMPANY
              </h1>
            </div>

            <p className="text-white/80 text-base sm:text-lg lg:text-xl font-body max-w-xl leading-relaxed">
              Committed to high-purity manufacturing, rigorous quality standards, and innovative formulations for performance and health.
            </p>
          </div>

          {/* Right Side - Sliding Images Carousel */}
          <div className="relative opacity-0 animate-fadeInUp delay-300 rounded-xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[520px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.url}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Optional overlay gradient + caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <p className="text-white text-base lg:text-lg font-medium px-6 pb-6 drop-shadow-md">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* Simple Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-teal-400 scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;