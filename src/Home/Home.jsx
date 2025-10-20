import React from 'react';
import Hero from '../Components/Hero/Hero';
import { useLoaderData } from 'react-router';
import FontData from '../Components/Fontdata/FontData';
import AppStore from '../Pages/AppStore/AppStore';
import AppData from '../Pages/AppData/AppData';
import ShowInstall from '../Pages/ShowInstallapp/ShowInstall';
import InstallApp from '../Pages/IntsallApp/InstallApp';


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Hero></Hero>
            <FontData dt={data}></FontData>
           
            
        </div>
    );
};

export default Home;