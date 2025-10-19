import React from 'react';
import ShowFontData from '../ShowFontData/ShowFontData';
import { Link } from 'react-router';
import AppStore from '../../Pages/AppStore/AppStore';


const FontData = ({ dt }) => {
    const sliceData = dt ? dt.slice(0, 8) : [];
    console.log(dt)
    return (
        <div>
            <div className='w-[1250px] h-[104px] m-5'>
             <h1 className='text-3xl font-bold m-5'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
           
                  <div className='grid grid-cols-1  justify-center md:grid-cols-4'>
                {
                    sliceData.map(single => <ShowFontData key={single.id} single={single} />)
                }
            </div>
            
            <Link to='/appdata'> <button className='btn btn-primary m-6'>Show All</button></Link>
           
            
        </div>
    );
};

export default FontData;