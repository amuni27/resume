import React from 'react';

function Button(props) {
    if (props.isActive) {
        return (
            <span onClick={props.click} className="flex justify-center items-center w-36 h-16 bg-amber-600 mr-5 text-white cursor-pointer">
            <span>{props.name}</span>
        </span>
        );
    }else{
        return (
            <span className="flex justify-center items-center w-36 h-16 bg-white border-amber-600 border-2 mr-5 cursor-pointer">
            <span>{props.name}</span>
        </span>
        );
    }

}

export default Button;