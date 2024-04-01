import React from "react";
import { Sidebar, Searchbar, TopPlay } from "./";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            Radhe Radhe
            <div className="relative flex">
                <Sidebar />

                <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-purple-900">
                    <Searchbar />

                    <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                        <div className="flex-1 h-fit pb-40">
                            <Outlet />
                        </div>
                        <div className="xl:sticky relative top-0 h-fit">
                            <TopPlay />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
