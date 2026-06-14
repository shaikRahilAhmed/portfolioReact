import React, { useState } from 'react'

const educationData = [
    {
        year: "2022 – 2026",
        degree: "B.Tech – Artificial Intelligence & Machine Learning",
        school: "St. Martin's Engineering College",
        university: "Jawaharlal Nehru Technological University, Hyderabad",
        description: "Specializing in AI/ML with comprehensive training in software engineering, full-stack development, and advanced data structures. Building end-to-end data-driven systems.",
        achievements: ["CGPA: 7.18", "AI/ML Specialization", "Full Stack Dev", "DSA"],
        icon: "🎓",
        accent: "indigo",
        status: "Completed"
    },
    {
        year: "2021 – 2022",
        degree: "Class XII – State Board (Telangana)",
        school: "Narayana Junior College",
        university: "Telangana State Board",
        description: "Studied Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving foundations essential for engineering.",
        achievements: ["75% Aggregate", "PCM Stream", "State Board", "Telangana"],
        icon: "📚",
        accent: "teal",
        status: "Completed"
    },
    {
        year: "2020",
        degree: "Class X – State Board (Telangana)",
        school: "Buds and Flowers High School",
        university: "Telangana State Board",
        description: "Completed foundational schooling with strong performance in science and mathematics.",
        achievements: ["CGPA: 9.2", "State Board", "Science & Maths", "Distinction"],
        icon: "🏆",
        accent: "purple",
        status: "Completed"
    },
];

const certifications = [
    {
        name: "Full Stack & AI Course",
        issuer: "Intellipaat (IIT Roorkee)",
        icon: "🤖",
        color: "bg-indigo-50 border-indigo-100 text-indigo-700"
    },
    {
        name: "Web Development",
        issuer: "Apna College",
        icon: "🌐",
        color: "bg-teal-50 border-teal-100 text-teal-700"
    }
];

const accentMap = {
    indigo: {
        badge:  "bg-indigo-50 text-indigo-600 border-indigo-100",
        dot:    "border-indigo-200 bg-indigo-50",
        text:   "text-indigo-600",
        pill:   "bg-indigo-100 text-indigo-700",
        hover:  "hover:border-indigo-200",
    },
    teal: {
        badge:  "bg-teal-50 text-teal-600 border-teal-100",
        dot:    "border-teal-200 bg-teal-50",
        text:   "text-teal-600",
        pill:   "bg-teal-100 text-teal-700",
        hover:  "hover:border-teal-200",
    },
    purple: {
        badge:  "bg-purple-50 text-purple-600 border-purple-100",
        dot:    "border-purple-200 bg-purple-50",
        text:   "text-purple-600",
        pill:   "bg-purple-100 text-purple-700",
        hover:  "hover:border-purple-200",
    },
};

const Education = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <div className="bg-slate-50 py-24 relative overflow-hidden" id="education">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-indigo-50 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className='inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4'>
                        Academic Background
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Education
                    </h2>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-teal-200 to-purple-200"></div>

                    <div className='space-y-6'>
                        {educationData.map((edu, index) => {
                            const a = accentMap[edu.accent];
                            return (
                                <div key={index} className='relative pl-16'>
                                    {/* Dot */}
                                    <div className={`absolute left-3 top-6 w-7 h-7 rounded-full border-2 ${a.dot} flex items-center justify-center text-sm z-10`}>
                                        {edu.icon}
                                    </div>

                                    <div
                                        className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${a.hover}`}
                                        onClick={() => setExpanded(expanded === index ? null : index)}
                                    >
                                        <div className='flex flex-wrap items-start justify-between gap-3 mb-3'>
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${a.badge}`}>
                                                {edu.year}
                                            </span>
                                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                                edu.status === 'In Progress'
                                                    ? 'bg-amber-50 text-amber-600 border border-amber-100'
                                                    : 'bg-green-50 text-green-600 border border-green-100'
                                            }`}>
                                                {edu.status}
                                            </span>
                                        </div>

                                        <h3 className={`text-base font-bold mb-1 ${a.text}`}>
                                            {edu.degree}
                                        </h3>
                                        <p className='text-sm text-slate-600 font-medium mb-0.5'>{edu.school}</p>
                                        <p className='text-xs text-slate-400 mb-3'>{edu.university}</p>
                                        <p className='text-sm text-slate-500 leading-relaxed mb-3'>
                                            {edu.description}
                                        </p>

                                        {/* Achievements accordion */}
                                        <div className={`overflow-hidden transition-all duration-300 ${expanded === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className='flex flex-wrap gap-2 pt-3 border-t border-slate-100'>
                                                {edu.achievements.map((ach, i) => (
                                                    <span key={i} className={`text-xs px-3 py-1 rounded-full font-medium ${a.pill}`}>
                                                        {ach}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-1.5 mt-3 text-xs text-slate-400'>
                                            <svg className={`w-3 h-3 transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            {expanded === index ? 'Hide details' : 'Show details'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <h3 className='text-xl font-bold text-slate-800 mb-6 text-center'>
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert, i) => (
                            <div key={i} className={`flex items-center gap-4 border rounded-2xl p-5 ${cert.color} transition-all duration-200 hover:shadow-md`}>
                                <div className='text-2xl flex-shrink-0'>{cert.icon}</div>
                                <div>
                                    <p className='font-semibold text-sm'>{cert.name}</p>
                                    <p className='text-xs opacity-70 mt-0.5'>{cert.issuer}</p>
                                </div>
                                <div className='ml-auto'>
                                    <div className='w-6 h-6 bg-white/60 rounded-full flex items-center justify-center'>
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
