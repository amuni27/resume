import React from 'react';
import Button from "./Button";

function ContactForm(props) {
    return (
        <div className="w-full bg-gray-50 rounded-2xl p-10">
            <p className="text-lg font-bold">SAY SOMETHING</p>
            <div className="flex w-full mt-6">
                <div className="w-1/2 pr-4">
                    <input className="w-full h-12 mb-8 p-7 border-2 border-gray-200" type="text" placeholder="Name *"/>
                </div>
                <div className="w-1/2 pl-4">
                    <input className="w-full h-12 mb-8 p-7 border-2 border-gray-200" type="text" placeholder="Email *"/>
                </div>
            </div>
            <div><input className="w-full h-12 p-7 border-2 border-gray-200" type="text" placeholder="Subject *"/></div>
            <div className="mt-8">
                <label  htmlFor="message">Your Message *</label>
                <textarea className="w-full mt-4 h-24 border-2 border-gray-200" id="message" placeholder=""/>
            </div>
            <div className="mt-8">
                <Button name="SEND MESSAGE" isActive="true"/>
            </div>
        </div>
    );
}

export default ContactForm;