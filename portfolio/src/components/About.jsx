import React from 'react'
import AboutImage from '../assets/rahilimg.jpeg'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt=""
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'><p className='text-lg mb-8'>
                        I'm a passionate FUll Stack Developer skilled in building responsive we applications using modern technologies. With expetise in frontend and backend, Ilove turning ideas into scalable solutions. I constantly explore new tools, aiming to craft clean, efficient, and impactful digital experiences.
                    </p>
                        <div className='sapce-y-4'>
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full trandorm transition-transform duration-300 hover:scale-105 w-10/12'></div>
                                </div>
                            </div>
                        </div>


                        <div className='sapce-y-4'>
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React js</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full trandorm transition-transform duration-300 hover:scale-105 w-8/12'></div>
                                </div>
                            </div>
                        </div>

                        <div className='sapce-y-4'>
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Node js</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full trandorm transition-transform duration-300 hover:scale-105 w-5/12'></div>
                                </div>
                            </div>
                        </div>

                        <div className='sapce-y-4'>
                            <div className='flex item-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>GitHub</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full trandorm transition-transform duration-300 hover:scale-105 w-11/12'></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>2+</h3>
                                <p>Years Experience</p>
                            </div>

       
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
                                <p>Projects</p>
                            </div>

                             <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>2+</h3>
                                <p>Years Experience</p>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
