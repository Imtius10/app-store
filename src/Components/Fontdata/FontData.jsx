import React from "react";
import ShowFontData from "../ShowFontData/ShowFontData";
import { Link } from "react-router";

const FontData = ({ dt }) => {
    const sliceData = dt ? dt.slice(0, 8) : [];

    return (
        <div className="w-full flex flex-col items-center text-center py-8">
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
                <p className="text-gray-400">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
                {sliceData.map((single) => (
                    <ShowFontData key={single.id} single={single} />
                ))}
            </div>

            <Link to="/appdata">
                <button className="btn btn-primary mt-8">Show All</button>
            </Link>
        </div>
    );
};

export default FontData;
