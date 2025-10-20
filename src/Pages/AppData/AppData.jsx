import React, { useState } from 'react';
import AppStore from '../AppStore/AppStore';
import { Link, useLoaderData } from 'react-router';
import AppNotFound from '../../Components/AppNotFound/AppNotFound';

const AppData = () => {
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    

    const filteredData = data.filter(app =>
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
       
            <div className="ml-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 mt-10 gap-4">
                    <h2 className="text-xl font-semibold">
                        Total Apps: {filteredData.length}
                    </h2>

                    <div className="relative w-full md:w-80">

                        <input
                            type="text"
                            placeholder="Search apps..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:border-transparent transition"
                        />
                    </div>
                </div>

            {
                filteredData.length === 0 ? (<AppNotFound></AppNotFound>): (<div className = 'grid grid-cols-1 justify-center md:grid-cols-4 gap-4'>
                    {
                        filteredData.map(singleData => (
            <AppStore key={singleData.id} singleData={singleData} />
            ))
                    }
        </div>)
            }
          
                
            
            </div>
       
       
            
    );
};

export default AppData;
