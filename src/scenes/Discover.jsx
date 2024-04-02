import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectGenreListId } from "../app/slices/playerSlice";
import { genres } from "../assets/constants";

function Discover() {
    const dispatch = useDispatch(); // Define dispatch here
    // const { genreListId } = useSelector((state) => state.player);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { songsData, setSongsData } = useState([]);

    // const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    const fetchSongsData = async () => {
        if (!artistId) {
            console.log("No artist id is provided");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/api/discover`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setArtist(data);
        } catch (err) {
            console.error("Error fetching songs", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchSongsData();
    }, [artistId]);

    return (
        <>
            <div className="flex flex-col">
                <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                    {/* <h2 className="font-bold text-3xl text-white text-left">
                        Discover:{" "}
                        <span className="font-sans md:font-serif text-purple-700">
                            {genreTitle || "Pop"}
                        </span>
                    </h2> */}
                    {/* <select
                        onChange={(e) =>
                            dispatch(selectGenreListId(e.target.value))
                        }
                        value={genreListId || "pop"}
                        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                    >
                        {genres.map((genre) => (
                            <option key={genre.value} value={genre.value}>
                                {genre.title}
                            </option>
                        ))}
                    </select> */}
                </div>
            </div>
        </>
    );
}

export default Discover;
