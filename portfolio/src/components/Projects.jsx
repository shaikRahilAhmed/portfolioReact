import React, { useState } from 'react'
import employeeMSImage from "../assets/cyberSecurity.avif"

const projectsData = [
  {
    id: 1,
    name: "Employee Management System",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "A comprehensive MERN stack application for managing employee data, attendance tracking, and performance analytics with real-time dashboard.",
    features: ["Real-time Dashboard", "Employee Analytics", "Attendance Tracking", "Role-based Access"],
    category: "Full Stack"
  },
  {
    id: 2,
    name: "AI-Powered Chat Application",
    technologies: ["React", "Python", "FastAPI", "OpenAI"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "An intelligent chat application with AI integration, real-time messaging, and smart response generation using modern ML models.",
    features: ["AI Integration", "Real-time Chat", "Smart Responses", "User Authentication"],
    category: "AI/ML"
  },
  {
    id: 3,
    name: "E-Commerce Platform",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "A modern e-commerce platform with payment integration, inventory management, and advanced search capabilities.",
    features: ["Payment Gateway", "Inventory System", "Advanced Search", "Admin Dashboard"],
    category: "E-Commerce"
  },
  {
    id: 4,
    name: "Portfolio Dashboard",
    technologies: ["React", "D3.js", "Chart.js", "Firebase"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "Interactive portfolio dashboard with data visualizations, project analytics, and dynamic content management.",
    features: ["Data Visualization", "Analytics", "Dynamic Content", "Responsive Design"],
    category: "Dashboard"
  },
  {
    id: 5,
    name: "Task Management App",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "Collaborative task management application with team features, deadline tracking, and productivity analytics.",
    features: ["Team Collaboration", "Deadline Tracking", "Productivity Analytics", "File Sharing"],
    category: "Productivity"
  },
  {
    id: 6,
    name: "Weather Forecast App",
    technologies: ["React Native", "OpenWeather API", "Redux", "Maps"],
    image: employeeMSImage,
    github: "#",
    liveDemo: "#",
    description: "Cross-platform weather application with location-based forecasts, interactive maps, and weather alerts.",
    features: ["Location-based", "Interactive Maps", "Weather Alerts", "Offline Support"],
    category: "Mobile"
  }
];

const categories = ["All", "Full Stack", "AI/ML", "E-Commerce", "Dashboard", "Productivity", "Mobile"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className='bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white py-20 relative overflow-hidden' id='projects'>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-10'>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore my journey through code - from innovative web applications to AI-powered solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className='group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-700 hover:border-gray-600'
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110' 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>

                {/* Quick Action Buttons */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a 
                    href={project.github} 
                    className='bg-black/80 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 transform hover:scale-110'
                    target='_blank' 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={project.liveDemo} 
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110'
                    target='_blank' 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300'>
                  {project.name}
                </h3>
                
                <p className='text-gray-400 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className='bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300 cursor-default'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className='space-y-2 mb-6'>
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-center text-sm text-gray-400'>
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex space-x-4'>
                  <a 
                    href={project.github} 
                    className='flex-1 bg-gray-700 hover:bg-gray-600 text-center py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold text-sm'
                    target='_blank' 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    className='flex-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-center py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold text-sm'
                    target='_blank' 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/0 via-blue-500/0 to-purple-500/0 group-hover:from-green-400/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <button className='group relative bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-transparent overflow-hidden'>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View All Projects on GitHub
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Projects