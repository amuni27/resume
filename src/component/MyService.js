import React from 'react';
import Portfolio from "./Portfolio";
import ServiceInfo from "./ServiceInfo";

function MyService(props) {
    return (
        <div className=" pb-16">
            <div className="flex justify-center items-center w-1/2 pt-20">
                <div className="w-3/4 pl-16">
                    <h1 className="text-3xl  pb-4 font-bold  border-b-2 border-amber-600 ">MY SERVICE</h1>
                    <p className="text-l font-light mt-8 mb-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                </div>
            </div>
            <div className="flex   w-3/4 ml-40 mt-10 mb-10">
                <ServiceInfo title="Unique design" description="I design and develop service for customer of all sizes, specializing in creating stylish, modern website" icon="fa fa-desktop text-amber-600"/>
                <ServiceInfo title="Different Layout" description="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." icon="fa fa-tags text-amber-600"/>
                <ServiceInfo title="Make it Simple" description="I design and develop services for customers of all sizes, specializing in creating stylish, modern websites." icon="fa fa-comment text-amber-600"/>

            </div>
            <div className="flex   w-3/4 ml-40 mt-10 mb-10">
                <ServiceInfo title="Responsive" description="I design and develop service for customer of all sizes, specializing in creating stylish, modern website" icon="fa fa-tablet text-amber-600"/>
                <ServiceInfo title="Testing for Perfection" description="I design and develop service for customer of all sizes, specializing in creating stylish, modern website" icon="fa fa-bullseye text-amber-600"/>
                <ServiceInfo title="Advanced Options" description="I design and develop service for customer of all sizes, specializing in creating stylish, modern website" icon="fa fa-cog text-amber-600"/>
            </div>
        </div>
    );
}

export default MyService;