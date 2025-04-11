
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for handling body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay - Separate from navbar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="container flex flex-col items-center justify-center min-h-screen space-y-8 py-20">
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#clients" onClick={() => setMobileMenuOpen(false)}>Clients</MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
            <MobileNavLink href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}

      {/* Navbar - Always on top */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[60] transition-colors duration-300',
          scrolled && !mobileMenuOpen ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent',
          'py-4'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="text-xl font-display font-semibold tracking-tight">
            Vitor Kneipp
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={cn(
                'absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out',
                mobileMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'
              )}></span>
              <span className={cn(
                'absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out top-2',
                mobileMenuOpen && 'opacity-0'
              )}></span>
              <span className={cn(
                'absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out',
                mobileMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'
              )}></span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-xl font-medium text-foreground py-2"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
