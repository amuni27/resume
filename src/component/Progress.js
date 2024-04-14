import React from 'react';

function Progress({name,progress,progressCSS,progressTxtCSS}) {
    return (
        <div className="relative h-2  mb-14">
            <div className="absolute top-6 left-0 h-full bg-gray-200 w-full" ></div>
            <div className={progressTxtCSS} ></div>
            <div className="absolute top-0 left-0 text-l text-gray-500">{name} </div>
            <div className={progressCSS}>{progress}%</div>
        </div>
    );
}
export default Progress;
