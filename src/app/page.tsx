import dynamic from "next/dynamic";

const ImmersiveHero = dynamic(() => import("@/components/ImmersiveHero"), { ssr: false });

export default function Home() {
  return <main><ImmersiveHero /><section className="manifesto"><p className="eyebrow">TEXCORTECH SYSTEMS</p><h2>We engineer the systems behind ambitious businesses.</h2><p>Software · Cloud · AI & Automation · Cybersecurity</p></section></main>;
}
