
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'speech-emotion',
      title: 'Speech Emotion Detection Using AI',
      description: 'An AI system that identifies emotions in speech using deep learning techniques.',
      technologies: ['Python', 'TensorFlow', 'Signal Processing'],
      category: 'AI',
      imageUrl: 'https://placehold.co/600x400/e9ecfe/6D5CE5?text=Speech+Emotion+Detection',
    },
    {
      id: 'fake-currency',
      title: 'Fake Currency Detection Using ML',
      description: 'A machine learning model that detects counterfeit currency through image processing.',
      technologies: ['Python', 'OpenCV', 'Scikit-learn'],
      category: 'Machine Learning',
      imageUrl: 'https://placehold.co/600x400/fef4e6/FF9F38?text=Currency+Detection',
    },
    {
      id: 'leaf-disease',
      title: 'Leaf Disease Detection Using Deep Learning',
      description: 'Deep learning system to identify plant diseases from leaf images to aid farmers.',
      technologies: ['Deep Learning', 'Keras', 'Image Processing'],
      category: 'AI',
      imageUrl: 'https://placehold.co/600x400/e9ecfe/6D5CE5?text=Leaf+Disease+Detection',
    },
    {
      id: 'outpass-system',
      title: 'Online Out Pass System',
      description: 'Object-oriented application for managing and automating student out pass requests.',
      technologies: ['Java', 'OOP', 'Database Design'],
      category: 'Web',
      imageUrl: 'https://placehold.co/600x400/fef4e6/FF9F38?text=Online+Out+Pass',
    },
    {
      id: 'sightsink',
      title: 'SightSink: Live Video Description',
      description: 'System that provides real-time video descriptions and speech for the visually challenged.',
      technologies: ['Python', 'Computer Vision', 'NLP', 'Text-to-Speech'],
      category: 'AI',
      imageUrl: 'https://placehold.co/600x400/e9ecfe/6D5CE5?text=SightSink',
    }
  ];

  const categories = ['All', 'AI', 'Machine Learning', 'Web'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] w-14 h-14 bg-portfolio-purple/10 rounded-full"></div>
      <div className="absolute bottom-20 right-[10%] w-12 h-12 bg-portfolio-orange/10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects showcasing my skills and interests.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`
                  rounded-full px-5 
                  ${activeCategory === category 
                    ? 'bg-portfolio-purple hover:bg-portfolio-purple/90 text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-portfolio-purple hover:text-portfolio-purple'
                  }
                `}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-darkBlue mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="text-portfolio-purple hover:text-portfolio-purple/90 p-0 group"
                >
                  View Project
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
