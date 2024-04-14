import React from 'react';
import profileImage from "../image/img.jpg"
import Button from "./Button";
import resume from "../resume/WenMat2.pdf"

function About(props) {

    const downloadResume = () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'WengelawiNegewoResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="">
            <div className="flex justify-center items-center w-1/2 pt-20">
                <div className="w-3/4 pl-16">
                    <h1 className="text-3xl  pb-4 font-bold  border-b-2 border-amber-600 ">ABOUT ME</h1>
                    <p className="text-l font-light mt-8 mb-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                </div>
            </div>
            <div className="flex  justify-center p-0 items-center  mt-10 mb-10  w-3/4 ml-40">
                <div className="w-1/2   flex  ">
                    <div className="h-[560px] p-0 bg-gray-400 border-8 border-white ">
                        <img className="w-full h-full border-8 border-white" src={profileImage} alt=""/>
                    </div>
                </div>
                <div className="w-1/2 m-0  h-full">
                    <div className="">
                        <h1 className="text-3xl font-bold ">I'M WENGELAWI NEGEWO</h1>
                        <p className="text-l   mt-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                        <p className="text-l  font-light mt-4 mb-4 text-justify mr-8">Experienced Software Engineer with over 5 years of expertise in Java, Spring, Javascript, Node, AWS, and React. Proficient in event-driven, service-oriented (SOA), and microservices architecture, with a strong track record of delivering highly scalable and robust end-to-end solutions. Skilled in system design and analysis of applications,web service architectures, and Restful APIs. Applying for a Software Engineer role to provide innovative solutions and support for digital products.</p>

                        <div className=" w-full mb-8">
                            <div className="flex ">
                                <p className="text-l font-light mt-4  w-1/2"><span
                                    className=" font-bold text-amber-600 ">Birthday</span> : <span
                                    className="mx-6">Woodbridge, VA</span></p>
                                <p className="text-l font-light mt-4  w-1/2"><span
                                    className="font-bold text-amber-600">Email</span>:
                                    <span className="mx-10">meetwengel@gmail.com</span></p></div>
                            <div className="flex ">
                                <p
                                    className="text-l font-light mt-4  w-1/2"><span
                                    className=" font-bold text-amber-600">Age</span> : <span
                                    className="mx-16">27 YR</span></p>
                                <p className="text-l font-light mt-4  w-1/2"><span
                                    className="font-bold text-amber-600">Phone</span>:
                                    <span className="mx-10">+1 (571) 477 4725</span></p></div>
                            <div className=" flex ">
                                <p
                                    className="text-l font-light mt-4  w-1/2">
                                    <span className="font-bold text-amber-600 ">Residence</span> : <span
                                    className="mx-4">USA</span></p>
                                <p className="text-l font-light mt-4  w-1/2"> <span
                                    className="font-bold text-amber-600">Skype</span>:
                                    <span className="mx-10">info@domain.com</span></p></div>
                            <div className="flex">
                                <p
                                    className="text-l font-light mt-4  w-1/2">
                                    <span className=" font-bold text-amber-600">Address</span> : <span className="mx-8">Denver, WD </span>
                                </p>
                                <p className="text-l font-light mt-4  w-1/2"> <span
                                    className="font-bold text-amber-600">Freelance</span>:
                                    <span className="mx-4">info@domain.com</span></p></div>
                        </div>
                        <Button name="DOWNLOAD CV" isActive="true" click={downloadResume}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;