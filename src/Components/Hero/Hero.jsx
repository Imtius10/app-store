import React from 'react';
import banner from '../../assets/hero.png';
import googleplay from '../../assets/icons8-google-play-store-48.png';
import appstore from '../../assets/icons8-app-store-48.png';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-between mx-auto p-5 max-w-[1200px]">
            <div className="flex flex-col items-center justify-center w-full gap-8">
                <div className="flex-1 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        We Build <br />
                        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            Productive
                        </span>{" "}
                        Apps
                    </h1>

                    <p className="text-sm sm:text-base text-gray-700 mb-6">
                        At App Store, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                    <div className="flex justify-center gap-4 mt-6 flex-wrap ">
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white px-5 py-3 rounded-xl shadow-md transition duration-200"
                        >
                            <img src={googleplay} alt="" className="w-6 h-6" />
                            <div className="text-left leading-tight text-black">
                                <p className="text-[10px] uppercase">Get it on</p>
                                <p className="text-sm font-semibold">Google Play</p>
                            </div>
                        </a>

                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white px-5 py-3 rounded-xl shadow-md transition duration-200"
                        >
                            <img src={appstore} alt="" className="w-6 h-6" />
                            <div className="text-left leading-tight">
                                <p className="text-[10px] uppercase text-black">Download on the</p>
                                <p className="text-sm font-semibold text-black">App Store</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <img
                        src={banner}
                        alt="Hero Banner"
                        className="max-w-full h-auto w-[90%] sm:w-[70%] md:w-[60%] object-contain"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mt-10">
                <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-6 rounded-2xl">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                        Trusted by Millions, Built for You
                    </h1>

                    <ul className="flex flex-col sm:flex-row justify-around items-center w-full gap-6">
                        <li className="flex flex-col items-center">
                            <h4 className="text-lg font-medium">Total Downloads</h4>
                            <h1 className="text-3xl font-bold mt-2">29.6M</h1>
                            <p className="text-sm mt-1 opacity-90">21% More Than Last Month</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <h4 className="text-lg font-medium">Active Users</h4>
                            <h1 className="text-3xl font-bold mt-2">1.2M</h1>
                            <p className="text-sm mt-1 opacity-90">15% Growth</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <h4 className="text-lg font-medium">Total Reviews</h4>
                            <h1 className="text-3xl font-bold mt-2">85K</h1>
                            <p className="text-sm mt-1 opacity-90">10% More Than Last Month</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
