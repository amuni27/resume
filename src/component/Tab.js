import React from 'react';

function Tab({name, img_link}) {
    return (
        <li>
            <div className=" w-full h-24 border-[0.1px] border-b-gray-50 cursor-pointer">
                <div className="flex justify-center mt-8">
                    <i className={img_link}/>
                </div>
                <div className="flex justify-center mt-2">
                    <p className="text-gray-700 text-md">{name}</p>
                </div>
            </div>
        </li>


    );
}

export default Tab;