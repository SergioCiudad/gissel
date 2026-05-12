"use client";

import dynamic from "next/dynamic";

const GisselLanding = dynamic(() => import("./components/GisselLanding"), {
  ssr: false,
});
const ParticlesBg = dynamic(() => import("./components/ParticlesBg"), {
  ssr: false,
});
const FloatingHearts = dynamic(() => import("./components/FloatingHearts"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="page-wrapper">
      <ParticlesBg />
      <FloatingHearts />
      <GisselLanding />
    </div>
  );
}
