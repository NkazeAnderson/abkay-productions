"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import AnimatedAssets from "./AnimatedAssets";

function DayLighting() {
  return (
    <>
      {/* Midday sky — sun high and slightly behind camera */}
      <Sky sunPosition={[0, 10, -5]} turbidity={4} rayleigh={0.5} />
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
  return (
    <div className="h-screen w-screen bg-black fixed z-0">
      <Canvas
        // dpr={1}
        gl={{
          antialias: true,
          powerPreference: "low-power",
        }}
        camera={{ position: [0, 24, 0], rotation: [-Math.PI / 2, 0, 0] }}
      >
        <DayLighting />
        <AnimatedAssets />
      </Canvas>
    </div>
  );
}
