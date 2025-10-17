import React from 'react';
import AppStore from '../AppStore/AppStore';
import { useLoaderData } from 'react-router';

const AppData = () => {
    const data = useLoaderData()
    
    return (
        <div className='grid grid-cols-4'>
            {
                data.map(singleData => <AppStore key={singleData.id} singleData={singleData} />)
            }
           
        </div>
    );
};

export default AppData;