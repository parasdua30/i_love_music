import React from "react";
import { useParams } from "react-router-dom";

function Search() {
    const { searchTerm: toSearch } = useParams();
    return <div className="text-white">Search: {toSearch}</div>;
}

export default Search;
