"use client";

import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin)

function RegisterGsapPlugins() {
  return null;
}

export default RegisterGsapPlugins;
