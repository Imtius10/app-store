import React from 'react';
import Home from '../../Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className=' flex flex-col min-h-screen max-w-8xl mx-auto'>
            <Navbar></Navbar>
            <div className='flex-grow'>
             <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>

    );
};

export default Root;