import React, { useState } from 'react'
import EmailId from '../assets/emailLogo.webp'
import Linkedin from '../assets/linkedinLogo.webp'
import GitHub from '../assets/githubLogo.png'
import Instagram from '../assets/instagramLogo.webp'
import HelloLogo from '../assets/HelloLogo.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shaik-rahil-99533533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            icon: Linkedin,
            color: 'hover:text-blue-400',
            bgColor: 'group-hover:bg-blue-500/20'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/shaikRahilAhmed',
            icon: GitHub,
            color: 'hover:text-gray-300',
            bgColor: 'group-hover:bg-gray-500/20'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/_shaik_rahil7_/profilecard/?igsh=bDN4djRrdGp4MTNj',
            icon: Instagram,
            color: 'hover:text-pink-400',
            bgColor: 'group-hover:bg-pink-500/20'
        },
        {
            name: 'Email',
            url: 'mailto:rahil.ahmed.sk@gmail.com',
            icon: EmailId,
            color: 'hover:text-green-400',
            bgColor: 'group-hover:bg-green-500/20',
            label: 'rahil.ahmed.sk@gmail.com'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
            alert('Message sent successfully!');
        }, 2000);
    };

    return (
        <div className='bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white py-20 relative overflow-hidden' id='contact'>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow"></div>
            </div>

            <div className='container mx-auto px-8 md:px-16 lg:px-24 relative z-10'>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent'>
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className='flex flex-col lg:flex-row items-start justify-between gap-16'>
                    {/* Contact Info & Social Links */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Let's Talk 🚀
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                                or simply chat about the latest in web development and AI. Drop me a message!
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url} 
                                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${social.bgColor}`}
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                >
                                    <div className="relative">
                                        <img src={social.icon} alt={social.name} className='w-12 h-12 rounded-lg' />
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="flex-1">
                                        <span className={`text-lg font-semibold ${social.color} transition-colors duration-300`}>
                                            {social.name}
                                        </span>
                                        {social.label && (
                                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                                                {social.label}
                                            </p>
                                        )}
                                    </div>
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Hello Animation */}
                        <div className="flex justify-center lg:justify-start mt-12">
                            <div className="relative">
                                <img
                                    src={HelloLogo}
                                    alt="Hello Animation"
                                    className="w-64 md:w-80 animate-float filter drop-shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Send Me a Message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-500"
                                        />
                                    </div>
                                    <div className="group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email"
                                            required
                                            className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-500"
                                        />
                                    </div>
                                </div>
                                
                                <div className="group">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-gray-500"
                                    />
                                </div>
                                
                                <div className="group">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows="5"
                                        required
                                        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none group-hover:border-gray-500"
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 ${
                                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-green-500 hover:to-blue-600'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Message 📧'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(2deg); }
                    66% { transform: translateY(5px) rotate(-1deg); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 30s linear infinite; }
            `}</style>
        </div>
    )
}

export default Contact