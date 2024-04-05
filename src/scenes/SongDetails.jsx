import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";
import MusicPlayer from "../components/MusicPlayer";
// import DetailsHeaderForSongs from "../components/DetailsHeaderForSongs";

function SongDetails() {
    const dispatch = useDispatch();
    const { songId: songid } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [songsData, setSongsData] = useState(null);
    const navigate = useNavigate();
    // const { activeSong, isPlaying } = useSelector((state) => state.player);
    // const { image, name, artists, track } = data;

    const change = (artistId) => {
        navigate("/artists/" + artistId);
    };

    const fetchSongs = async () => {
        if (!songid) {
            console.log("No song id is provided");
            return;
        }
        try {
            const response = await fetch(
                `http://localhost:3000/api/songs/${songid}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            setSongsData(data);
        } catch (err) {
            console.error("Error fetching song", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchSongs();
    }, [songid]);

    // const handlePauseClick = () => {
    //     dispatch(playPause(false));
    // };

    // const handlePlayClick = (song, i) => {
    //     dispatch(setActiveSong({ song, data, i }));
    //     dispatch(playPause(true));
    // };

    return (
        <div className="flex flex-col">
            <DetailsHeader songData={songsData} />

            <div className="mb-10">
                {songsData?.artists.length > 1 ? (
                    <h2 className="text-white text-3xl font-bold">Artists: </h2>
                ) : (
                    <h2 className="text-white text-3xl font-bold">Artist: </h2>
                )}
                {songsData?.artists.map((artist) => (
                    <p
                        className="text-white text-2xl font-bold"
                        style={{ width: "fit-content", cursor: "pointer" }}
                        key={artist.id}
                        onClick={() => change(artist.id)}
                    >
                        {artist.name}
                    </p>
                ))}
                {<MusicPlayer url={songsData?.track} />}
            </div>
        </div>
    );
}

export default SongDetails;
