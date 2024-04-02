// Almost Done
// Somethings requried to add in Details Header with respect to Song and Related Songs

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsHeader from "../components/DetailsHeader";

function ArtistDetails() {
    const { id: artistId } = useParams();
    const [artist, setArtist] = useState(null);
    const artistData = artist?.artists[0] || {};
    const [isLoading, setIsLoading] = useState(false); // optional

    const fetchArtist = async () => {
        if (!artistId) {
            console.log("No artist id is provided");
            return;
        }
        try {
            const response = await fetch(
                `http://localhost:3000/api/artists/${artistId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setArtist(data);
        } catch (err) {
            console.error("Error fetching artist", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetchArtist();
    }, [artistId]);

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId={artistId}
                artistData={artistData}
                isLoading={isLoading}
            />
            {/* 
            <RelatedSongs
                data={artistData?.data[0].views["top-songs"]?.data}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            /> */}
        </div>
    );
}

export default ArtistDetails;
