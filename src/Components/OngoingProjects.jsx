import { useState } from "react";
import Iconic from "../assets/Projects/IonicTowers.jpg";
import Imperio from "../assets/Projects/TsImperio.jpg";
import Line from "../assets/otherProjects/Line.svg";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Amenities from "./Amenities";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    };
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                loop={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full"
            >
                <SwiperSlide>
                    <div
                        className="h-[28rem] sm:h-[32rem] md:h-[35rem] w-full pt-14"
                        style={{
                            background: `linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.2),rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${Iconic})`,
                            backgroundPosition: "center left",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="flex items-center justify-between flex-col h-full relative overflow-hidden font-[Montserrat]">
                            {/* Top Section */}
                            <div
                                data-aos="fade-left"
                                className="flex items-center justify-center flex-col text-center text-white gap-2"
                            >
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
                                        ICONIC&nbsp;TOWERS
                                    </p>
                                    <img
                                        src={Line}
                                        alt="Line"
                                        className="w-10
                                sm:w-32 md:w-40 lg:w-48 xl:w-60"
                                    />
                                </div>
                                <div className="mx-5 my-2 hover:cursor-pointer">
                                    <div className="border border-BStart bg-gradient-to-r text-white duration-300 hover:text-BStart from-BStart hover:from-white hover:via-white hover:to-white via-BMiddle to-BEnd font-semibold text-sm px-4 md:px-5 py-1.5 rounded-[0.25rem]">
                                        Explore
                                    </div>
                                </div>
                            </div>
                            {/* Bottom Sheet */}
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
                                    data-aos="fade-up"
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
                                        View More
                                    </p>
                                    <p className="text-lg lg:text-xl font-light">
                                        C + 6 Floors | 1065 - 1495 SFT
                                    </p>
                                </div>
                                <p
                                    className={`${
                                        visible
                                            ? "relative bottom-0"
                                            : "absolute -bottom-96"
                                    } transition-all duration-500 text-sm md:text-base lg:text-lg xl:text-xl sm:w-[35rem] md:w-[40rem] lg:w-[50rem] text-center xl:w-[65rem] py-5 lg:py-10`}
                                >
                                    Abhiram’s IconicTowers offers 2 & 3 BHK
                                    Vasthu-compliant apartments (1065-1495 sq.
                                    ft.) in a prime location near Atchutapuram.
                                    These 6-floor towers feature no common
                                    walls, cellar parking, a multi-level
                                    clubhouse, 24/7 security, power backup, and
                                    landscaped greenery, ensuring comfort,
                                    ventilation, and a peaceful lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-8 sm:py-14 bg-cyan">
                        <div className="relative overflow-hidden flex items-center justify-center flex-col sm:flex-row gap-5 md:gap-10 w-[90vw] sm:w-[36rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]">
                            <div data-aos="fade-right" className="sm:w-[30%]">
                                <p className="font-[Montserrat] bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text text-center sm:mb-4 sm:text-left text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
                                    Browse
                                </p>
                                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text font-[Italiana] text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                                    Iconic&nbsp;Towers Amenities
                                </p>
                            </div>
                            <div className="w-[90vw] sm:w-[70%]">
                                <Amenities />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[28rem] sm:h-[32rem] md:h-[35rem] w-full pt-14"
                        style={{
                            background: `linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.2),rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(${Imperio})`,
                            backgroundPosition: "center left",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="flex items-center justify-between flex-col h-full relative overflow-hidden font-[Montserrat]">
                            {/* Top Section */}
                            <div
                                data-aos="fade-left"
                                className="flex items-center justify-center flex-col text-center text-white gap-2"
                            >
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
                                        TS&nbsp;Imperio
                                    </p>
                                    <img
                                        src={Line}
                                        alt="Line"
                                        className="w-10
                                sm:w-32 md:w-40 lg:w-48 xl:w-60"
                                    />
                                </div>
                                <div className="mx-5 my-2 hover:cursor-pointer">
                                    <div className="border border-BStart bg-gradient-to-r text-white duration-300 hover:text-BStart from-BStart hover:from-white hover:via-white hover:to-white via-BMiddle to-BEnd font-semibold text-sm px-4 md:px-5 py-1.5 rounded-[0.25rem]">
                                        Explore
                                    </div>
                                </div>
                            </div>
                            {/* Bottom Sheet */}
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
                                    data-aos="fade-up"
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
                                        View More
                                    </p>
                                    <p className="text-lg lg:text-xl font-light">
                                        G2 + 4 Floors | 1275 - 2020 SFT
                                    </p>
                                </div>
                                <p
                                    className={`${
                                        visible
                                            ? "relative bottom-0"
                                            : "absolute -bottom-96"
                                    } transition-all duration-500 text-sm md:text-base lg:text-lg xl:text-xl sm:w-[35rem] md:w-[40rem] lg:w-[50rem] text-center xl:w-[65rem] py-5 lg:py-10`}
                                >
                                    Abhiram TS Imperio offers Commercial Spaces
                                    and 3 BHK Luxury Apartments (1275–2020 sq.
                                    ft.) in a meticulously planned layout near
                                    Kurmanapalem. Designed for optimal
                                    natural light and ventilation. The 
                                    gated community includes 24/7
                                    security, power backup, and lush green
                                    surroundings for a truly exceptional
                                    lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-8 sm:py-14 bg-cyan">
                        <div className="relative overflow-hidden flex items-center justify-center flex-col sm:flex-row gap-5 md:gap-10 w-[90vw] sm:w-[36rem] md:w-[45rem] lg:w-[55rem] xl:w-[65rem]">
                            <div data-aos="fade-right" className="sm:w-[30%]">
                                <p className="font-[Montserrat] bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text text-center sm:mb-4 sm:text-left text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">
                                    Browse
                                </p>
                                <p className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text font-[Italiana] text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                                    TS&nbsp;Imperio Amenities
                                </p>
                            </div>
                            <div className="w-[90vw] sm:w-[70%]">
                                <Amenities />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
