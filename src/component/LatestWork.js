import React from 'react';
import profileImage from "../image/wengel2.png"
import Portfolio from "./Portfolio";

function LatestWork(props) {
    return (
        <div className="bg-gray-50 pb-16">
            <div className="flex justify-center items-center w-1/2 pt-20">
                <div className="w-3/4 pl-16">
                    <h1 className="text-3xl  pb-4 font-bold  border-b-2 border-amber-600 ">LATEST WORK</h1>
                    <p className="text-l font-light mt-8 mb-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                </div>
            </div>
            <div className="flex   w-3/4 ml-40 mt-10 mb-10">
                <Portfolio />
                <Portfolio />
                <Portfolio />
            </div>
        </div>
    );
}

export default LatestWork;