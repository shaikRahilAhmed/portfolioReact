import React, { useState } from 'react'

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Machine Learning",
    school: "St Martin's Engineering College",
    university: "JNTUH University, India",
    description: "Specialized in AI/ML with comprehensive training in software engineering, full-stack development, and advanced data structures. Focused on cutting-edge technologies and practical application development.",
    achievements: [
      "CGPA: 8.5/10",
      "AI/ML Specialization",
      "Full Stack Development",
      "Data Structures & Algorithms"
    ],
    icon: "🎓",
    color: "from-blue-500 to-purple-500",
    status: "In Progress"
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary School",
    field: "Physics, Chemistry, Mathematics (PCM)",
    school: "Narayana Junior College",
    university: "India",
    description: "Developed strong analytical and problem-solving skills through intensive study of core sciences. Built mathematical foundation essential for programming and logical thinking.",
    achievements: [
      "95% Aggregate",
      "Mathematics Excellence",
      "Science Olympiad Participant",
      "Coding Club Member"
    ],
    icon: "📚",
    color: "from-green-500 to-blue-500",
    status: "Completed"
  },
  {
    year: "2020",
    degree: "Secondary School Certificate",
    field: "Science & Mathematics",
    school: "Buds High School",
    university: "India",
    description: "Completed foundational education with distinction. Developed early interest in technology and programming. Participated in various science and mathematics competitions.",
    achievements: [
      "93% Marks",
      "District Science Fair Winner",
      "Mathematics Topper",
      "Computer Science Excellence"
    ],
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
    status: "Completed"
  },
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white py-20 relative overflow-hidden" id="education">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            My academic foundation in technology, mathematics, and artificial intelligence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 rounded-full"></div>

          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center text-lg shadow-lg z-10 ${
                index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
              }`}>
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div 
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedEducation(selectedEducation === index ? null : index)}
                >
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'In Progress' 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg text-blue-400 font-semibold mb-2">
                    {edu.field}
                  </p>
                  
                  <p className="text-gray-400 text-base mb-4">
                    {edu.school} • {edu.university}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-500 ${
                    selectedEducation === index ? 'max-h-96 opacity-100' : 'max-h-24 opacity-70'
                  } overflow-hidden`}>
                    {edu.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex} 
                        className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                        <span className="text-gray-300 text-sm font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex justify-center mt-6">
                    <div className={`w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center transition-transform duration-300 ${
                      selectedEducation === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Certifications
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "MERN Stack", icon: "⚛️", level: "Advanced" },
              { name: "AI/ML", icon: "🤖", level: "Intermediate" },
              { name: "Data Structures", icon: "📊", level: "Advanced" },
              { name: "Problem Solving", icon: "🧩", level: "Expert" }
            ].map((skill, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default Education