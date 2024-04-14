import React from 'react';

function Item(props) {
    return (
        <div className="flex pr-7   ml-8 mb-8 w-full h-[160px]  cursor-pointer bg-gray-50 rounded-2xl transition duration-500 ease-in-out hover:bg-amber-500 ">
            <div className="ml-8 mt-6">
                <i className={props.icon} style={{fontSize: '35px'}}></i>
            </div>
            <div className="ml-8">
                <p className="text-lg mt-5">{props.title}</p>
                <p className="text-lg   mt-5 w-full text-gray-500 mb-8">{props.description}</p>
            </div>
        </div>
    );
}

export default Item;