import React from 'react'
import AboutImage from '../assets/rahilimg.jpeg'

const About = () => {
    const skills = [
        { name: "HTML & CSS", level: 90, color: "from-orange-400 to-red-500" },
        { name: "React.js", level: 85, color: "from-blue-400 to-cyan-500" },
       // { name: "Node.js", level: 75, color: "from-green-400 to-emerald-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
      //  { name: "MongoDB", level: 70, color: "from-green-500 to-teal-500" },
        { name: "GitHub", level: 95, color: "from-purple-400 to-pink-500" }
    ];

    const stats = [
        { number: "2+", label: "Years Experience", icon: "🚀" },
        { number: "15+", label: "Projects Completed", icon: "💻" },
        { number: "5+", label: "Technologies Mastered", icon: "⚡" },
        { number: "100%", label: "Client Satisfaction", icon: "🎯" }
    ];

    return (
        <div className='bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white py-20 relative overflow-hidden' id='about'>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-10'>
                <div className="text-center mb-16">
                    <h2 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className='flex flex-col lg:flex-row items-center lg:space-x-16 gap-12'>
                    {/* Image Section */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <img 
                                src={AboutImage} 
                                alt="Shaik Rahil"
                                className='relative w-80 h-96 rounded-3xl object-cover shadow-2xl transform transition-all duration-500 group-hover:scale-105' 
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='lg:w-2/3 space-y-8'>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Full Stack Developer & AI Enthusiast
                            </h3>
                            <p className='text-lg text-gray-300 leading-relaxed'>
                                I'm a passionate Full Stack Developer specializing in the MERN stack with expertise in Artificial Intelligence and Machine Learning. 
                                I transform innovative ideas into scalable, user-centric digital solutions that make a real impact. 
                                My journey combines cutting-edge technology with creative problem-solving to build the future of web development.
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className='space-y-6'>
                            <h4 className="text-2xl font-semibold text-white mb-4">Technical Expertise</h4>
                            <div className='space-y-4'>
                                {skills.map((skill, index) => (
                                    <div key={index} className='group'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <label className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
                                                {skill.name}
                                            </label>
                                            <span className='text-sm text-gray-400 group-hover:text-white transition-colors duration-300'>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className='w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner'>
                                            <div 
                                                className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transform transition-all duration-1000 ease-out shadow-lg group-hover:shadow-xl`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                            {stats.map((stat, index) => (
                                <div key={index} className='text-center group cursor-pointer'>
                                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-gray-600">
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <h3 className='text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
                                            {stat.number}
                                        </h3>
                                        <p className='text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300'>
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes tilt {
                    0%, 50%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(1deg); }
                    75% { transform: rotate(-1deg); }
                }
                .animate-tilt { animation: tilt 10s infinite linear; }
            `}</style>
        </div>
    )
}

export default About