import React, { useRef } from 'react'

const ResumePage = () => {
    const resumeRef = useRef(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-8 px-4 print:bg-white print:p-0 print:m-0">
            {/* Print / Download Button — hidden on print */}
            <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
                <a href="/" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Portfolio
                </a>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download / Print PDF
                </button>
            </div>

            {/* Resume Paper */}
            <div
                ref={resumeRef}
                className="max-w-4xl mx-auto bg-white shadow-xl print:shadow-none"
                style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
            >
                {/* ── HEADER ── */}
                <div className="bg-indigo-700 text-white px-10 py-8 print:px-8 print:py-6">
                    <h1 className="text-3xl font-bold tracking-tight mb-1">SHAIK RAHIL AHMED</h1>
                    <p className="text-indigo-200 text-sm font-medium mb-4">
                        B.Tech AI & ML · Full Stack Developer · AI Enthusiast
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-indigo-100">
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Hyderabad, Telangana
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            (+91) 8790216891
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            rahil.ahmed.sk@gmail.com
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            linkedin.com/in/shaik-rahil-99533533b
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            github.com/shaikRahilAhmed
                        </span>
                    </div>
                </div>

                {/* ── BODY ── */}
                <div className="px-10 py-8 print:px-8 print:py-6 space-y-7 text-slate-800">

                    {/* PROFESSIONAL SUMMARY */}
                    <section>
                        <SectionTitle>Professional Summary</SectionTitle>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">
                            B.Tech Artificial Intelligence and Machine Learning student with hands-on experience in full-stack
                            development and machine learning applications. Proficient in building end-to-end data-driven systems
                            using modern web technologies and AI models. Strong foundation in Java, Python, and JavaScript with
                            practical exposure to model deployment, analytics dashboards, and real-world problem solving.
                            A highly analytical and adaptable individual, eager to contribute to innovative software development teams.
                        </p>
                    </section>

                    {/* SKILLS */}
                    <section>
                        <SectionTitle>Skills</SectionTitle>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                            <SkillRow label="Programming" value="Java, Python, JavaScript, SQL" />
                            <SkillRow label="Web Technologies" value="HTML, CSS, React, TailwindCSS, Node.js, Express" />
                            <SkillRow label="Tools" value="Git, GitHub, VSCode, IntelliJ IDEA, Jupyter Notebook" />
                            <SkillRow label="Soft Skills" value="Communication, Analytical Thinking, Problem Solving, Team Collaboration, Adaptability" />
                        </div>
                    </section>

                    {/* EXPERIENCE */}
                    <section>
                        <SectionTitle>Experience</SectionTitle>
                        <div className="mt-3 space-y-5">
                            <ExperienceBlock
                                role="Operations Lead"
                                company="GrowAthlete | T-Hub, Hyderabad"
                                period="Aug 2026 – Nov 2026"
                                points={[
                                    "Analyzed operational and athlete engagement data to identify trends and drive performance improvements.",
                                    "Designed structured tracking reports and dashboards to support data-driven decision-making across teams.",
                                    "Identified workflow bottlenecks through data observation and contributed to process optimization in a startup environment.",
                                ]}
                            />
                            <ExperienceBlock
                                role="Web Developer Intern"
                                company="Zidio Development | Remote"
                                period="April 2025 – July 2025"
                                points={[
                                    "Built responsive, data-driven web applications using JavaScript, Node.js, and MongoDB for dynamic data handling.",
                                    "Managed structured data flows between frontend interfaces and databases, improving data reliability and performance.",
                                ]}
                            />
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section>
                        <SectionTitle>Projects</SectionTitle>
                        <div className="mt-3 space-y-5">
                            <ProjectBlock
                                name="NutriSync – Health & Fitness Dashboard"
                                tech="React, Tailwind, Node.js, Express, SupaBase, AI API"
                                year="2025"
                                link="github.com/shaikRahilAhmed/NutriSync07"
                                points={[
                                    "Built an end-to-end AI-driven health dashboard using custom nutrition models for Indian food datasets, enabling accurate calorie and diet pattern analysis.",
                                    "Engineered dynamic dashboards with interactive visualizations to track user fitness metrics and improve data interpretability.",
                                    "Developed personalized recommendation logic based on user inputs and health goals, increasing application usability and engagement.",
                                ]}
                            />
                            <ProjectBlock
                                name="SnapSpend – Spending Analytics Dashboard"
                                tech="TypeScript, Vite, Tailwind, Node.js, MongoDB, AI API"
                                year="2026"
                                link="github.com/shaikRahilAhmed/snaSpend"
                                points={[
                                    "Developed a full-stack financial management application with AI-powered expense categorization and real-time tracking.",
                                    "Implemented interactive dashboards and visual analytics to provide actionable insights for smarter budgeting decisions.",
                                    "Designed intelligent expense classification logic to automate categorization and improve financial data accuracy.",
                                ]}
                            />
                            <ProjectBlock
                                name="Age & Gender Classification – CNN / Machine Learning"
                                tech="Python, Pandas, CNN, HTML, CSS"
                                year="2024"
                                link="github.com/shaikRahilAhmed"
                                points={[
                                    "Built a machine learning pipeline using Python and Pandas, including data preprocessing, model training, and performance evaluation.",
                                    "Developed a CNN-based classification model to predict age and gender from images with optimized accuracy.",
                                    "Implemented data cleaning and feature extraction techniques to improve model performance and reliability.",
                                ]}
                            />
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section>
                        <SectionTitle>Education</SectionTitle>
                        <div className="mt-3 space-y-3">
                            <EduBlock
                                degree="B.Tech – Artificial Intelligence and Machine Learning"
                                school="St. Martin's Engineering College | Jawaharlal Nehru Technological University, Hyderabad"
                                period="2022 – 2026"
                                detail="CGPA: 7.18"
                            />
                            <EduBlock
                                degree="Class XII – State Board (Telangana)"
                                school="Narayana Junior College"
                                period="2021 – 2022"
                                detail="75%"
                            />
                            <EduBlock
                                degree="Class X – State Board (Telangana)"
                                school="Buds and Flowers High School"
                                period="2020"
                                detail="CGPA: 9.2"
                            />
                        </div>
                    </section>

                    {/* CERTIFICATIONS */}
                    <section>
                        <SectionTitle>Certifications</SectionTitle>
                        <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-500 mt-0.5">▸</span>
                                <span><span className="font-medium text-slate-700">Full Stack & AI Course</span> – Intellipaat (IIT Roorkee)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-500 mt-0.5">▸</span>
                                <span><span className="font-medium text-slate-700">Web Development</span> – Apna College</span>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>

            {/* Print styles */}
            <style>{`
                @media print {
                    @page { margin: 0; size: A4; }
                    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                    .print\\:hidden { display: none !important; }
                }
            `}</style>
        </div>
    )
}

