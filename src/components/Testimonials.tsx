
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Vitor completely transformed how our leadership team runs meetings. We've cut our meeting time in half while accomplishing twice as much. His workshop was a game-changer for our organization.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Working with Vitor was an eye-opening experience. His methodologies completely redesigned our approach to team collaboration. Our meetings are now focused, engaging, and produce actionable outcomes every time.",
      author: "Michael Chen",
      position: "Head of Product",
      company: "GrowthLabs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Vitor's workshop was exactly what our team needed. He provided practical tools that we implemented immediately and saw results. His energy and expertise made the session both valuable and enjoyable.",
      author: "Elena Rodriguez",
      position: "Director of Operations",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, [testimonials.length]);
  
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

  return (
    <section id="testimonials" ref={sectionRef} className="section bg-primary/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="slide-up text-3xl sm:text-4xl font-bold mb-6">What Clients Say</h2>
          <p className="slide-up text-lg text-muted-foreground leading-relaxed">
            Hear from the teams and organizations that have transformed their meetings.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 text-6xl text-primary opacity-20 select-none">"</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-primary opacity-20 select-none">"</div>
          
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 slide-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur opacity-30 -z-10"></div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  'transition-opacity duration-500 absolute inset-0 flex flex-col justify-between p-8 md:p-12',
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                )}
              >
                <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* This div maintains the height */}
            <div className="opacity-0 pointer-events-none">
              <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
                {testimonials[0].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">{testimonials[0].author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[0].position}, {testimonials[0].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-colors duration-300',
                  index === activeIndex ? 'bg-primary' : 'bg-primary/20'
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
