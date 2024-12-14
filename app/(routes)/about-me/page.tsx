"use client"

import Avatar from "@/Components/avatar";
import ContainerPage from "@/Components/container";
import CounterServices from "@/Components/counter-services";
import TimeLineEducation from "@/Components/time--line-education";
import TimeLine from "@/Components/time-line";
import TransitionPage from "@/Components/transition-page";
import { div } from "framer-motion/client";

const PageAboutMe = () => {
    return(
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi {''}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />
                <TimeLine />
                <h1 className="text-[28px] mt-12 leading-tight text-center md:text-left md:text-5xl md:mt-4">Noticias sobre el <span className="font-bold text-secondary">Hackathón </span></h1>

                <ul className="text-center text-xl mt-12 mb-12 md:text-start">
                    <li className="px-4"><a href="https://www.infobae.com/educacion/2023/06/02/de-monte-grande-a-asuncion-alumnos-de-una-escuela-tecnica-representaran-al-pais-en-una-hackaton-internacional/">Diario <span className="text-secondary">Infobae.</span> </a> </li>
                    <li className="px-4"><a href="https://www.eldiariosur.com/esteban-echeverria/2023/6/2/talentos-de-monte-grande-alumnos-de-la-tecnica-viajaran-paraguay-programar-una-app-61137.html">Diario <span className="text-secondary">Sur.</span></a></li>
                    <li className="px-4"><a href="https://www.lanacion.com.ar/tecnologia/un-colegio-de-esteban-echeverria-participo-en-la-primera-hackaton-de-escuelas-tecnicas-del-mercosur-nid16062023/">Diario <span className="text-secondary">La nación.</span> </a></li>
                    <li className="px-4"><a href="https://www.estebanecheverria.gob.ar/fernando-gray-recibio-a-estudiantes-de-la-escuela-tecnica-n-1/">Web <span className="text-secondary">Municipio de Esteban Echeverría.</span> </a></li>
                    <li className="px-4"><a href="https://www.argentina.gob.ar/noticias/estudiantes-tecnicos-de-los-paises-del-mercosur-realizaron-hackathon-de-innovacion-y">Web <span className="text-secondary">Mercosur.</span> </a></li>
                    <li className="px-4"><a href="https://www.argentina.gob.ar/noticias/estudiantes-tecnicos-de-los-paises-del-mercosur-realizaron-hackathon-de-innovacion-y">Web <span className="text-secondary">Ministerio de educación argentina.</span></a> </li>
                    <li className="px-4"><a href="https://www.inet.edu.ar/index.php/estudiantes-tecnicos-de-los-paises-del-mercosur-realizaron-hackathon-de-innovacion-y-prototipado-en-paraguay/">Web <span className="text-secondary">Instituto Nacional de Educación Tecnológica.</span></a> </li>
                </ul>

                <h1 className="text-[28px] leading-tight text-center md:text-left md:text-5xl md:mt-4">Notas <span className="font-bold text-secondary">Periodísticas </span></h1>

                <ul className="text-center text-2xl mt-16 mb-16 md:text-start">
                    <li className="px-4"><a href="https://www.youtube.com/watch?v=cKBTKoPhx_k">Diario <span className="text-secondary">Sur.</span></a> </li>
                    <li className="px-4"><a href="https://www.facebook.com/reel/205381379159685">Ministerio de <span className="text-secondary">Educación Argentina.</span> </a></li>
                </ul>

                <h1 className="text-[30px] leading-tight text-center md:text-left md:text-5xl md:mt-4">Reconocimientos <span className="font-bold text-secondary">Destacados </span></h1>

                <ul className="text-start text-2xl mt-16 mb-16">
                    <li className="max-w-2xl px-4"><a href="https://www.estebanecheverria.gob.ar/fernando-gray-recibio-a-estudiantes-de-la-escuela-tecnica-n-1/" className="text-[28px]">Intendente de <span className="text-secondary">Esteban Echeverría:</span></a> <br/><br/><span className="text-[18px] md:text-[20px]">El intendente Fernando Gray de esteban echeverría nos invitó a la municipalidad a tener una charla con el equico que se encargó de representar a la Argentina en el Hackathón y nos recompensó con un subsidio de $500.000 para la compra de una impresora 3D y un nuevo proyector para la escuela.</span></li>
                    <li className="max-w-2xl mt-8 px-4"><a href="https://www.argentina.gob.ar/noticias/perczyk-entrego-diplomas-estudiantes-de-escuelas-tecnicas-que-participaron-de-hackathon-en" className="text-[28px]">Ministro de <span className="text-secondary">Educación de la Nación Argentina:</span></a> <br/><br/> <span className="text-[18px] md:text-[20px]">El ministro de educación argentina nos convocó al INET a dar una charla respecto a la experiencia vivida en Paraguay frente a representantes de las 23 provincias. En dicho acto también se nos otorgó un certificado de participación a modo de reconocimiento por el desempeño logrado.</span></li>
                </ul>

                <h1 className="mt-12 text-[30px] leading-tight text-center  md:text-left md:text-5xl md:mt-0">Mi {''}
                    <span className="font-bold text-secondary">trayectoria educativa</span>
                </h1>
                <TimeLineEducation />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;