
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-darkBlue text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Benjaram Navadeep</h3>
            <p className="text-white/70 mt-2">AI & ML Specialist</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:benjaramnavadeepreddy@gmail.com" className="text-white/70 hover:text-white transition-colors">Email Me</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex justify-between items-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Benjaram Navadeep. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop} 
            className="p-3 bg-portfolio-purple/20 hover:bg-portfolio-purple/30 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
