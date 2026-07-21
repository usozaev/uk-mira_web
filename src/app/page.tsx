import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import News from "@/components/News";
import FocusSlider from "@/components/FocusSlider";
import RussiaMap from "@/components/RussiaMap";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <News />
      <FocusSlider />
      <RussiaMap />
      <Projects />
    </main>
  );
}
