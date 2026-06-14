import React, { useState } from 'react'
import employeeMSImage from "../assets/cyberSecurity.avif"

const projectsData = [
    {
        id: 1,
        name: "NutriSync – Health & Fitness Dashboard",
        technologies: ["React", "Tailwind", "Node.js", "Express", "SupaBase", "AI API"],
        image: employeeMSImage,
        github: "https://github.com/shaikRahilAhmed/NutriSync07",
        liveDemo: "#",
        description: "An end-to-end AI-driven health dashboard with custom nutrition models for Indian food datasets, enabling accurate calorie and diet pattern analysis.",
        features: [
            "AI-powered nutrition models",
            "Interactive fitness dashboards",
            "Personalized recommendations",
            "Indian food dataset support"
        ],
        category: "AI / ML",
        year: "2025"
    },
    {
        id: 2,
        name: "SnapSpend – Spending Analytics Dashboard",
        technologies: ["TypeScript", "Vite", "Tailwind", "Node.js", "MongoDB", "AI API"],
        image: employeeMSImage,
        github: "https://github.com/shaikRahilAhmed/snaSpend",
        liveDemo: "#",
        description: "A full-stack financial management app with AI-powered expense categorization, real-time tracking, and interactive visual analytics for smarter budgeting.",
        features: [
            "AI expense categorization",
            "Real-time tracking",
            "Visual analytics dashboard",
            "Smart budgeting insights"
        ],
        category: "Full Stack",
        year: "2026"
    },
    {
        id: 3,
        name: "Age & Gender Classification – CNN",
        technologies: ["Python", "Pandas", "CNN", "HTML", "CSS"],
        image: employeeMSImage,
        github: "https://github.com/shaikRahilAhmed",
        liveDemo: "#",
        description: "A CNN-based machine learning pipeline to classify age and gender from images, with data preprocessing, feature extraction, and optimized model accuracy.",
        features: [
            "CNN classification model",
            "Data preprocessing pipeline",
            "Feature extraction",
            "Optimized accuracy"
        ],
        category: "ML / Python",
        year: "2024"
    }
];

const categoryColors = {
    "AI / ML":    "bg-teal-50 text-teal-700 border-teal-100",
    "Full Stack": "bg-indigo-50 text-indigo-700 border-indigo-100",
    "ML / Python":"bg-purple-50 text-purple-700 border-purple-100",
};

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className='bg-white py-24 relative overflow-hidden' id='projects'>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-transparent pointer-events-none"></div>

            <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10'>
                {/* Header */}
                <div className="text-center mb-14">
                    <span className='inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4'>
                        My Work
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
                        Featured Projects
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-6">
                        Real projects I've built — from AI health dashboards to financial analytics and machine learning models.
                    </p>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className='group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 flex flex-col'
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-44 flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                {/* Badges */}
                                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[project.category] || 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                                    {project.category}
                                </span>
                                <span className='absolute top-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full font-medium'>
                                    {project.year}
                                </span>

                                {/* Hover actions */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='bg-white text-slate-800 p-2.5 rounded-full shadow-lg hover:bg-slate-50 transition-colors'
                                        aria-label="View on GitHub"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-5 flex flex-col flex-1'>
                                <h3 className='text-base font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200 leading-snug'>
                                    {project.name}
                                </h3>
                                <p className='text-sm text-slate-500 mb-4 leading-relaxed flex-1'>
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className='space-y-1.5 mb-4'>
                                    {project.features.map((f, i) => (
                                        <div key={i} className='flex items-center gap-2 text-xs text-slate-500'>
                                            <div className='w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0'></div>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                {/* Tech tags */}
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className='bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md text-xs font-medium'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center gap-2 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 mt-auto'
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-14">
                    <p className='text-slate-400 mb-4 text-sm'>All source code is publicly available on GitHub</p>
                    <a
                        href="https://github.com/shaikRahilAhmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center gap-2.5 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5'
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
