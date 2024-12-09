import React from "react";
import BgPattern from "../assets/otherProjects/BgPattern.svg";
import Line from "../assets/otherProjects/Line.svg";
import ProjectsSwiper from "../Components/OtherProjects";

function OtherProjects() {
    return (
        <div className="font-[Montserrat] py-14 px-5 md:px-10 lg:px-14 text-white bg-gradient-to-b from-BStart via-BMiddle to-BEnd flex items-center justify-center relative overflow-hidden">
            <div className=" w-full xl:w-[70rem]">
                <div className="flex items-center justify-center sm:justify-start gap-5 flex-row">
                    <p className="font-bold text-xl md:text-2xl lg:text-3xl">Other Projects</p>
                    <img src={Line} alt="Line" className="w-32 lg:w-40 hidden sm:block"/>
                </div>
                <div>
                    <ProjectsSwiper />
                </div>
                <div className="absolute bottom-0 left-0">
                    <img src={BgPattern} alt="Pattern" />
                </div>
            </div>
        </div>
    );
}

export default OtherProjects;
