"use client";

import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect } from "react";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";

export function HeroModel({ rotation }: { rotation: number[] }) {
  const { scene } = useGLTF("/ABK-v2.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Since it's a single object, we ensure all its meshes cast and receive shadows
  useMemo(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Ensure materials react well to the environment
        const mesh = child as THREE.Mesh;
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.envMapIntensity = 1.2;
          mesh.material.roughness = Math.min(mesh.material.roughness, 0.8);
        }
      }
    });
  }, [scene]);

  // Scroll-driven animation
  useLayoutEffect(() => {
    if (!modelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(modelRef.current!.rotation, {
        y: Math.PI * 0.5 - Math.PI / 4, // Rotate 90 degrees more from base
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.to(modelRef.current!.position, {
        z: -2,
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);



  return (
    <Center top>
      <primitive ref={modelRef} object={scene} scale={1} rotation={rotation} />
    </Center>
  );
}

useGLTF.preload("/ABK-v2.glb");
