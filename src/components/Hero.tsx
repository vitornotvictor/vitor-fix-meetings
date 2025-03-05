
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="reveal-item">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Workshop Facilitator
            </span>
          </div>
          
          <h1 className="reveal-item text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I <span className="text-primary">fix meetings</span> that waste your team's time.
          </h1>
          
          <p className="reveal-item text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transform your unproductive meetings into focused, energizing sessions that drive results and keep your team engaged.
          </p>
          
          <div className="reveal-item pt-4 flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Book a Workshop
            </a>
            <a 
              href="#about" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="reveal-item relative bg-white p-2 rounded-xl shadow-lg transform md:rotate-1 max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur opacity-30 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Vitor Kneipp facilitating a workshop" 
              className="rounded-lg w-full h-auto object-cover" 
            />
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg reveal-item" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold">97%</p>
                <p className="text-xs text-muted-foreground">Productivity Increase</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg reveal-item" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold">50%</p>
                <p className="text-xs text-muted-foreground">Less Meeting Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
