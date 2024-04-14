import React from 'react';
import Progress from "./Progress";

function Skill(props) {
    return (
        <div className="bg-gray-50 pb-16">
            <div className="flex justify-center items-center w-1/2 pt-20">
                <div className="w-3/4 pl-16">
                    <h1 className="text-3xl  pb-4 font-bold  border-b-2 border-amber-600 ">MY SKILL</h1>
                    <p className="text-l font-light mt-8 mb-4">A LEAD UX & UI DESIGNER BASED IN CANADA</p>
                </div>
            </div>
            <div className="w-3/4 ml-40 mt-10 mb-10">
               <Progress name="HTML" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="CSS" progress="75" progressCSS="absolute top-0 right-1/4 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-3/4"/>
               <Progress name="Java Script" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="Java" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="AWS" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="Spring boot" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="Relational Database(mysql, sql, postgress)" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>
               <Progress name="No SQL(Mongo db)" progress="100" progressCSS="absolute top-0 right-0 text-l text-gray-500" progressTxtCSS="absolute top-6 left-0 h-full bg-amber-600 w-full"/>

            </div>
        </div>
    );
}

export default Skill;