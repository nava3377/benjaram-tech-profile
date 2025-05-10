
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-portfolio-darkBlue font-bold text-2xl">
            Navadeep
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-portfolio-purple transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-purple transition-colors">
            About Me
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-portfolio-purple transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-purple transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-portfolio-purple transition-colors">
            Contact
          </button>
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white rounded-full"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 absolute w-full animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-portfolio-purple transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-purple transition-colors py-2">
              About Me
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-portfolio-purple transition-colors py-2">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-purple transition-colors py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-portfolio-purple transition-colors py-2">
              Contact
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white rounded-full"
            >
              Let's Talk
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
