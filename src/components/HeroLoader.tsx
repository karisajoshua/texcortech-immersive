"use client";

import dynamic from "next/dynamic";

const ImmersiveHero = dynamic(() => import("@/components/ImmersiveHero"), {
  ssr: false,
  loading: () => <section className="hero hero-loading" aria-label="Loading immersive experience" />,
});

export default function HeroLoader() {
  return <ImmersiveHero />;
}
