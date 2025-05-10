
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

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
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-12 h-12 bg-portfolio-purple/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-portfolio-orange/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-portfolio-purple/20 rounded-full blur-lg"></div>
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-portfolio-lightPurple/20 to-transparent rounded-bl-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center justify-center lg:justify-start px-4 py-2 bg-portfolio-purple/10 rounded-full mb-4">
              <span className="text-portfolio-purple text-sm font-medium">WELCOME TO MY PORTFOLIO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm <span className="text-portfolio-purple">Benjaram Navadeep Reddy</span>
              <div className="mt-2">An <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-purple to-portfolio-orange">AI & ML Specialist</span></div>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 text-lg">
              I'm a Computer Science and Engineering student specializing in AI & ML at Malla Reddy University, passionate about building advanced AI tools for real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white rounded-xl px-6 py-6 min-w-[180px]"
                onClick={scrollToContact}
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Let's Talk
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-xl px-6 py-6 min-w-[180px]"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-semibold">50+</span> Projects Completed
              </span>
            </div>
          </div>
          
          {/* Image with modern styling */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
                {/* Main circular profile container */}
                <div className="w-full h-full bg-gradient-to-br from-portfolio-purple to-portfolio-orange rounded-full absolute top-0 left-0 p-1">
                  <div className="w-full h-full bg-white dark:bg-portfolio-darkBlue rounded-full overflow-hidden flex items-center justify-center relative">
                    <div className="text-portfolio-purple text-xl font-medium">Profile Image</div>
                    {/* Background blur effect */}
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-portfolio-purple opacity-30 rounded-full blur-lg"></div>
                  </div>
                </div>
                
                {/* Decorative rotating orbit */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-dashed border-portfolio-purple/30 animate-spin-slow"></div>
                
                {/* Floating badges */}
                <div className="absolute -right-4 top-12 bg-white dark:bg-portfolio-darkBlue shadow-lg rounded-xl p-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-portfolio-purple flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                    <span className="text-sm font-medium">ML Expert</span>
                  </div>
                </div>
                
                <div className="absolute -left-6 bottom-12 bg-white dark:bg-portfolio-darkBlue shadow-lg rounded-xl p-2 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-portfolio-orange flex items-center justify-center">
                      <span className="text-white font-bold text-xs">9.1</span>
                    </div>
                    <span className="text-sm font-medium">CGPA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 bottom-0 right-1/4 w-48 h-48 bg-portfolio-lightPurple rounded-full opacity-20 blur-lg"></div>
          </div>
        </div>
        
        {/* Tech stack particles */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap opacity-60">
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">Python</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">Machine Learning</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">Deep Learning</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">NLP</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">Full Stack</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
