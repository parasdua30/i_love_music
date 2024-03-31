import "./App.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { BrowserRouter as Router } from "react-router-dom";

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
                </div>
            </div>
        </>
    );
}

export default App;
