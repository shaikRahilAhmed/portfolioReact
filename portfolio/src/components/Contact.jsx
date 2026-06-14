import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────
//  EMAILJS CONFIG — fill these in after signup
//  1. Go to https://www.emailjs.com and sign up (free)
//  2. Add an Email Service (Gmail) → copy Service ID
//  3. Create a Template → copy Template ID
//     Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//  4. Go to Account → API Keys → copy Public Key
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_9mk3s3p'
const EMAILJS_TEMPLATE_ID = 'template_azg5bbr'
const EMAILJS_PUBLIC_KEY  = 'yBd0lPsGd9kjm5a05'

const Contact = () => {
    const formRef = useRef(null)
    const [formData, setFormData] = useState({ from_name: '', from_email: '', subject: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const contactInfo = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: "rahil.ahmed.sk@gmail.com",
            href: "mailto:rahil.ahmed.sk@gmail.com",
            color: "text-teal-600 bg-teal-50"
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            label: "LinkedIn",
            value: "shaik-rahil-99533533b",
            href: "https://www.linkedin.com/in/shaik-rahil-99533533b",
            color: "text-blue-600 bg-blue-50"
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            label: "GitHub",
            value: "shaikRahilAhmed",
            href: "https://github.com/shaikRahilAhmed",
            color: "text-slate-700 bg-slate-100"
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            label: "Instagram",
            value: "_shaik_rahil7_",
            href: "https://www.instagram.com/_shaik_rahil7_/",
            color: "text-pink-600 bg-pink-50"
        }
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formRef.current,
            EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('success')
            setFormData({ from_name: '', from_email: '', subject: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)
        })
        .catch((err) => {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        })
    }

    return (
        <div className='bg-slate-50 py-24 relative overflow-hidden' id='contact'>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-50 to-transparent pointer-events-none"></div>

            <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10'>
                {/* Header */}
                <div className="text-center mb-14">
                    <span className='inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4'>
                        Get In Touch
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
                        Let's Connect
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-6"></div>
                </div>

                <div className='flex flex-col lg:flex-row gap-12 items-start'>
                    {/* Left: contact cards */}
                    <div className="lg:w-2/5 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Open to <span className='text-indigo-600'>opportunities</span>
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                I'm always excited to discuss new projects, internship opportunities,
                                or collaborations in web development and AI. Drop me a message and
                                I'll reply directly to your email!
                            </p>
                        </div>

                        <div className='space-y-3'>
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className='flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group'
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${info.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                        {info.icon}
                                    </div>
                                    <div className='min-w-0'>
                                        <p className='text-xs text-slate-400 font-medium'>{info.label}</p>
                                        <p className='text-sm font-semibold text-slate-700 truncate group-hover:text-indigo-600 transition-colors duration-200'>
                                            {info.value}
                                        </p>
                                    </div>
                                    <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className='bg-white border border-slate-100 rounded-xl p-4 flex items-center gap-3'>
                            <div className='w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center flex-shrink-0'>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-xs text-slate-400 font-medium'>Location</p>
                                <p className='text-sm font-semibold text-slate-700'>Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="lg:w-3/5 w-full">
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Send a Message</h3>
                            <p className='text-sm text-slate-400 mb-6'>
                                Your message lands directly in my inbox at{' '}
                                <span className='text-indigo-500 font-medium'>rahil.ahmed.sk@gmail.com</span>
                            </p>

                            {/* Status banners */}
                            {status === 'success' && (
                                <div className='flex items-center gap-3 bg-green-50 border border-green-100 text-green-700 rounded-xl px-4 py-3 mb-6 text-sm font-medium'>
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className='flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 rounded-xl px-4 py-3 mb-6 text-sm font-medium'>
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Something went wrong. Please email me directly at rahil.ahmed.sk@gmail.com
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className='block text-sm font-medium text-slate-600 mb-1.5'>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-slate-600 mb-1.5'>
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-slate-600 mb-1.5'>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project collaboration, Internship inquiry..."
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-medium text-slate-600 mb-1.5'>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or how I can help..."
                                        rows="5"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                                        status === 'sending'
                                            ? 'opacity-70 cursor-not-allowed'
                                            : 'hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5'
                                    }`}
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
