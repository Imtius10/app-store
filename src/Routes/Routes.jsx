import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Home/Home';
import Root from '../Components/Root/Root';

const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
               index:true,
               Component:Home
            }
        ]
    }
])

export default router;