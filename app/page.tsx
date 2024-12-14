import CoverParticles from "@/Components/CoverPaticles";
import Introduction from "@/Components/introction";
import TransitionPage from "@/Components/transition-page"

export default function Home() {
  return (
    <main>
      <div className="flex h-[120vh] bg-no-repeat bg-gradient-cover">
          <TransitionPage />
          <CoverParticles />
          <Introduction />
      </div>
    </main>
  );
}
