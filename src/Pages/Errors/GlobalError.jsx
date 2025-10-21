import React, { useState } from 'react';
import { Link } from 'react-router';
import { VscGithub } from "react-icons/vsc";
import logo from '../../assets/logo.png';
import err from '../../assets/error-404.png';
import { RxTwitterLogo, RxInstagramLogo, RxGithubLogo } from "react-icons/rx";


const GlobalError = () => {
    const [active, setActive] = useState("home");

    return (
        <div className="min-h-screen flex flex-col justify-between">
            
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/appdata">App</Link></li>
                            <li><Link to="/installapp">Installation</Link></li>
                        </ul>
                    </div>

                    <Link to='/'>
                        <div className='flex gap-2 items-center'>
                            <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                App Store
                            </h1>
                        </div>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'><li><a onClick={() => setActive("home")} className={active === "home"
                            ? "text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]"
                            : ''}>Home</a></li></Link>
                        <Link to='/appdata'><li><a onClick={() => setActive("app")} className={active === "app"
                            ? "text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]"
                            : ''}>App</a></li></Link>
                        <Link to='/installapp'><li><a onClick={() => setActive("installation")} className={active === "installation"
                            ? "text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]"
                            : ''}>Installation</a></li></Link>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a
                        href="https://github.com/Imtius10/app-store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
                    >
                        <VscGithub className="text-xl" />
                        Contribute
                    </a>
                </div>
            </div>

            
            <div className="flex flex-col items-center justify-center text-center my-16">
                <img src={err} alt="Error 404" className="w-[400px] h-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
                <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                <Link
                    to="/"
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-full hover:opacity-90 transition"
                >
                    Back to Home
                </Link>
            </div>

           <footer className="bg-neutral text-neutral-content p-6 sm:p-10">
                 <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                   <div className="flex items-center gap-3">
                     <div className="text-3xl font-bold"><img src={logo} alt="" className="w-10 h-10" /></div>
                     <p className="text-sm">
                       <span className="font-bold text-lg">AppStore</span>
                       <br />
                       All your favorite apps in one place
                     </p>
                   </div>
           
                   <div className="flex items-center gap-4">
                     <h5 className="font-semibold">Follow us:</h5>
                     <a
                       href="https://twitter.com/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-2xl hover:text-white transition-colors"
                       aria-label="Twitter"
                     >
                       <RxTwitterLogo />
                     </a>
                     <a
                       href="https://instagram.com/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-2xl hover:text-white transition-colors"
                       aria-label="Instagram"
                     >
                       <RxInstagramLogo />
                     </a>
                     <a
                       href="https://github.com/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-2xl hover:text-white transition-colors"
                       aria-label="GitHub"
                     >
                       <RxGithubLogo />
                     </a>
                   </div>
                 </div>
           
                 <div className="text-center mt-6 text-xs opacity-70">
                   © {new Date().getFullYear()} AppStore — All rights reserved.
                 </div>
               </footer>
        </div>
    );
};

export default GlobalError;