/* ── Small reusable pieces ── */

const SectionTitle = ({ children }) => (
    <div className="flex items-center gap-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">{children}</h2>
        <div className="flex-1 h-px bg-indigo-100"></div>
    </div>
)

const SkillRow = ({ label, value }) => (
    <div className="flex gap-2 text-sm">
        <span className="font-semibold text-slate-700 whitespace-nowrap">{label}:</span>
        <span className="text-slate-600">{value}</span>
    </div>
)

const ExperienceBlock = ({ role, company, period, points }) => (
    <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <div>
                <span className="font-semibold text-slate-800 text-sm">{role}</span>
                <span className="text-slate-500 text-sm"> | {company}</span>
            </div>
            <span className="text-xs text-slate-500 font-medium italic">{period}</span>
        </div>
        <ul className="space-y-1">
            {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span>
                    {p}
                </li>
            ))}
        </ul>
    </div>
)

const ProjectBlock = ({ name, tech, year, link, points }) => (
    <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-0.5">
            <span className="font-semibold text-slate-800 text-sm">{name}</span>
            <span className="text-xs text-slate-500 italic">{year}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-1.5">
            <span className="text-xs text-indigo-600 font-medium">{tech}</span>
            <span className="text-xs text-slate-400">{link}</span>
        </div>
        <ul className="space-y-1">
            {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span>
                    {p}
                </li>
            ))}
        </ul>
    </div>
)

const EduBlock = ({ degree, school, period, detail }) => (
    <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
            <span className="font-semibold text-slate-800 text-sm">{degree}</span>
            <span className="text-slate-500 text-xs block mt-0.5">{school}</span>
        </div>
        <div className="text-right">
            <span className="text-xs font-medium text-indigo-600 block">{detail}</span>
            <span className="text-xs text-slate-500 italic">{period}</span>
        </div>
    </div>
)

export default ResumePage
