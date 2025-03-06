
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="about" ref={sectionRef} className="section bg-stone-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="slide-up text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="slide-up text-lg text-muted-foreground leading-relaxed">
            I help teams transform their meeting culture to drive clarity, alignment, and results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="slide-up relative bg-white p-3 rounded-xl shadow-lg max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Vitor Kneipp" 
                className="rounded-lg w-full h-auto object-cover aspect-[4/3]" 
              />
            </div>
            
            <div className="absolute top-1/2 -right-8 transform translate-x-1/2 bg-white p-5 rounded-full shadow-lg slide-up" style={{ transitionDelay: '0.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="slide-up text-2xl font-bold mb-4">Vitor Kneipp</h3>
            <p className="slide-up text-muted-foreground leading-relaxed" style={{ transitionDelay: '0.1s' }}>
              With over a decade of experience in facilitation and team dynamics, I've helped hundreds of organizations transform their meeting culture. I believe that effective meetings are the heartbeat of successful organizations.
            </p>
            <p className="slide-up text-muted-foreground leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              My approach combines proven methodologies with creative techniques to ensure every meeting has clear outcomes, engaged participants, and actionable next steps. I work with teams across industries to design and facilitate sessions that matter.
            </p>
            <p className="slide-up text-muted-foreground leading-relaxed" style={{ transitionDelay: '0.3s' }}>
              When I'm not facilitating workshops, you'll find me exploring new productivity methods, speaking at conferences, or enjoying a good cup of coffee while planning my next workshop innovation.
            </p>
            
            <div className="slide-up pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ transitionDelay: '0.4s' }}>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Workshops</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15k+</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
