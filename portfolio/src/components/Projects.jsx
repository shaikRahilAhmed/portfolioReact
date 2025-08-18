import React from 'react'
import employeeMSImage from "../assets/cyberSecurity.avif"


const projects = [
  {
    id: 1,
    name: "EMployee Ms",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "",
  },
  {
    id: 2,
    name: "EMployee Ms",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "",
  },
  {
    id: 3,
    name: "EMployee Ms",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "",
  },
];

const Projects = () => {
  return (

    <div className='bg-black text-white py-40' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((projects) => (
            <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <img src={projects.image} alt={projects.name} className='rounded-lg mb-4 w-full h-48 object-cover' />
              <h3 className='text-2xl font-bold mb-2'>{projects.name}</h3>
              <p className='text-gray-400 mb-4'>{projects.technologies}</p>
              <a href={projects.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
