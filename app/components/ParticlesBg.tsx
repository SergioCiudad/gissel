"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="particles-bg">
      <Particles
        id="bg-particles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 25,
              density: { enable: true },
            },
            color: {
              value: ["#e8829a", "#b8a4d0", "#d4a574", "#f4a5b8", "#e8b4a0"],
            },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.06, max: 0.18 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: { enable: true, speed: 1, sync: false },
            },
            move: {
              enable: true,
              speed: 0.35,
              direction: "none" as const,
              random: true,
              straight: false,
              outModes: { default: "out" as const },
            },
            links: {
              enable: true,
              distance: 130,
              color: "#b8a4d0",
              opacity: 0.05,
              width: 0.8,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab" as const,
              },
            },
            modes: {
              grab: {
                distance: 120,
                links: { opacity: 0.12 },
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
