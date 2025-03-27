import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // Change effect after scrolling
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <HashLink 
                className={`px-4 font-extrabold transition-all duration-300 relative text-[rgb(40,47,69)] 
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
                after:bg-[rgb(40,47,69)] after:transition-all after:duration-300 hover:after:w-full`} 
                to="/#Home"
            >
                Home
            </HashLink>
            <HashLink 
                className={`px-4 font-extrabold transition-all duration-300 relative text-[rgb(40,47,69)] 
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
                after:bg-[rgb(40,47,69)] after:transition-all after:duration-300 hover:after:w-full`} 
                smooth to="/#about"
            >
                About
            </HashLink>
            <HashLink 
                className={`px-4 font-extrabold transition-all duration-300 relative text-[rgb(40,47,69)] 
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] 
                after:bg-[rgb(40,47,69)] after:transition-all after:duration-300 hover:after:w-full`} 
                to="/contact#contact"
            >
                Contact Us
            </HashLink>
            <HashLink 
                className="text-white bg-[rgb(28,30,45)] hover:bg-[rgb(40,47,69)] inline-flex items-center 
                justify-center w-auto px-6 py-3 shadow-xl rounded-xl transition-all duration-500" 
                smooth to="/login"
            >
                Login
            </HashLink>
        </>
    );
}

export default NavLinks;
