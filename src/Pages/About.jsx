import React, {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Person from "../assets/About/Person.jpg";
import Marquee from "react-fast-marquee";
import Element from "../assets/MarqueeElement.svg";
import Quotation from "../Components/Quotation";
import Clients from "./Clients";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const location = useLocation();
    const aboutSection=useRef(null);

    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    useEffect(()=>{
        if(location.hash==="#about" && aboutSection.current)
        {
            aboutSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);

    return (
        <>
            <div ref={aboutSection} className="bg-[#fff4e7] relative overflow-hidden py-14 flex items-center justify-center flex-col">
                <div className="w-[90vw] md:w-[45rem] lg:w-[58rem] xl:w-[70rem] flex items-center justify-between flex-col sm:flex-row gap-10">
                    <div data-aos="fade-right" className="flex items-center justify-center flex-col">
                        <img src={Person} alt="Person" className="w-[70vw] sm:w-[15rem] md:w-[17rem] lg:w-[20rem]" />
                        <div className="flex items-center justify-center flex-col font-[Montserrat] mt-5">
                            <p className="font-semibold text-xl bg-gradient-to-br from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text">Sri Vallapani Sreenu</p>
                            <p>(Managing Director)</p>
                        </div>
                    </div>
                    <div  data-aos="fade-left" className="basis-[65%] flex items-center sm:items-center justify-center flex-col gap-5 md:gap-10">
                        <div>
                            <p className="text-center font-medium text-xl sm:text-2xl md:text-3xl font-[Montserrat] bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-transparent bg-clip-text">
                                ABHIRAM NIRMAN
                            </p>
                            <p className="text-center font-[Italiana] text-BEnd text-xl sm:text-2xl">
                                Redefining home ownership, one perfect house at a
                                time
                            </p>
                        </div>
                        <div>
                            <p className="text-center text-sm sm:text-base sm:text-left font-[Montserrat]">
                                Abhiram Nirman (India) Pvt. Ltd, a leading real
                                estate developer in Visakhapatnam, has over 15 years
                                of experience crafting premier residential and
                                commercial spaces. Known for its three-storey
                                poolside clubhouse with a gym overlooking the pool,
                                the company ensures quality construction through an
                                experienced team and collaborations with top
                                architects and suppliers. With in-house resources
                                like tower cranes, mixers, an RMC plant, and a brick
                                unit, Abhiram Nirman maintains strict quality
                                control
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-BStart via-BMiddle to-BEnd text-[0.7rem] sm:text-base text-white py-1">
                <Marquee className="" autoFill>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5"/>
                        <p>KURMANNAPALEM</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5"/>
                        <p>ATCHYUTAPURAM</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5"/>
                        <p>SEETHAMANDHARA</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5"/>
                        <p>G+15 FLOORS</p>
                    </div>
                    <div className="flex items-center justify-center mx-1 gap-1">
                        <img src={Element} alt="" className="w-3 sm:w-5"/>
                        <p>2BHK & 3BHK</p>
                    </div>
                </Marquee>
            </div>
            <Quotation />
            <Clients />
        </>
        
    );
}

export default About;
