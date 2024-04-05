import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const DetailsHeader = ({ artistId, artistData, songData, isLoading }) => {
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="relative w-full flex flex-col">
            <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
            <div className="absolute inset-0 flex items-center">
                <img
                    alt="profile"
                    src={songData?.image}
                    className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
                />

                <div className="ml-5">
                    <p className="font-bold sm:text-3xl text-xl text-white">
                        {songData?.name}
                    </p>

                    {/* rest of component */}
                    {/* {!artistId && (
                        <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
                            <p className="text-base text-gray-400 mt-2">
                                {songData?.subtitle}
                            </p>
                        </Link>
                    )}

                    <p className="text-base text-gray-400 mt-2">
                        {artistId
                            ? artistData?.attributes?.genreNames[0]
                            : songData?.genres?.primary}
                    </p> */}
                </div>
            </div>
            {/* rest of component */} // to add something
        </div>
    );
};

export default DetailsHeader;
