import React from 'react';

function ServiceInfo(props) {

    return (
        <div className=" flex w-1/3  pr-7">
            <div className="w-[450px] h-[300px]  cursor-pointer bg-white rounded-2xl transition duration-500 ease-in-out hover:bg-amber-500  ">
               <div className="w-4/5   mt-8 ml-8 ">
                   <i className={props.icon} style={{ fontSize: '65px' }}></i>
                   <p className="text-lg mt-5">{props.title}</p>
                   <p className="text-lg  text-justify mt-5 w-full text-gray-500 mb-8">{props.description}</p>
               </div>

            </div>
        </div>
    );
}

export default ServiceInfo;