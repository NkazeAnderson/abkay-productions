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
      {/* Slightly lower ambient to preserve contrast on the model. */}
      <ambientLight intensity={0.72} color="#ffd9b3" />
      {/* Warm key light for sunset punch. */}
      <directionalLight
        position={[-6, 2, -10]}
        intensity={3.1}
        color="#ffb57a"
        castShadow
      />
      {/* Cool fill to keep specular shape definition. */}
      <directionalLight position={[4, 3, 2]} intensity={1.25} color="#a9c8ff" />
      {/* Rim edge highlight so silhouette reads over the video panel. */}
      <directionalLight position={[0, 4, 8]} intensity={0.95} color="#fff1da" />
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
          top: "calc(86vh - 14rem)",
          width: "clamp(250px, 30vw, 500px)",
          height: "clamp(250px, 46vh, 520px)",
        }}
      >
        <Canvas
          className="h-full w-full"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          camera={{
            position: [0.4, 2.9, 7.2],
            rotation: [-0.12, 0, 0],
            fov: 42,
          }}
        >
          <DayLighting />
          <AnimatedAssets />
        </Canvas>
      </div>
    </div>
  );
}
