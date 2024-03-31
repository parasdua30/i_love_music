import "./App.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import AppRouter from "./components/AppRouter.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import {
//     RouterProvider,
//     Route,
//     Routes,
//     createBrowserRouter,
//     createRoutesFromElements,
// } from "react-router-dom";
// import Discover from "./components/Discover";
// import TopArtists from "./components/TopArtists";
// import TopCharts from "./components/TopCharts";
// import AroundYou from "./components/AroundYou";
// import SongDetails from "./components/SongDetails";
// import Search from "./components/Search";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Routes>
//             <Route path="/" element={<Discover />}></Route>
//             <Route path="/top-artists" element={<TopArtists />} />
//             <Route path="/top-charts" element={<TopCharts />} />
//             <Route path="/around-you" element={<AroundYou />} />
//             <Route path="/songs/:songid" element={<SongDetails />} />
//             <Route path="/search/:searchTerm" element={<Search />} />
//         </Routes>
//     )
// );

function App() {
    return (
        <>
            Radhe Radhe
            <div className="relative flex">
                <Router>
                    <Sidebar />
                </Router>

                <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-purple-900">
                    <Router>
                        <Searchbar />
                    </Router>

                    <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                        <div className="flex-1 h-fit pb-40">
                            {/* <RouterProvider router={router} /> */}
                            <AppRouter />
                        </div>
                        <div className="xl:sticky relative top-0 h-fit">
                            {/* <TopPlay /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
