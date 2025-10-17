import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home/Home';
import Root from '../Components/Root/Root';
import AppStore from '../Pages/AppStore/AppStore';
import AppData from '../Pages/AppData/AppData';

const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
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
            }
        ]
    }
])

export default router;