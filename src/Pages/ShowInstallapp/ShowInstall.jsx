import React from "react";
import download from "../../assets/icon-downloads.png";
import rt from "../../assets/icon-ratings.png";
import { removeFromStore } from "../../Utility/AddToStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowInstall = ({ installapp, onUninstall }) => {
    const { image, ratingAvg, title, downloads, size, id } = installapp;

    const handleUninstall = () => {
        removeFromStore(id);
        onUninstall(id);

        toast.success("App Uninstalled Successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <div>
                <div className="w-full bg-white shadow-md border rounded-xl flex flex-col sm:flex-row items-center sm:justify-between p-4 mb-4 hover:shadow-lg transition-all duration-200">
    <div className="flex flex-1 items-center gap-4 mb-4 sm:mb-0">
        <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
            <h3 className="text-lg font-semibold text-left truncate">{title}</h3>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 text-sm">
                <p className="flex items-center gap-1">
                    <img src={download} alt="downloads" className="w-4 h-4" />
                    {downloads}
                </p>
                <p className="flex items-center gap-1">
                    <img src={rt} alt="rating" className="w-4 h-4" />
                    {ratingAvg}
                </p>
                <p>{size} MB</p>
            </div>
        </div>
    </div>

    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <button
            onClick={handleUninstall}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-full"
        >
            Uninstall
        </button>
    </div>
</div>

            </div>

            <ToastContainer />
        </>
    );
};

export default ShowInstall;
