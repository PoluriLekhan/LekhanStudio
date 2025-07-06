
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Full-stack web application with real-time data visualization and machine learning integration.',
      tech: ['React', 'Node.js', 'Python', 'TensorFlow'],
      category: 'Web Development',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Voice-Controlled IoT System',
      description: 'Smart home automation system with natural language processing and voice recognition.',
      tech: ['Python', 'Raspberry Pi', 'AWS', 'Speech API'],
      category: 'IoT & AI',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Mobile AI Assistant',
      description: 'Cross-platform mobile application with conversational AI and personalized recommendations.',
      tech: ['React Native', 'Firebase', 'OpenAI', 'TypeScript'],
      category: 'Mobile Development',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My personal development journey — a modern showcase of real-world projects 
            built with passion, precision, and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`clean-card group hover:shadow-lg transition-all duration-300 fade-in-delay-${index + 1}`}
            >
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <div className="flex space-x-2">
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    <Github className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <button className="inline-flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
            <Code className="w-4 h-4" />
            <span>View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
