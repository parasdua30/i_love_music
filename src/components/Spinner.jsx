import { CircularProgress } from "@mui/material";

export default function Spinner() {
    return (
        <div className="flex items-center justify-center h-screen">
            <span>
                <CircularProgress className="text-indigo-600" />
                <p className="text-white">Loading...</p>
            </span>
        </div>
    );
}

// import React from "react";
// import "./Spinner.css"; // Make sure this path is correct based on your project structure

// const Spinner = () => {
//     // TailwindCSS classes for styling the spinner and bars
//     const spinnerStyle = "m-auto w-12 h-7.5"; // Adjusted width and height for TailwindCSS
//     const barBaseStyle = "bg-white-700 h-full w-0.5 float-left mx-0.25"; // Tailwind doesn't have exact 2px width, using 0.5rem and adjusted margin

//     return (
//         <div className={`spinner ${spinnerStyle}`}>
//             <div className={`${barBaseStyle} r1`}></div>
//             <div className={`${barBaseStyle} r2`}></div>
//             <div className={`${barBaseStyle} r3`}></div>
//             <div className={`${barBaseStyle} r4`}></div>
//             <div className={`${barBaseStyle} r5`}></div>
//             {/* <p className="text-white">Loading...</p> */}
//         </div>
//     );
// };

// export default Spinner;
