import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp } from '../../Utility/AddToStorage';

const InstallApp = () => {
    const data = useLoaderData()
    const [installedapp,setInstallapp]=useState([])
    useEffect(() => {
        const installapp = getStoreApp()
        const convertedinstallapp = installapp.map(id => parseInt(id))
        const mypp=data.filter(app=>convertedinstallapp.includes(app.id))
        console.log(mypp);
        setInstallapp(mypp)
    })
    return (
        <div>
            <h1 className='text-left'>Install App {installedapp.length}</h1>
        </div>
    );
};

export default InstallApp;