import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../../Utility/AddToStorage";
import ShowInstall from "../ShowInstallapp/ShowInstall";

const InstallApp = () => {
    const data = useLoaderData();
    const [installedapp, setInstallapp] = useState([]);
    const [sortType, setSortType] = useState("none");

    useEffect(() => {
        const installapp = getStoreApp();
        const convertedinstallapp = installapp.map((id) => parseInt(id));
        const mypp = data.filter((app) => convertedinstallapp.includes(app.id));
        setInstallapp(mypp);
    }, [data]);

    const handleSort = (type) => {
        setSortType(type);
        let sortedApps = [...installedapp];

        if (type === "size") {
            sortedApps.sort((a, b) => a.size - b.size);
        } else if (type === "rating") {
            sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg);
        }

        setInstallapp(sortedApps);
    };

    return (
        <div className="p-4 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto mb-6">
                <h1 className="text-3xl font-bold mt-7">Your Installed Apps</h1>
                <p className="text-gray-500 mt-2">
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mb-6 px-4">
                <h4 className="text-lg font-medium">{installedapp.length} App Found</h4>

                <div className="flex items-center gap-2 mt-3 sm:mt-0">
                    <label htmlFor="sort" className="text-gray-700 text-sm font-medium">
                        Sort by:
                    </label>
                    <select
                        id="sort"
                        className="border rounded-md p-2 text-sm"
                        value={sortType}
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option value="none">Default</option>
                        <option value="size">Size (Small → Large)</option>
                        <option value="rating">Rating (High → Low)</option>
                    </select>
                </div>
            </div>

            <div className="w-full max-w-4xl space-y-4">
                {installedapp.map((app) => (
                    <ShowInstall
                        key={app.id}
                        installapp={app}
                        onUninstall={(id) =>
                            setInstallapp((prev) => prev.filter((app) => app.id !== id))
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default InstallApp;
