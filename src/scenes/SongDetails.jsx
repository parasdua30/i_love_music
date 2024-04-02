import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function SongDetails() {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { songid } = useParams();

    return <div className="flex flex-col"></div>;
}

export default SongDetails;
