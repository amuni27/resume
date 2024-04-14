import React from 'react';
import Button from "./Button";
import  profileImage from "../image/wengel2.png"

function Home(props) {
    return (
        <div className="flex h-screen">
            <div className="flex justify-center items-center w-1/2 bg-gray-50">
                <div className="w-3/4">
                    <h3 className="text-xl">Hello there...</h3>
                    <h1 className="text-5xl font-bold mb-4">Wengelawi Negewo</h1>
                    <h3 className="text-xl mb-4">I am Javascript and Java Developer</h3>
                    <p className="mb-4">Hi there! I'm a passionate Java, Spring, Javascript, Node, AWS, and React with 5 years of experience in crafting web
                        applications and dynamic user interfaces. I thrive on solving complex problems and turning ideas
                        into elegant, efficient code.</p>
                    <div className="flex "><Button name="My work" isActive={true}/> <Button name="Hire me" isActive={false}/></div>
                </div>
            </div>
            <div className="w-1/2 bg-gray-100"><img className="h-full" src={profileImage} alt="img"/></div>
        </div>

    );
}

export default Home;