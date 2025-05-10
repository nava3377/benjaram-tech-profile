
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // This would be replaced with an actual CV download link
    console.log("Download CV clicked");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-portfolio-orange rounded-full opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-portfolio-purple rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full border-2 border-portfolio-purple opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full border-2 border-portfolio-orange opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <span className="h-[1px] w-10 bg-gray-400"></span>
              <span className="text-gray-600 text-sm font-medium">WELCOME TO MY PORTFOLIO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-portfolio-darkBlue">
              Hello, I'm<br />
              <span className="text-portfolio-purple">Benjaram Navadeep Reddy</span><br />
              <span>An AI & ML Specialist</span>
            </h1>
            
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0 text-lg">
              I'm a Computer Science and Engineering student specializing in AI & ML at Malla Reddy University, passionate about building advanced AI tools for real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white rounded-full px-6 py-6 min-w-[180px]"
                onClick={scrollToContact}
              >
                Let's Talk
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-6 py-6 min-w-[180px]"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
            <div className="relative z-10 mx-auto lg:ml-auto">
              {/* This would be replaced with an actual profile photo */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-purple rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-xl font-medium">Profile Image</div>
                {/* Background decoration for the image */}
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-portfolio-orange rounded-full opacity-50"></div>
              </div>
            </div>
            
            {/* Decorative elements around the image */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-portfolio-lightPurple rounded-full opacity-70 z-0"></div>
            <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-portfolio-orange rounded-full animate-pulse-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
