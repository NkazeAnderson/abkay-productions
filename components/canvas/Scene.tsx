"use client";

import {
  Environment,
  Float,
  PerspectiveCamera,
  ContactShadows,
  OrbitControls,
  Html,
  Sky,
  Stars,
  Center,
  Box,
  PerspectiveCameraProps,
} from "@react-three/drei";
import {
  Ref,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { HeroModel } from "./HeroModel";
import Hero from "../overlay/Hero";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera as PerspectiveCameraT } from "three";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";
import gsap from "gsap";

export default function Scene() {
  return (
    <div className="h-screen w-screen bg-gray-950 fixed z-0">
      <Suspense fallback={null}>
        <Canvas>
          {/* <OrbitControls /> */}
          <Camera />
          {/* Cinematic Lighting Setup */}
          <Sky azimuth={0} sunPosition={0} />
          <Stars />
          <ambientLight intensity={1} />

          {/* Main Key Light */}

          {/* Fill Light */}
          <pointLight
            position={[0, 0, 5]}
            intensity={2}
            color="white"
            rotation={[Math.PI / 2, 0, 0]}
          />

          {/* Rim Light for depth */}
          <spotLight
            position={[0, 0, 2]}
            intensity={40}
            angle={0.5}
            penumbra={1}
            color="white"
          />
          <spotLight
            position={[0, 3, 0]}
            intensity={2}
            angle={Math.PI / 2}
            penumbra={1}
            color="white"
          />
          <Center>
            <Float
              speed={1}
              rotationIntensity={1}
              floatIntensity={0.5}
              scale={1}
            >
              <HeroModel rotation={[Math.PI / 2, 0, 0]} />
            </Float>
          </Center>

          {/* <HeroModel rotation={[Math.PI / 2, 0, 0]} /> */}

          {/* Contact Shadows for grounding */}
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
            color="#000000"
          />

          {/* <Environment preset="studio" /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}

function Camera() {
  const camera = useRef<PerspectiveCameraT>(null);
  useLayoutEffect(() => {
    if (!camera.current) {
      return;
    }
    gsap.to(camera.current.position, {
      y: 0,
      z: 10,
      x: -8,
      scrollTrigger: {
        trigger: "#heroSection",
        scroller: "#homePage",
        start: "bottom center",
        end: "bottom -100%", // Continues progressing well after the header
        scrub: 1, // Ultra-smooth progression
      },
    });
    gsap.to(camera.current.rotation, {
      x: 0,
      scrollTrigger: {
        trigger: "#heroSection",
        scroller: "#homePage",
        start: "bottom center",
        end: "bottom -100%", // Continues progressing well after the header
        scrub: 1, // Ultra-smooth progression
      },
    });
  }, [camera.current]);

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      // position={[0, 0, 12]}
      // rotation={[0, 0, 0]}
      position={[0, 12, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      fov={45}
    />
  );
}
