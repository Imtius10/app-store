import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { VscGithub } from "react-icons/vsc";
import { Link } from 'react-router';

const Navbar = () => {
    const [active, setActive] = useState("home");
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li>
                            <a>App</a>
                        </li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
               <Link to='/'><div className='flex gap-2'>
                    <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                    <h1 className="text-2xl font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        App Store
                    </h1>

                </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a onClick={()=>setActive("home")} className={active==="home"?"text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]":''}>Home</a></li></Link>
                    <Link to='/appdata'><li><a onClick={()=>setActive("app")} className={active==="app"?"text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]":''}>App</a></li></Link>
                    <li><a onClick={()=>setActive("intsallation")} className={active==="intsallation"?"text-1xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-[#632EE3]":''}>Installattion</a></li>
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
    );
};

export default Navbar;