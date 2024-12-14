import AvatarPortfolio from "@/Components/avatar-portfolio";
import CircleImage from "@/Components/circle-image";
import ContainerPage from "@/Components/container";
import PortfolioBox from "@/Components/portfolio-box";
import TransitionPage from "@/Components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 
        <div>
            <ContainerPage> 
                <TransitionPage />
                <AvatarPortfolio />
                <CircleImage />

                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-3xl leading-tight text-center md:text4xl md:mb-5">Mis últimos <span className="text-secondary font-bold">trabajos realizados</span></h1>
                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm: grid-cols-2 md:grid-cols-4">
                        {dataPortfolio.map((data)=>(
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>
            </ContainerPage>
        </div>
     );
}
 
export default PortfolioPage;