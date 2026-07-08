import { useGSAP } from "@gsap/react";
import {
  Box,
  Center,
  Environment,
  Float,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { Group } from "three";
import { HeroModel } from "./HeroModel";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function AnimatedAssets() {
  const modelGroupRef = useRef<Group>(null);
  const { camera } = useThree();
  const followMouse = useRef(false);

  // Inside your 3D Scene Component:
  useGSAP(() => {
    if (!modelGroupRef.current) return;

    const baseRotationX = modelGroupRef.current.rotation.x;
    const baseRotationY = modelGroupRef.current.rotation.y;

    // 2. Set the maximum hover range deviation (e.g., 20 degrees max shift)
    const maxDeltaX = Math.PI / 40;
    const maxDeltaY = Math.PI / 3;

    const handleMouseMove = (e: MouseEvent) => {
      if (!followMouse.current) {
        return;
      }
      // 3. Normalized mouse coordinates (-1 to 1)
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;

      // 4. Calculate target values relative to the base positioning
      const targetRotationY = baseRotationY + normalizedX * maxDeltaY;
      const targetRotationX = baseRotationX + normalizedY * maxDeltaX;

      // 4. Animate both rotation axes smoothly in a single call
      gsap.to(modelGroupRef.current!.rotation, {
        y: targetRotationY, // Smooth horizontal tracking
        x: targetRotationX, // Smooth vertical tilting
        duration: 1, // Premium damping effect
        ease: "elastic", // Clean deceleration curve
        overwrite: "auto", // Clear out overlapping frames to optimize performance
      });
    };

    // 5. Initialize tracking listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [modelGroupRef.current, followMouse.current]);

  useGSAP(() => {
    console.log("model", modelGroupRef.current, "Camera", camera);
    const scrollTriggerProps: ScrollTrigger.Vars = {
      trigger: "#homeAbout",
      start: "top 60%",
      end: "top 10%",

      scrub: 1,
      // markers: { startColor: "green", endColor: "red" },
    };

    if (!modelGroupRef.current) {
      return () => ScrollTrigger.refresh();
    }
    const tl = gsap.timeline({ scrollTrigger: scrollTriggerProps });

    const currentCamera = camera;
    const model = modelGroupRef.current;
    const onUpdate = () => {
      currentCamera.lookAt(model.position);
    };

    tl.to(currentCamera.position, {
      x: 0,
      y: 2,
      z: 10,
      ease: "none",
      duration: 6,
      onUpdate,
      onStart: () => {
        followMouse.current = false;
      },
    });

    tl.to(modelGroupRef.current.position, {
      x: 6,
      duration: 6,
      ease: "none",
      onUpdate: () => {
        if (followMouse.current) {
          followMouse.current = false;
        }
      },
    });
    tl.to(
      modelGroupRef.current.rotation,
      {
        y: -0.7 - Math.PI * 2,
        duration: 6,
        ease: "none",
        onComplete: () => {
          followMouse.current = true;
        },
      },
      "<",
    );

    // Additional section animations (correct triggers per spec)
    // Keep references to tweens so we can kill them on cleanup
    let ceoFloatTween: gsap.core.Tween | null = null;

    // industries -> ceo: (NO animation when entering #industries)
    // When the user scrolls from `#industries` into `#ceo`, we want
    // a quick zoom toward camera and move left (x: -3) with intensified float. Trigger on `#ceo`.
    const ceoTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#ceo",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
        onEnter: () => {
          followMouse.current = false;
          // non-scrubbed looped float while in CEO section
          ceoFloatTween = gsap.to(model.position, {
            y: "+=0.1",
            duration: 1.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
        onLeave: () => {
          if (ceoFloatTween) {
            ceoFloatTween.kill();
            ceoFloatTween = null;
          }
          followMouse.current = true;
        },
        onEnterBack: () => {
          followMouse.current = false;
          ceoFloatTween = gsap.to(model.position, {
            y: "+=0.1",
            duration: 1.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
        onLeaveBack: () => {
          if (ceoFloatTween) {
            ceoFloatTween.kill();
            ceoFloatTween = null;
          }
          followMouse.current = true;
        },
      },
    });
    // scrubbed movement: zoom in and shift left by -3 units on x (ease none)
    ceoTL.to(model.position, { z: 3, x: 5, duration: 1, ease: "none" });

    // gallery -> testimonials: continuous rotation while in view
    // Trigger on `#testimonials` so nothing happens when entering `#gallery`.
    const testimonialsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
        onEnter: () => {
          followMouse.current = false;
        },
        onLeave: () => {
          followMouse.current = true;
        },
        onEnterBack: () => {
          followMouse.current = false;
        },
        onLeaveBack: () => {
          followMouse.current = true;
        },
      },
    });
    // scrubbed continuous rotation (ease none)
    testimonialsTL.to(model.rotation, {
      y: "+=" + Math.PI * 2,
      duration: 1,
      ease: "none",
    });

    // cleanup for this GSAP context
    return () => {
      tl.kill();
      ceoTL.kill();
      testimonialsTL.kill();
      if (ceoFloatTween) ceoFloatTween.kill();
      ScrollTrigger.refresh();
    };
  }, [modelGroupRef.current]);
  return (
    <>
      <group ref={modelGroupRef}>
        <Environment preset="sunset" />
        <pointLight position={[0, 0, -2]} intensity={10} color="white" />
        <Center>
          <Float>
            <Suspense fallback={<Box />}>
              <HeroModel rotation={[Math.PI / 2, 0, 0]} />
            </Suspense>
          </Float>
        </Center>
      </group>
    </>
  );
}

export default AnimatedAssets;
