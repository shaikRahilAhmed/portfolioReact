import React from 'react'
import AboutImage from '../assets/rahilimg.jpeg'

const About = () => {
    const skills = [
        { name: "JavaScript", level: 88, color: "bg-yellow-400" },
        { name: "React.js", level: 85, color: "bg-blue-500" },
        { name: "Python", level: 78, color: "bg-teal-500" },
        { name: "Java", level: 75, color: "bg-orange-500" },
        { name: "HTML & CSS / Tailwind", level: 92, color: "bg-indigo-500" },
        { name: "Git & GitHub", level: 90, color: "bg-purple-500" },
    ];

    const techBadges = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "MongoDB", "SQL", "TailwindCSS", "Git"];

    return (
        <div className='bg-white py-24 relative overflow-hidden' id='about'>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>

            <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10'>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className='inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4'>
                        Who I Am
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className='flex flex-col lg:flex-row items-start lg:gap-20 gap-12'>
                    {/* Image */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative mb-8 lg:mb-0">
                            <div className='absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-3xl'></div>
                            <img
                                src={AboutImage}
                                alt="Shaik Rahil Ahmed"
                                className='relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl object-cover shadow-xl border-2 border-white'
                            />
                            {/* Tech badge card — positioned safely inside on xs */}
                            <div className='absolute -right-4 sm:-right-6 bottom-6 bg-white rounded-2xl shadow-xl p-3 border border-slate-100 max-w-28'>
                                <p className='text-xs text-slate-400 mb-2 font-medium'>Tech Stack</p>
                                <div className='flex flex-wrap gap-1'>
                                    {techBadges.slice(0, 4).map((t, i) => (
                                        <span key={i} className='bg-indigo-50 text-indigo-600 text-xs px-2 py-0.5 rounded-md font-medium'>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className='lg:w-3/5 space-y-8'>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                                Full Stack Developer &{' '}
                                <span className='text-indigo-600'>AI/ML Enthusiast</span>
                            </h3>
                            <p className='text-slate-500 leading-relaxed text-base mb-3'>
                                I'm a B.Tech student in Artificial Intelligence and Machine Learning at St. Martin's Engineering
                                College, JNTUH — with hands-on experience in full-stack development and machine learning applications.
                            </p>
                            <p className='text-slate-500 leading-relaxed text-base'>
                                Proficient in building end-to-end data-driven systems using modern web technologies and AI models.
                                Strong foundation in Java, Python, and JavaScript with practical exposure to model deployment,
                                analytics dashboards, and real-world problem solving.
                            </p>
                        </div>

                        {/* Skill Bars */}
                        <div>
                            <h4 className="text-lg font-semibold text-slate-700 mb-4">Technical Skills</h4>
                            <div className='space-y-3'>
                                {skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className='flex justify-between items-center mb-1.5'>
                                            <span className='text-sm font-medium text-slate-600'>{skill.name}</span>
                                            <span className='text-sm text-slate-400'>{skill.level}%</span>
                                        </div>
                                        <div className='w-full bg-slate-100 rounded-full h-2'>
                                            <div
                                                className={`${skill.color} h-2 rounded-full`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div>
                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Soft Skills</h4>
                            <div className='flex flex-wrap gap-2'>
                                {["Analytical Thinking", "Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Curiosity-driven Learning"].map((s, i) => (
                                    <span key={i} className='bg-slate-50 border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium'>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
