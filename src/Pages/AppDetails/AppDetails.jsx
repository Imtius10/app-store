import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rt from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStore, getStoreApp } from "../../Utility/AddToStorage";
import AppNotFound from "../../Components/AppNotFound/AppNotFound";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  
  
  const appId = /^\d+$/.test(id) ? parseInt(id, 10) : NaN;

  console.log(id)
  console.log(typeof id)
  const singleApp = data.find((app) => app.id === appId);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getStoreApp() || [];
    if (installedApps.includes(appId.toString()) || installedApps.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);

  if (!singleApp) return <AppNotFound></AppNotFound>;

  const { ratingAvg, title, downloads, reviews, image, size, ratings, description } = singleApp;

  const installApp = (id) => {
    if (!isInstalled) {
      addToStore(id);
      setIsInstalled(true);
      toast.success("App Installed Successfully!", {
        toastId: "install-toast",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-4">
      <div className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
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
                <img src={rt} alt="rating" className="w-4 h-4 mb-1" />
                <p className="text-xs text-gray-500 mt-1">Rating</p>
                <p className="text-gray-700 text-sm font-semibold">
                  {ratingAvg}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => installApp(id)}
              disabled={isInstalled}
              className={`px-6 py-2 rounded-xl shadow-sm transition duration-200 ${isInstalled
                  ? "bg-[#00D390] cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-[#00b87d] text-white"
                }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 text-left ml-6 mt-10 border-t border-gray-300">
          Ratings
        </h2>
        <div className="w-full h-70 border-b border-gray-300">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={[...ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 30, bottom: 10, left: 0 }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12, fill: "#374151" }}
              />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#FF8811"
                radius={[0, 6, 6, 0]}
                barSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-3 text-left mt-10">
          Description
        </h2>
        <p className="text-left mt-2 mb-10">{description}</p>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AppDetails;
