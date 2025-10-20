import React from 'react';
import err from '../../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center my-16">
                <img src={err} alt="Error 404" className="w-[400px] h-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">OPPS!! APP NOT FOUND</h1>
                <p className="text-gray-600 mb-6">The App you are requesting is not found on our system.  please try another apps</p>
                <Link
                    to='/appdat'
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default AppNotFound;