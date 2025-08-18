import React from 'react'

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Technology (B.Tech)",
    school: "St Martin's Engineering College, JNTUH University, India",
    description:
      "Specialized in Artifitial Intelligence and Machine Learning. Learned core concepts of software engineering, fullstack development, and data structures.",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary School (Intermediate)",
    school: "Narayana Junior College, India",
    description:
      "Focused on PCM (Physics, Chemistry, Mathematics). Developed strong analytical and problem-solving skills.",
  },
  {
    year: "2020",
    degree: "Secondary School (10th Grade)",
    school: "Buds And High School, India",
    description:
      "Completed schooling with distinction. Built foundation in logical thinking and technology interest.",
  },
];

const Education = () => {
  return (
    <div className="bg-black text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

       
        <div className="relative border-l border-gray-600">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
             
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-4 ring-black"></span>

           
              <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                <span className="text-sm text-gray-400">{edu.year}</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{edu.school}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
