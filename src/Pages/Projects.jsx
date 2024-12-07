import { useState } from "react";
import Touch from "../assets/Projects/Touchstone.jpg";
import Line from "../assets/otherProjects/Line.svg";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
    const [visible, setVisible] = useState(false);
    const handleVisible = () => {
        setVisible(!visible);
    };
    return (
        <div
            className="h-[28rem] sm:h-[32rem] md:h-[35rem] w-full pt-14"
            style={{
                background: `linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.2),rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${Touch})`,
                backgroundPosition: "right top",
                backgroundSize: "cover",
            }}
        >
            <div className="flex items-center justify-between flex-col h-full relative overflow-hidden font-[Montserrat]">
                <div className="flex items-center justify-center flex-col text-center text-white gap-2">
                    <p className="font-extralight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        ABHIRAM’S
                    </p>
                    <div className="flex items-center justify-center flex-row text-center w-[100vw] sm:w-max">
                        <img
                            src={Line}
                            alt="Line"
                            className="w-10
                             sm:w-32 md:w-40 lg:w-48 xl:w-60 rotate-180"
                        />
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mx-3 w-min lg:w-max">
                            TOUCHSTONE TOWERS
                        </p>
                        <img
                            src={Line}
                            alt="Line"
                            className="w-10
                             sm:w-32 md:w-40 lg:w-48 xl:w-60"
                        />
                    </div>
                    <div className="mx-5 my-2">
                        <a
                            href="tel:+"
                            className="border border-BStart bg-gradient-to-r text-white duration-300 hover:text-BStart from-BStart hover:from-white hover:via-white hover:to-white via-BMiddle to-BEnd font-semibold text-[0.7rem] md:text-sm px-4 md:px-5 py-2 rounded-[0.25rem]"
                        >
                            Enquiry Now
                        </a>
                    </div>
                </div>
                <div
                    className={`w-full text-white flex items-center justify-center flex-col py-5 px-3 sm:px-5 absolute bottom-0 rounded-t-3xl transition-all duration-500 
                        ${
                            visible
                                ? "bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.4))] backdrop-blur-sm"
                                : "bg-gradient-to-b from-[rgba(0,0,0,0.0)] via-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.0))] backdrop-blur-none"
                        }
                    `}
                >
                    <div
                        className="flex items-center justify-center flex-col hover:cursor-pointer mb-2"
                        onClick={handleVisible}
                    >
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className={`${
                                visible ? "rotate-180" : "rotate-0"
                            } transition-all duration-500 text-base md:text-lg`}
                        />
                        <p className="text-xl lg:text-2xl font-bold">
                            Condominium
                        </p>
                        <p className="text-lg lg:text-xl font-light">
                            G+15 Floors | ~2145 SFT
                        </p>
                    </div>
                    <p
                        className={`${
                            visible
                                ? "relative bottom-0"
                                : "absolute -bottom-96"
                        } transition-all duration-500 text-sm md:text-base lg:text-lg xl:text-xl sm:w-[35rem] md:w-[40rem] lg:w-[50rem] text-center xl:w-[65rem] pt-5 lg:pt-10`}
                    >
                        Abhiram’s Touchstone Towers offers 2 & 3 BHK
                        Vasthu-compliant apartments (1085–2145 sq. ft.) in a
                        prime location near Kurmannapalem Junction. These
                        15-floor towers feature no common walls, cellar parking,
                        a multi-level clubhouse, 24/7 security, power backup,
                        and landscaped greenery, ensuring comfort, ventilation,
                        and a peaceful lifestyle.
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Projects;
