import Tab from "./Tab";

export function Sidebar() {
    return (

                <div className="w-[95px] h-full bg-white overflow-y-auto border-[0.1px] border-b-gray-50  drop-shadow-sm">
                    <div className="w-full bg-amber-600 text-center"><h1 className="text-md pt-2 pb-2 text-white">Wengel</h1></div>
                        <ul>
                            <Tab name="Home" img_link="fa fa-home scale-150"/>
                            <Tab name="About me" img_link="fa fa-address-card scale-150"/>
                            <Tab name="Service" img_link="fa fa-bell-o scale-150"/>
                            <Tab name="portfolio" img_link="fa fa-briefcase scale-150"/>
                            <Tab name="Contact" img_link="fa fa-id-card-o scale-150"/>
                        </ul>
                </div>


    )
}

