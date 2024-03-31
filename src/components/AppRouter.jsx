import React from "react";
import {
    RouterProvider,
    Route,
    Routes,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Discover from "./Discover";
import TopArtists from "./TopArtists";
import TopCharts from "./TopCharts";
import AroundYou from "./AroundYou";
import SongDetails from "./SongDetails";
import Search from "./Search";

// Create the router using createBrowserRouter directly with JSX route configuration
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Discover />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
            <Route path="/around-you" element={<AroundYou />} />
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/search/:searchTerm" element={<Search />} />
        </Route>
    )
);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
