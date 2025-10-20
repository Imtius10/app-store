import React, { useState } from 'react';
import { Link } from 'react-router';
import { VscGithub } from "react-icons/vsc";
import logo from '../../assets/logo.png';
import err from '../../assets/error-404.png';

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

            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"
                        className="fill-current">
                        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456..."></path>
                    </svg>
                    <p>
                        ACME Industries Ltd.<br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current"><path
                                d="M24 4.557c-.883.392-1.832.656-2.828..."></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current"><path
                                d="M19.615 3.184c-3.604-.246-11.631-.245..."></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" className="fill-current"><path
                                d="M9 8h-3v4h3v12h5v-12..."></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default GlobalError;
