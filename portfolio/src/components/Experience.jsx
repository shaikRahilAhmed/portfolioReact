import React from 'react'

const experienceData = [
    {
        role: "Operations Lead",
        company: "GrowAthlete",
        location: "T-Hub, Hyderabad",
        period: "Aug 2026 – Nov 2026",
        type: "Full-time",
        description: "Worked at a sports-tech startup at T-Hub Hyderabad, driving data-backed operational improvements.",
        points: [
            "Analyzed operational and athlete engagement data to identify trends and drive performance improvements.",
            "Designed structured tracking reports and dashboards to support data-driven decision-making across teams.",
            "Identified workflow bottlenecks through data observation and contributed to process optimization in a startup environment."
        ],
        accent: "indigo",
        icon: "📊"
    },
    {
        role: "Web Developer Intern",
        company: "Zidio Development",
        location: "Remote",
        period: "April 2025 – July 2025",
        type: "Internship",
        description: "Built and maintained full-stack web applications during a 3-month remote internship.",
        points: [
            "Built responsive, data-driven web applications using JavaScript, Node.js, and MongoDB for dynamic data handling.",
            "Managed structured data flows between frontend interfaces and databases, improving data reliability and performance."
        ],
        accent: "teal",
        icon: "💻"
    }
];

const accentMap = {
    indigo: {
        badge:  "bg-indigo-50 text-indigo-600 border-indigo-100",
        dot:    "bg-indigo-500 border-indigo-200",
        type:   "bg-indigo-50 text-indigo-600",
        bullet: "bg-indigo-400",
        hover:  "hover:border-indigo-200",
    },
    teal: {
        badge:  "bg-teal-50 text-teal-600 border-teal-100",
        dot:    "bg-teal-500 border-teal-200",
        type:   "bg-teal-50 text-teal-600",
        bullet: "bg-teal-400",
        hover:  "hover:border-teal-200",
    }
};

const Experience = () => {
    return (
        <div className='bg-white py-24 relative overflow-hidden' id='experience'>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none"></div>

            <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10'>
                {/* Header */}
                <div className="text-center mb-14">
                    <span className='inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4'>
                        Work History
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
                        Experience
                    </h2>
                    <p className="text-base text-slate-500 max-w-xl mx-auto">
                        Hands-on roles where I applied technical skills and contributed to real teams.
                    </p>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 to-teal-200"></div>

                    <div className='space-y-8'>
                        {experienceData.map((exp, index) => {
                            const a = accentMap[exp.accent];
                            return (
                                <div key={index} className='relative pl-16'>
                                    {/* Timeline dot */}
                                    <div className={`absolute left-3 top-6 w-7 h-7 rounded-full border-2 ${a.dot} bg-white flex items-center justify-center text-sm z-10`}>
                                        {exp.icon}
                                    </div>

                                    <div className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${a.hover}`}>
                                        {/* Header row */}
                                        <div className='flex flex-wrap items-start justify-between gap-3 mb-4'>
                                            <div>
                                                <h3 className='text-lg font-bold text-slate-800'>
                                                    {exp.role}
                                                </h3>
                                                <p className='text-sm font-semibold text-slate-500 mt-0.5'>
                                                    {exp.company}
                                                    <span className='font-normal text-slate-400'> · {exp.location}</span>
                                                </p>
                                            </div>
                                            <div className='flex flex-col items-end gap-1.5'>
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${a.badge}`}>
                                                    {exp.period}
                                                </span>
                                                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${a.type}`}>
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        <p className='text-sm text-slate-500 mb-4 leading-relaxed'>
                                            {exp.description}
                                        </p>

                                        {/* Bullet points */}
                                        <ul className='space-y-2.5'>
                                            {exp.points.map((point, i) => (
                                                <li key={i} className='flex items-start gap-3 text-sm text-slate-600 leading-relaxed'>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${a.bullet} mt-1.5 flex-shrink-0`}></div>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
