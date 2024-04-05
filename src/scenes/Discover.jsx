import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectGenreListId } from "../app/slices/playerSlice";
import { genres } from "../assets/constants";
import Spinner from "../components/Spinner";
// import SongCard from "../components/Songcard";

function Discover() {
    const dispatch = useDispatch(); // Define dispatch here
    // const [activeSong, isPlaying] = useSelector((state) => state.player);
    const [songsData, setSongsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // optional
    const [title, setTitle] = useState(null); // optional
    const [image, setImage] = useState(null); // optional

    const fetchSongsData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/discover`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const { item } = await response.json();
            console.log("hello", typeof item);
            setSongsData(item);
        } catch (err) {
            console.error("Error fetching songs", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchSongsData();
    }, []);

    if (isLoading) {
        // return <Loader />;
        return <Spinner />;
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                    <h2 className="font-bold text-3xl text-white text-left">
                        {/* Discover:{" "}
                        <span className="font-sans md:font-serif text-purple-700">
                            {genreTitle || "Pop"}
                        </span> */}
                    </h2>
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
            {!isLoading && (
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    <p className="text-white">ram ram</p>
                    {songsData === null
                        ? console.log("done")
                        : console.log(
                              songsData
                                  .slice(0, 10)
                                  .filter(
                                      (song) =>
                                          song !== null && song !== undefined
                                  )
                                  .forEach((song) => {
                                      let data = song?.content?.data?.data;
                                      let title =
                                          data?.cardRepresentation?.title
                                              ?.transformedLabel;
                                      let image =
                                          data?.cardRepresentation?.artwork
                                              ?.sources?.[0]?.url;

                                      console.log(title, "-", image);
                                  })
                          )}
                </div>
            )}
        </>
    );
}

export default Discover;
