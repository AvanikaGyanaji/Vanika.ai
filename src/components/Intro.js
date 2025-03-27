import React from 'react';
import img from '../images/service4.png';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-[#1c1e2d]-900 font-bold">Revolutionizing Robotics for the Next Generation
                            </h3>
                            <div>
                                <p className='my-3 text-xl text-[#282f45]-600 font-semibold'>Welcome to the ultimate robotics innovation hub, where ideas turn into reality. Whether you're a hobbyist, a researcher, or an industry expert, our platform provides everything you need to design, simulate, code, and control robots effortlessly</p>
                            </div>
                
                            <Link to="/contact" className="text-white bg-[#1c1e2d] hover:bg-[#282f45] inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group transition-all duration-300">
                                Contact us
                                <svg 
                                    className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-all duration-300" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                    fillRule="evenodd" 
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                                    clipRule="evenodd"
                                    />
                                </svg>
                            </Link>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;