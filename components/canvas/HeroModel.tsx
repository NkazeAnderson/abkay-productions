"use client";

import { useGLTF } from "@react-three/drei";

export function HeroModel({ rotation }: { rotation: number[] }) {
  const { scene } = useGLTF("/ABK-v2.glb", true);

  return <primitive object={scene} scale={1.6} rotation={rotation} />;
}

useGLTF.preload("/ABK-v2.glb", true);
