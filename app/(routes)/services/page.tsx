"use client"
import Avatar from "@/Components/avatar";
import AvatarServices from "@/Components/avatar-services";
import CircleImage from "@/Components/circle-image";
import SliderServices from "@/Components/slider-services";
import TransitionPage from "@/Components/transition-page";
import { p } from "framer-motion/client";

const ServicesPage = () =>{
    return (
        <>
        <TransitionPage />
        <CircleImage />
        <AvatarServices />
        <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
           <div className="max-w-[450px] mt-20 md:mt-0">
                <h1 className="text-2xl leading-tight text-center mt-12 md:text-left md:text-4xl md:mb-5">
                    Mis{" "}
                    <span className="font-bold text-secondary ">
                        servicios.
                    </span>
                </h1>
                <p className="mb-3 mt-3 text-lg px-8 text-gray-300 text-center sm:text-left sm:text-base lg:text-xl">Ofrezco servicios de desarrollo web Fullstack especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS, Javascript, PHP, MySQL, etc. También el diseño de interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                <button className="ml-[28%] my-8 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 "><a href="https://www.linkedin.com/in/julianortiz160405">Contacta conmigo</a></button>
           </div>

            <div>
                <SliderServices />
            </div>
        </div>
        </>
    );
}

export default ServicesPage