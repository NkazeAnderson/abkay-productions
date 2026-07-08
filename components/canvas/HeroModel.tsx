"use client";

import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useLayoutEffect } from "react";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";

export function HeroModel({ rotation }: { rotation: number[] }) {
  const { scene } = useGLTF("/ABK-v2.glb", true);

  return <primitive object={scene} scale={1} rotation={rotation} />;
}

useGLTF.preload("/ABK-v2.glb", true);
