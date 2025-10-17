import React from 'react';
import ShowFontData from '../ShowFontData/ShowFontData';
import { Link } from 'react-router';
import AppStore from '../../Pages/AppStore/AppStore';


const FontData = ({ dt }) => {
    const sliceData = dt ? dt.slice(0, 8) : [];
    console.log(dt)
    return (
        <div>
            <h1>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4'>
                {
                    sliceData.map(single => <ShowFontData key={single.id} single={single} />)
                }
            </div>
            <Link to='/appdata'> <button className='btn btn-primary'>Show All</button></Link>
           
            
        </div>
    );
};

export default FontData;