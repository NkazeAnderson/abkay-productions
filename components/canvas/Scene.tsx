"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import AnimatedAssets from "./AnimatedAssets";

function SkyBase() {
  return (
    <Sky
      sunPosition={[-6, 1.2, -10]}
      turbidity={8}
      rayleigh={1.4}
      mieCoefficient={0.02}
      mieDirectionalG={0.92}
    />
  );
}

function DayLighting() {
  return (
    <>
      {/* Dusk ambient: softer and warmer than midday */}
      <ambientLight intensity={0.95} color="#ffd9b3" />
      {/* Low sun near the horizon for 6pm tone */}
      <directionalLight
        position={[-6, 2, -10]}
        intensity={2.6}
        color="#ffb57a"
        castShadow
      />
      {/* Cool sky fill on the opposite side */}
      <directionalLight position={[4, 3, 2]} intensity={0.9} color="#a9c8ff" />
    </>
  );
}

function HeroVideoLayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // iPhone Safari may defer playback until the element is fully ready.
      }
    };

    void playVideo();

    const handleCanPlay = () => {
      void playVideo();
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-[50vh] w-[90vw] rounded-2xl bg-primary/20 p-4 md:h-[80vh] md:w-[80vw] md:p-6">
      <video
        ref={videoRef}
        className="h-full w-full rounded-xl bg-primary/20 object-contain"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-sky-200">
      {/* Sky background layer */}
      <Canvas
        className="absolute! inset-0 z-0"
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "low-power",
        }}
      >
        <SkyBase />
      </Canvas>

      <HeroVideoLayer />

      {/* Transparent 3D asset layer above video */}
      <div
        className="pointer-events-none absolute z-30"
        style={{
          right: "clamp(0.75rem, 2vw, 1.5rem)",
          top: "calc(80vh - 16rem)",
          width: "clamp(220px, 28vw, 420px)",
          height: "clamp(220px, 42vh, 460px)",
        }}
      >
        <Canvas
          className="h-full w-full"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "low-power",
          }}
          camera={{ position: [0, 4.5, 10], rotation: [-0.2, 0, 0] }}
        >
          <DayLighting />
          <AnimatedAssets />
        </Canvas>
      </div>
    </div>
  );
}
