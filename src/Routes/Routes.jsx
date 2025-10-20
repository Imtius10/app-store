import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home/Home';
import Root from '../Components/Root/Root';
import AppStore from '../Pages/AppStore/AppStore';
import AppData from '../Pages/AppData/AppData';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstallApp from '../Pages/IntsallApp/InstallApp';
import GlobalError from '../Pages/Errors/GlobalError';

const router=createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <GlobalError></GlobalError>,
           
            
    
        children:[
            {
               index:true,
               loader:()=>fetch('/AppInfo.json'),
               Component:Home
            },
            {
                path:'/appdata',
                loader:()=>fetch('/AppInfo.json'),
                Component:AppData
            },
            {
                path: '/installapp',
                loader: () => fetch('/AppInfo.json'),
                Component: InstallApp
            },
            {
                path: '/appdetails/:id',
                loader:()=>fetch('/AppInfo.json'),
                Component:AppDetails
            }
        ]
    }
])

export default router;