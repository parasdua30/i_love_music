import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [accessToken, setAccessToken] = useState("");

    const getAccessToken = async () => {
        const clientId = "";
        const clientSecret = "";
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Request-Headers": "application/json",
            },
            mode: "no-cors",
            body: "grant_type=client_credentials",
        });

        const data = await response.json();
        setAccessToken(data.access_token);
    };

    const getArtists = async () => {
        const res = await fetch(
            "https://open.spotify.com/artist/4fEkbug6kZzzJ8eYX6Kbbp?si=bQQexhPeTquFgzYmfBxjhQ",
            {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + accessToken,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Request-Headers": "application/json",
                },
                mode: "no-cors",
            }
        );

        const artistsData = await res.json();
        console.log(artistsData);
    };

    useEffect(() => {
        getAccessToken();
    }, []);

    return (
        <div>
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={getArtists}
            >
                Artists
            </button>
        </div>
    );
}

export default App;
