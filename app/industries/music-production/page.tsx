"use client";
import { Mic2, Film, UserCheck } from "lucide-react";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

export default function MusicProductionPage() {
  return (
    <IndustryPageLayout
      name="Music Production"
      tagline="Where Sound Meets Vision"
      description="From raw talent to polished artistry — AB KAY Music Production gives artists the professional tools, creative environment, and expertise to produce world-class music and visuals."
      offerings={[
        {
          icon: <Mic2 size={24} />,
          title: "Music Production",
          description:
            "State-of-the-art studio sessions, mixing, and mastering tailored to your sound and style.",
        },
        {
          icon: <Film size={24} />,
          title: "Video Production",
          description:
            "Cinematic music videos and visual content that bring your music to life on screen.",
        },
        {
          icon: <UserCheck size={24} />,
          title: "Artist Signing",
          description:
            "We identify and develop emerging talent, opening doors to the broader entertainment industry.",
        },
      ]}
      ctaMessage="Our full booking platform and studio catalogue are launching very soon. Stay connected and be the first to know when we go live."
    />
  );
}
