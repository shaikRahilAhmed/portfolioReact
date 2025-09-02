import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home", icon: "🏠" },
        { href: "#about", label: "About", icon: "👨‍💻" },
        { href: "#education", label: "Education", icon: "🎓" },
        { href: "#projects", label: "Projects", icon: "💼" },
        { href: "#contact", label: "Contact", icon: "📧" }
    ];

    const handleNavClick = (href) => {
        setActiveSection(href.slice(1));
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-black/90 backdrop-blur-lg shadow-2xl py-2' 
                    : 'bg-transparent py-4'
            }`}>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <div className='flex justify-between items-center'>
                        {/* Logo */}
                        <div className='group cursor-pointer'>
                            <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300'>
                                Shaik Rahil
                            </h1>
                            <div className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex space-x-8'>
                            {navItems.map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.href} 
                                    onClick={() => handleNavClick(item.href)}
                                    className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                                        activeSection === item.href.slice(1)
                                            ? 'text-white bg-gradient-to-r from-green-400/20 to-blue-500/20'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    <span className="hidden lg:inline mr-2">{item.icon}</span>
                                    {item.label}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                                        activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></div>
                                </a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <a 
                            href="https://shaikrahilahmed.github.io/Rahil-s-profileCard/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hidden lg:block group relative bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 overflow-hidden'
                        >
                            <span className="relative z-10">Let's Connect</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='md:hidden relative w-8 h-8 flex flex-col justify-center items-center group'
                        >
                            <div className={`w-6 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${
                                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}></div>
                            <div className={`w-6 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 transition-all duration-300 ${
                                isMobileMenuOpen ? 'opacity-0' : ''
                            }`}></div>
                            <div className={`w-6 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mt-1.5 transition-all duration-300 ${
                                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="flex flex-col justify-center items-center h-full space-y-8">
                    {navItems.map((item, index) => (
                        <a 
                            key={index}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`group flex items-center space-x-4 text-2xl font-semibold transition-all duration-300 transform ${
                                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                            </span>
                            <span className={`bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300 ${
                                activeSection === item.href.slice(1) ? 'from-green-400 to-blue-500' : ''
                            }`}>
                                {item.label}
                            </span>
                        </a>
                    ))}
                    
                    <button className='mt-8 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                        Let's Connect
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
            `}</style>
        </>
    )
}

export default Navbar