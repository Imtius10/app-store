import React from 'react';
import Home from '../../Home/Home';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { RotateLoader } from 'react-spinners';

const Root = () => {
   const navigation = useNavigation();
   
 console.log(navigation)
    return (
        <div className=' flex flex-col min-h-screen max-w-8xl mx-auto'>
            <Navbar></Navbar>
            <div className='flex-grow'>
            {
                    navigation.state === "loading" ? (<div className='flex justify-center items-center min-h-screen'><RotateLoader /></div>
) :
                 
                    (

                    <Outlet></Outlet>
                )
            }
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;