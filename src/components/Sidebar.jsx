import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { NavLink, useNavigate } from "react-router-dom";

import {
    HiOutlineHashtag,
    HiOutlineHome,
    HiOutlineMenu,
    HiOutlinePhotograph,
    HiOutlineUserGroup,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const links = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
    { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
    { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
                onClick={() => handleClick && handleClick()}
            >
                <item.icon className="w-6 h-6 mr-2" />
                {item.name}
            </NavLink>
        ))}
    </div>
);

function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const change = () => {
        navigate("/");
    };

    return (
        <>
            {/* Medium and Bigger Screens */}
            <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[rgb(25,22,36)]">
                <img
                    // src={logo}
                    src="https://w0.peakpx.com/wallpaper/617/577/HD-wallpaper-love-music-black-heart-hiphop-iphone-musica-music4-red-samsung.jpg"
                    alt="logo"
                    className="w-full h-15 object-contain"
                    onClick={change}
                />
                <NavLinks />
            </div>

            {/* Mobile Sidebar */}
            <div className="absolute md:hidden block top-6 right-3">
                {mobileMenuOpen === false ? (
                    <HiOutlineMenu
                        className="w-6 h-6 mr-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    />
                ) : (
                    <RiCloseLine
                        className="w-6 h-6 mr-2 text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </div>

            <div
                className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
                    mobileMenuOpen ? "left-0" : "-left-full"
                }`}
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-full h-14 object-contain"
                />
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    );
}

export default Sidebar;
