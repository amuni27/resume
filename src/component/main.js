import Home from "./Home";
import About from "./About";
import LatestWork from "./LatestWork";
import Skill from "./Skill";
import MyService from "./MyService";
import Contact from "./Contact";

export function Main(){
    return(
        <div className="w-full h-full overflow-y-auto flex-1 bg-gray-200">
            <Home/>
            <About />
            <LatestWork/>
            <MyService/>
            <Skill />
            <Contact />
        </div>
    )
}