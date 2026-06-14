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
        { href: "#home",       label: "Home" },
        { href: "#about",      label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#education",  label: "Education" },
        { href: "#projects",   label: "Projects" },
        { href: "#contact",    label: "Contact" }
    ];

    const handleNavClick = (href) => {
        setActiveSection(href.slice(1));
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
                    : 'bg-transparent py-5'
            }`}>
                <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24'>
                    <div className='flex justify-between items-center'>
                        {/* Logo */}
                        <div className='cursor-pointer'>
                            <h1 className='text-xl md:text-2xl font-bold text-slate-800'>
                                Shaik<span className='text-indigo-600'>Rahil</span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center space-x-1'>
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        activeSection === item.href.slice(1)
                                            ? 'text-indigo-600 bg-indigo-50'
                                            : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://github.com/shaikRahilAhmed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hidden lg:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200'
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors'
                            aria-label="Toggle menu"
                        >
                            <div className={`w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`w-5 h-0.5 bg-slate-700 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-5 h-0.5 bg-slate-700 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-40 md:hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="flex flex-col justify-center items-center h-full space-y-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`text-2xl font-semibold transition-all duration-200 ${
                                activeSection === item.href.slice(1)
                                    ? 'text-indigo-600'
                                    : 'text-slate-700 hover:text-indigo-600'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/shaikRahilAhmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='mt-4 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
