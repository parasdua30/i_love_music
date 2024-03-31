import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    };

    // changes
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSubmit(e); // Call handleSubmit whenever input changes
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="p-2 text-gray-400 focus-within:text-gray-600"
            >
                <div className="flex flex-row justify-start items-center">
                    <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
                    <input
                        name="search-field"
                        autoComplete="off"
                        id="search-field"
                        className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
                        placeholder="What do you want to play?"
                        type="search"
                        value={searchTerm}
                        onChange={handleChange} // Call handleChange on change event
                    />
                </div>
            </form>
        </>
    );
}

export default Searchbar;
