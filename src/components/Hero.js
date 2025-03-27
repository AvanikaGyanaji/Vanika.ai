import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import homeVideo from '../images/home1.mp4';

const Hero = () => {
    return (
        <>
            <div className="hero relative" id="hero">
                {/* Ensure the NavBar is above the video */}
                <div className="nav-links relative z-20">
                    <NavBar />
                </div>

                {/* Background Video */}
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover border-none outline-none -z-10">
                    <source src={homeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 relative z-10" data-aos="zoom-in" id="Home">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h4 className="mb-5 md:text-5xl text-3xl font-bold text-white-500" id="content1">
                                Empowering Anvi with real-time insights and seamless control through an intuitive dashboard.
                            </h4>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-white-500" id="content2">
                                We don't just imagine the future - We build it.
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <Link to="/contact" 
                                className="text-white bg-[rgb(28,30,45)] hover:bg-[rgb(40,47,69)] 
                                inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg 
                                shadow-xl rounded-2xl sm:w-auto sm:mb-0 transition-all duration-300">
                                Learn more
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
