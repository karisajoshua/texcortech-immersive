import HeroLoader from "@/components/HeroLoader";

export default function Home() {
  return (
    <main>
      <HeroLoader />
      <section className="manifesto">
        <p className="eyebrow">TEXCORTECH SYSTEMS</p>
        <h2>We engineer the systems behind ambitious businesses.</h2>
        <p>Software · Cloud · AI & Automation · Cybersecurity</p>
      </section>
    </main>
  );
}
