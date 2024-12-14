"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () =>{
    return(
        <div className="z-20 w-full bg-darkbg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Profile pic"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mt-[-80px] mb-5 text-2xl leading-tight text-center md:text-left
                    md:text-4xl md:mb-10">Desarrollador Web Fullstack Jr<br/>
                    <TypeAnimation
                    
                    sequence={[
                        "  HTML - CSS - Javascript",
                        1500,
                        " PHP - MySQL - SQL - Composer",
                        1500,
                        " React - Bootstrap - TailwindCSS",
                        1500,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    className="block font-bold text-secondary"
                    />
                    </h1>

                    <p className="max-w-[90%] text-center mb-0 mx-2 mb-2 text-xl md:mx-0 md:mb-8 md:text-left">
                        Soy un desarrollador web fullstack apasionado por crear sitios web dinámicos, atractivos y altamente funcionales. Mi enfoque combina diseño moderno con soluciones técnicas sólidas para ofrecer experiencias digitales impactantes y personalizadas a cada usuario.
                    </p>

                    <div className="mt-6 flex item-center justify-center  gap-3 md:justify-start md:gap-10">
                        <Link 
                        href="/cv/CV_Julian_Roman_Ortiz.pdf" 
                        download="CV_Julian_Roman_Ortiz.pdf"
                        className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                            Visualizar CV
                        </Link>

                        


                        <Link 
                        href="https://www.linkedin.com/in/julianortiz160405" 
                        className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;