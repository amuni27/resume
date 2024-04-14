import React from 'react';
import ServiceInfo from "./ServiceInfo";
import ContactForm from "./ContactForm";
import Item from "./Item";

function Contact(props) {
    return (
        <div className=" pb-16">
            <div className="flex justify-center items-center w-1/2 pt-20">
                <div className="w-3/4 pl-16">
                    <h1 className="text-3xl  pb-4 font-bold  border-b-2 border-amber-600 ">GET IN TOUCH</h1>
                    <p className="text-l font-light mt-8 mb-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                </div>
            </div>
            <div className="flex  ml-40 mt-10 mb-10">
                <div className="w-2/3"><ContactForm/></div>
                <div className="w-1/4">
                    <Item title="My Address" description="Woodbridge, VA , USA 750065."
                          icon="fa fa-map-marker text-amber-600"/>
                    <Item title="My Phone" description=" (571) 477 - 4725"
                          icon="fa fa-phone text-amber-600"/>
                    <Item title="My Email" description="meetwengel@gmail.com"
                          icon="fa fa-envelope text-amber-600"/>
                </div>
            </div>

        </div>
    );
}

export default Contact;