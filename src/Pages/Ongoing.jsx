import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { faDownload, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Line from "../assets/About/Line.svg";
import Anand from "../assets/Projects/AbhiramAnand.jpg";

function Ongoing() {
    const location = useLocation();
    const projectSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#projects" && projectSection.current) {
            projectSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div
            ref={projectSection}
            className="h-max w-full flex items-center py-16 justify-center flex-col bg-gradient-to-br from-cyan to-white"
        >
            <div className="text-[1.4rem] sm:text-2xl md:text-3xl font-bold text-BStart font-[Italiana] flex items-center justify-center uppercase mb-7">
                <img src={Line} alt="Line" className="rotate-180 w-16 sm:w-24 md:w-32"/>
                <p className="mx-3 text-center w-min sm:w-max">Up&nbsp;Coming Projects</p>
                <img src={Line} alt="Line" className=" w-16 sm:w-24 md:w-32"/>
            </div>
            <div className="w-[90vw] lg:w-[60rem] xl:w-[70rem] flex items-center justify-center flex-col sm:flex-row font-[Montserrat] gap-5 md:gap-10 lg:gap-20">
                <img
                    src={Anand}
                    alt=""
                    className="w-[90vw] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
                />
                <div>
                    <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text text-center sm:text-left text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        Abhiram Anand
                    </p>
                    <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text font-[Italiana] text-center sm:text-left text-[1.4rem] sm:text-2xl md:text-3xl lg:text-4xl ">
                        Essence Of Living
                    </p>
                    <div className="text-BStart flex items-start justify-center gap-5 lg:gap-10 mt-5 md:mt-10">
                        <div className="flex items-center justify-center text-center flex-col">
                            <p className="text-sm md:text-base">Spread&nbsp;across</p>
                            <p className="text-xl lg:text-2xl font-medium text-BEnd">2720 sqft</p>
                            
                        </div>
                        <div className="h-12 w-[0.05rem] bg-BStart"></div>
                        <div className="flex items-center justify-center text-center flex-col">
                            <p className="text-sm md:text-base">Configuration</p>
                            <p className="text-xl lg:text-2xl font-medium text-BEnd">3bhk</p>
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-wrap mt-5">
                        <div className="mx-5 my-1">
                            <a
                                href="tel:+"
                                className="hover:bg-none border border-BStart bg-gradient-to-r text-white duration-300 hover:text-BStart from-BStart via-BMiddle to-BEnd font-semibold text-[0.7rem] md:text-sm px-4 py-1 md:px-5 md:py-2 rounded-[0.25rem]"
                            >
                                <FontAwesomeIcon icon={faDownload} className="mr-3"/>
                                Brochure
                            </a>
                        </div>
                        <div className="mx-5 my-1">
                            <a
                                href="tel:+"
                                className="bg-none border border-BStart hover:text-white hover:bg-gradient-to-r duration-300 from-BStart via-BMiddle to-BEnd font-semibold text-[0.7rem] md:text-sm px-4 py-1 md:px-5 md:py-2 rounded-[0.25rem]"
                            >
                                <FontAwesomeIcon icon={faLocationDot} className="mr-3"/>
                                Location
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ongoing;
