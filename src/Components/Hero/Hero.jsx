import React from 'react';
import banner from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className="flex flex-col  items-center justify-between mx-auto p-5">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">
                    We Build <br />
                    <span className="text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive
                    </span> Apps
                </h1>
                <p className="p-5">
                    At App store, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>


            <div className="flex-1 flex justify-center mt-5 lg:mt-0">
                <img src={banner} alt="Hero Banner" className="max-w-full h-auto" />

            </div>
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-[1200px] w-full h-[410px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold mb-10 text-center">
                        Trusted by Millions, Built for You
                    </h1>

                    {/* Stats */}
                    <ul className="flex flex-col md:flex-row justify-around w-full">
                        <li className="flex flex-col items-center mb-6 md:mb-0">
                            <h4 className="text-lg font-medium">Total Downloads</h4>
                            <h1 className="text-3xl font-bold mt-2">29.6M</h1>
                            <p className="text-sm mt-1">21% More Than Last Month</p>
                        </li>
                        <li className="flex flex-col items-center mb-6 md:mb-0">
                            <h4 className="text-lg font-medium">Active Users</h4>
                            <h1 className="text-3xl font-bold mt-2">1.2M</h1>
                            <p className="text-sm mt-1">15% Growth</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <h4 className="text-lg font-medium">Total Reviews</h4>
                            <h1 className="text-3xl font-bold mt-2">85K</h1>
                            <p className="text-sm mt-1">10% More Than Last Month</p>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Hero;
