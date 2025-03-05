
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Vitor facilitating a workshop with executives",
      caption: "Strategic planning workshop with leadership team"
    },
    {
      src: "https://images.unsplash.com/photo-1573497491765-55d99a3c6903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Vitor giving a presentation",
      caption: "Keynote on effective meeting strategies"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Team collaboration exercise led by Vitor",
      caption: "Team building workshop at innovation conference"
    },
    {
      src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Interactive whiteboard session",
      caption: "Problem-solving session with product team"
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Group discussion led by Vitor",
      caption: "Cross-functional alignment workshop"
    },
    {
      src: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Vitor speaking at conference",
      caption: "Speaking at Global Leadership Summit"
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.slide-up');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const toggleFullscreen = (index?: number) => {
    if (typeof index === 'number') {
      setActiveIndex(index);
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="gallery" ref={sectionRef} className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="slide-up text-3xl sm:text-4xl font-bold mb-6">Workshop Gallery</h2>
          <p className="slide-up text-lg text-muted-foreground leading-relaxed">
            A glimpse into the engaging, collaborative environments we create.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="slide-up overflow-hidden rounded-lg relative group cursor-pointer" 
              style={{ transitionDelay: `${0.1 * index}s` }}
              onClick={() => toggleFullscreen(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-sm">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => toggleFullscreen()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={handlePrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Previous</span>
            </button>
            
            <div className="relative max-w-5xl w-full max-h-[80vh]">
              <img 
                src={galleryImages[activeIndex].src} 
                alt={galleryImages[activeIndex].alt}
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              
              {galleryImages[activeIndex].caption && (
                <div className="absolute bottom-0 inset-x-0 bg-black/50 p-4 text-white">
                  <p className="text-center">{galleryImages[activeIndex].caption}</p>
                </div>
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={handleNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </button>
            
            <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors duration-300',
                    index === activeIndex ? 'bg-white' : 'bg-white/30'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
