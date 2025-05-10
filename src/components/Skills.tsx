
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 90, category: 'Languages' },
    { name: 'Java', level: 75, category: 'Languages' },
    { name: 'HTML/CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'Machine Learning', level: 85, category: 'AI' },
    { name: 'Deep Learning', level: 80, category: 'AI' },
    { name: 'NLP', level: 75, category: 'AI' },
    { name: 'Full Stack Development', level: 70, category: 'Development' },
    { name: 'Windows', level: 95, category: 'OS' },
    { name: 'Linux', level: 80, category: 'OS' },
  ];

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = [];
    }
    skillsByCategory[skill.category].push(skill);
  });

  return (
    <section id="skills" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-12 h-12 rounded-full border-2 border-portfolio-orange opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full border-2 border-portfolio-purple opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-darkBlue mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-portfolio-purple mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are my primary technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <Card key={category} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-darkBlue mb-6">{category}</h3>
                <div className="space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-portfolio-purple" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set, with a strong enthusiasm for AI and advanced technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
