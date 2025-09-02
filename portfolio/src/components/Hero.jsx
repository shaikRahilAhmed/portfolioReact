import React, { useState, useEffect } from 'react'
import HeroImage from '../assets/rahilimg.jpg'
import ResumePDF from '../assets/ShaikRahilAhmedResume.pdf'

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
                    }, 100);
                }, 2000);
            }
        }, 150);

        return () => clearInterval(typeWriter);
    }, [currentIndex]);

    return (
        <div className='bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden pt-20' id='home'>
            {/* Animated background particles */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-green-500/30 rotate-45 animate-bounce-slow"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg animate-float"></div>
            </div>

            <div className='container mx-auto px-8 md:px-16 lg:px-24 text-center relative z-10'>
                {/* Profile Image */}
                <div className="relative mb-12 group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                    <img 
                        src={HeroImage} 
                        alt="Shaik Rahil"
                        className='relative mx-auto w-56 h-56 md:w-64 md:h-64 rounded-full object-cover transform transition-all duration-500 hover:scale-110 shadow-2xl border-4 border-white/10' 
                    />
                </div>

                {/* Main heading */}
                <div className="space-y-6 mb-12">
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                        <span className="block mb-4">Hi, I'm</span>
                        <span className='block bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x'>
                            Shaik Rahil
                        </span>
                    </h1>
                    
                    <div className="h-16 flex items-center justify-center">
                        <p className='text-2xl md:text-3xl text-gray-300 font-light'>
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                {displayText}
                            </span>
                            <span className="animate-blink text-green-400">|</span>
                        </p>
                    </div>
                    
                    <p className='text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
                        I craft modern, responsive web applications with cutting-edge technologies. 
                        Passionate about turning complex problems into elegant digital solutions.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                    
                    <a 
    href={ResumePDF}
    download="Shaik_Rahil_Resume.pdf"
    className='group relative border-2 border-transparent bg-gradient-to-r from-pink-500 to-yellow-500 p-0.5 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25'
>
    <span className="block bg-black px-8 py-3.5 rounded-full text-white font-semibold text-lg group-hover:bg-transparent transition-all duration-300">
        Download Resume
    </span>
</a>
                </div>

              
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-gradient-x { animation: gradient-x 3s ease infinite; }
                .animate-blink { animation: blink 1s infinite; }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
            `}</style>
        </div>
    )
}

export default Hero