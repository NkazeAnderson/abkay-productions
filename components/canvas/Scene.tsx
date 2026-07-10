"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import AnimatedAssets from "./AnimatedAssets";

function SkyBase() {
  return <Sky sunPosition={[0, 10, -5]} turbidity={4} rayleigh={0.5} />;
}

function DayLighting() {
  return (
    <>
      {/* Warm, strong ambient mimicking open sky bounce light */}
      <ambientLight intensity={1.4} color="#fff4d6" />
      {/* Primary sun — overhead directional */}
      <directionalLight
        position={[4, 10, 2]}
        intensity={6}
        color="#fffbe0"
        castShadow
      />
      {/* Soft fill from opposite side to reduce harsh shadow */}
      <directionalLight
        position={[-4, 4, -2]}
        intensity={1.2}
        color="#cde4ff"
      />
    </>
  );
}

export default function Scene() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React's `muted` JSX prop is not reflected to the DOM attribute in all browsers.
  // Setting it imperatively ensures Firefox respects it and allows autoplay.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Sky: base background */}
      <Canvas
        className="absolute! inset-0 z-0"
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <SkyBase />
      </Canvas>

      {/* Video: bottom layer above sky (top-right, 80% viewport size with frame padding) */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-[80vh] w-[80vw] rounded-2xl bg-primary/25 p-4 md:p-6">
        <video
          ref={videoRef}
          className="h-full w-full rounded-xl bg-primary/20 object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Asset: middle layer above video, anchored near video's bottom-right overlap */}
      <div
        className="pointer-events-none absolute z-20"
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
