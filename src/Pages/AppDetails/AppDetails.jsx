import React from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  if (!singleApp) return <p className="text-center mt-10">App not found</p>;

  const { ratingAvg, title, downloads, reviews, image, size,ratings } = singleApp;

  return (
      <div>
            <div className="min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
        <div className="flex flex-col justify-center items-center w-40">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 object-cover rounded-xl shadow"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between h-full text-center md:text-left space-y-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 w-full">
              {title}
            </h1>

            <div className="flex justify-center md:justify-start gap-10 mt-3">
              <div className="flex flex-col items-center">
                <img src={download} alt="downloads" className="w-4 h-4 mb-1" />
                <p className="text-xs text-gray-500 mt-1">Downloads</p>
                <p className="text-gray-700 text-sm font-semibold">
                  {downloads}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src={review} alt="reviews" className="w-4 h-4 mb-1" />
                <p className="text-xs text-gray-500 mt-1">Reviews</p>
                <p className="text-gray-700 text-sm font-semibold">
                  {reviews}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src={ratings} alt="rating" className="w-4 h-4 mb-1" />
                <p className="text-xs text-gray-500 mt-1">Rating</p>
                <p className="text-gray-700 text-sm font-semibold">
                  {ratingAvg}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-2 bg-[#00D390] text-white rounded-xl  shadow-sm transition duration-200">
              Install Now ({size}MB)
            </button>
          </div>
        </div>
          </div>
          
          
          </div>
          <div>
              {
                  ratings.map(r=>r.name)
              }
<div className="mt-8 w-full h-72">
  <h2 className="text-lg font-semibold text-gray-700 mb-3">Ratings Distribution</h2>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={ratings}
      layout="vertical"
      margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
    >
   
      <XAxis type="number" />
      <YAxis
        dataKey="name"
        type="category"
        tick={{ fontSize: 13, fill: "#374151" }}
      />
      <Tooltip />
      <Bar
        dataKey="count"
        fill="#3b82f6"
        radius={[0, 6, 6, 0]}
        barSize={25}
      />
    </BarChart>
  </ResponsiveContainer>
</div>


          </div>
  </div>
      
  );
};

export default AppDetails;
