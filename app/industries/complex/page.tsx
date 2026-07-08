"use client";
import { Wine, Beer, Utensils } from "lucide-react";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

export default function ComplexPage() {
  return (
    <IndustryPageLayout
      name="Complex"
      tagline="Where Good Times Flow"
      description="The AB KAY Complex is a premium social destination — combining quality food, craft beverages, and a relaxed atmosphere for nights that are worth remembering."
      offerings={[
        {
          icon: <Utensils size={24} />,
          title: "Food",
          description:
            "Carefully curated dishes designed to complement your drinks and elevate your evening.",
        },
        {
          icon: <Beer size={24} />,
          title: "Beer & Whisky",
          description:
            "A curated selection of top local and imported beers alongside premium whisky labels.",
        },
        {
          icon: <Wine size={24} />,
          title: "Wine Service",
          description:
            "Curated wines for every palate — from casual social sips to milestone celebrations.",
        },
      ]}
      ctaMessage="The AB KAY Complex full experience and reservations platform is on its way. Subscribe to be notified the moment we launch."
    />
  );
}
