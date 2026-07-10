import { useGSAP } from "@gsap/react";
import { Box, Center, Environment, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Group } from "three";
import { HeroModel } from "./HeroModel";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function AnimatedAssets() {
  const modelGroupRef = useRef<Group>(null);
  const { camera } = useThree();

  // Choreographed poses for section-to-section movement.
  const centerPose = { x: 0.5, y: -0.2, z: 0 };
  const rightBottomPose = { x: 1.5, y: -1.6, z: 0 };
  const ceoLeftPose = { x: -3.6, y: -0.9, z: 3.4 };
  const bottomRightPose = { x: 1.8, y: -1.7, z: 0.2 };

  useGSAP(() => {
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
    });

    tl.to(modelGroupRef.current.position, {
      x: rightBottomPose.x,
      y: rightBottomPose.y,
      z: rightBottomPose.z,
      duration: 6,
      ease: "none",
    });
    tl.to(
      modelGroupRef.current.rotation,
      {
        y: -0.7 - Math.PI * 2,
        duration: 6,
        ease: "none",
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
        },
        onEnterBack: () => {
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
        },
      },
    });
    // CEO section: zoom in and move left toward the profile image zone.
    ceoTL.to(model.position, {
      x: ceoLeftPose.x,
      y: ceoLeftPose.y,
      z: ceoLeftPose.z,
      duration: 1,
      ease: "none",
    });

    // After CEO, settle the asset back to bottom-right.
    const galleryTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 65%",
        end: "top 10%",
        scrub: 1,
      },
    });
    galleryTL.to(model.position, {
      x: bottomRightPose.x,
      y: bottomRightPose.y,
      z: bottomRightPose.z,
      duration: 1,
      ease: "none",
    });

    // gallery -> testimonials: continuous rotation while in view
    // Trigger on `#testimonials` so nothing happens when entering `#gallery`.
    const testimonialsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
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
      galleryTL.kill();
      testimonialsTL.kill();
      if (ceoFloatTween) ceoFloatTween.kill();
      ScrollTrigger.refresh();
    };
  }, [modelGroupRef.current]);
  return (
    <>
      <group
        ref={modelGroupRef}
        position={[centerPose.x, centerPose.y, centerPose.z]}
      >
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
