import React from 'react'
import EmailId from '../assets/emailLogo.webp'
import Linkedin from '../assets/linkedinLogo.webp'
import GitHub from '../assets/githubLogo.png'
import Instagram from '../assets/instagramLogo.webp'
import HelloLogo from '../assets/HelloLogo.png'

const Contact = () => {
    return (
        <div className='bg-black text-white py-40' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                
                <h2 className='text-4xl font-bold text-center mb-16 text-white bg-clip-text text-transparent'>
                    Connect With Me
                </h2>

                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-20'>
                    
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-4">Let’s Talk 🚀</h3>
                        <p className="text-gray-400 max-w-md mb-8">
                            I'm open to discussing web development projects, freelance opportunities, or potential collaborations.
                        </p>

                        <div className="space-y-6">
                            <a href='https://www.linkedin.com/in/shaik-rahil-99533533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='flex items-center gap-3 group'>
                                <img src={Linkedin} alt="LinkedIn" className='w-10 h-10' />
                                <span className="group-hover:text-green-400 transition duration-300">LinkedIn</span>
                            </a>

                            <a href='https://github.com/shaikRahilAhmed' className='flex items-center gap-3 group'>
                                <img src={GitHub} alt="GitHub" className='w-10 h-10' />
                                <span className="group-hover:text-green-400 transition duration-300">GitHub</span>
                            </a>

                            <a href='https://www.instagram.com/_shaik_rahil7_/profilecard/?igsh=bDN4djRrdGp4MTNj' className='flex items-center gap-3 group'>
                                <img src={Instagram} alt="Instagram" className='w-11 h-11' />
                                <span className="group-hover:text-green-400 transition duration-300">Instagram</span>
                            </a>

                            <a href='mailto:rahil.ahmed.sk@gmail.com' className='flex items-center gap-3 group'>
                                <img src={EmailId} alt="Email" className='w-10 h-10' />
                                <span className="group-hover:text-green-400 transition duration-300">
                                    rahil.ahmed.sk@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src={HelloLogo}
                            alt="Hello Logo"
                            className="w-72 md:w-96 animate-bounce-slow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
