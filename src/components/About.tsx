
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, MonitorSmartphone, Code, LineChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[5%] w-16 h-16 bg-portfolio-orange/10 rounded-full"></div>
      <div className="absolute bottom-20 left-[10%] w-10 h-10 bg-portfolio-purple/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue mb-4">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Let me tell you a bit about my background and what drives my passion for AI and Machine Learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Education Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-darkBlue">Educational Background</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Degree</h4>
                  <p className="text-gray-600">B.Tech in Computer Science and Engineering with specialization in AI & ML</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">University</h4>
                  <p className="text-gray-600">Malla Reddy University</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">CGPA</h4>
                  <p className="text-gray-600">9.1 (up to 6th semester)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle size={20} className="text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Expected Graduation</h4>
                  <p className="text-gray-600">2026</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white rounded-full px-6">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Services/Expertise */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-darkBlue">My Expertise Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-portfolio-purple text-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MonitorSmartphone size={32} className="mb-4 mt-2" />
                  <h4 className="text-lg font-semibold mb-2">AI & ML Development</h4>
                  <p className="text-sm text-white/90">Building models and algorithms for real-world AI applications</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Code size={32} className="mb-4 mt-2 text-portfolio-purple" />
                  <h4 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">Full Stack Development</h4>
                  <p className="text-sm text-gray-600">Creating end-to-end web applications with modern technologies</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <LineChart size={32} className="mb-4 mt-2 text-portfolio-purple" />
                  <h4 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">Data Analysis</h4>
                  <p className="text-sm text-gray-600">Processing and analyzing data to extract meaningful insights</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-shadow border border-gray-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 mt-2 text-portfolio-purple">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                  <h4 className="text-lg font-semibold mb-2 text-portfolio-darkBlue">AI Research</h4>
                  <p className="text-sm text-gray-600">Exploring cutting-edge AI techniques and applications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
