import React, { useState, useEffect } from 'react'
import HeroImage from '../assets/rahilimg.jpg'

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Tech Innovator'];

    useEffect(() => {
        const currentRole = roles[currentIndex];
        let charIndex = 0;

        const typeWriter = setInterval(() => {
            if (charIndex < currentRole.length) {
                setDisplayText(currentRole.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeWriter);
                setTimeout(() => {
                    const deleteInterval = setInterval(() => {
                        if (charIndex > 0) {
                            setDisplayText(currentRole.slice(0, charIndex - 1));
                            charIndex--;
                        } else {
                            clearInterval(deleteInterval);
                            setCurrentIndex((prev) => (prev + 1) % roles.length);
                        }
                    }, 80);
                }, 2000);
            }
        }, 120);

        return () => clearInterval(typeWriter);
    }, [currentIndex]);

    return (
        <div className='bg-gradient-to-br from-slate-50 via-white to-indigo-50 min-h-screen flex items-center justify-center relative overflow-hidden pt-20' id='home'>
            {/* Subtle background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10'>
                <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-24'>
                    {/* Text Content */}
                    <div className='flex-1 text-center lg:text-left order-2 lg:order-1'>
                        <div className='inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                            <span className='w-2 h-2 bg-indigo-500 rounded-full animate-pulse'></span>
                            Available for opportunities
                        </div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4'>
                            Hi, I'm{' '}
                            <span className='text-indigo-600'>Shaik Rahil</span>
                        </h1>

                        <div className='h-14 flex items-center justify-center lg:justify-start mb-6'>
                            <p className='text-xl md:text-2xl text-slate-500 font-medium'>
                                <span className='text-teal-600 font-semibold'>{displayText}</span>
                                <span className='animate-blink text-indigo-500 font-light'>|</span>
                            </p>
                        </div>

                        <p className='text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10'>
                            I craft modern, responsive web applications with cutting-edge technologies.
                            Passionate about turning complex problems into elegant digital solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <a
                                href="#projects"
                                className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 text-center'
                            >
                                View My Work
                            </a>
                            <a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='border-2 border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2'
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                View Resume
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center gap-4 mt-10 justify-center lg:justify-start'>
                            <span className='text-sm text-slate-400'>Find me on</span>
                            <a
                                href="https://github.com/shaikRahilAhmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all duration-200'
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shaik-rahil-99533533b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all duration-200'
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a
                                href="mailto:rahil.ahmed.sk@gmail.com"
                                className='w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 hover:shadow-md transition-all duration-200'
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className='order-1 lg:order-2 flex-shrink-0'>
                        <div className='relative'>
                            <div className='absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-300 via-teal-200 to-purple-300 opacity-70 blur-sm'></div>
                            <img
                                src={HeroImage}
                                alt="Shaik Rahil Ahmed"
                                className='relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-2xl'
                            />
                            {/* Floating badge — hidden on very small to avoid overflow */}
                            <div className='hidden sm:block absolute -bottom-3 -right-3 bg-white border border-slate-100 shadow-lg rounded-2xl px-3 py-2 text-center'>
                                <p className='text-xs text-slate-400 font-medium'>B.Tech</p>
                                <p className='text-sm text-indigo-600 font-bold'>AI & ML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                }
                .animate-blink { animation: blink 1s infinite; }
            `}</style>
        </div>
    )
}

export default Hero
