import Hero from "@/components/sections/Hero";
import QueFem from "@/components/sections/QueFem";
import QuiSom from "@/components/sections/QuiSom";
import Equip from "@/components/sections/Equip";
import Esdeveniments from "@/components/sections/Esdeveniments";
import CtaFinal from "@/components/sections/CtaFinal";

// Pàgina principal: les seccions s'afegeixen aquí en ordre
export default function Home() {
  return (
    <main>
      <Hero />
      <QueFem />
      <QuiSom />
      <Equip />
      <Esdeveniments />
      <CtaFinal />
    </main>
  );
}