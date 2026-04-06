// src/pages/Home.jsx
import HeroPC from "../components/HeroPC";
import HeroSP from "../components/HeroSP";
import { useIsPC } from "../hooks/useIsPC";

export default function Home() {
  const isPC = useIsPC();

  return (
    <main className="bg-bg text-text-primary">
      {/* PC / SP DOM 完全分離 */}
      {isPC ? <HeroPC /> : <HeroSP />}
    </main>
  );
}