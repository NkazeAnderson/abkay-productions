"use client";
import { UtensilsCrossed, Coffee, ShoppingBag } from "lucide-react";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

export default function FastFoodPage() {
  return (
    <IndustryPageLayout
      name="Fast Food"
      tagline="Good Food, Fast Service"
      description="Fresh ingredients, bold flavours, and quick service — AB KAY Fast Food is built for people who want a satisfying meal without the wait."
      offerings={[
        {
          icon: <ShoppingBag size={24} />,
          title: "Snacks",
          description:
            "Light bites and quick snacks prepared fresh and served fast, perfect for any time of day.",
        },
        {
          icon: <UtensilsCrossed size={24} />,
          title: "Meals",
          description:
            "Full hearty meals made with quality ingredients and bold flavour that keeps you coming back.",
        },
        {
          icon: <Coffee size={24} />,
          title: "Drinks",
          description:
            "Hot and cold beverages carefully chosen to complement every meal or snack on our menu.",
        },
      ]}
      ctaMessage="Our full menu and online ordering experience will be available very soon. Follow us to be first in line when we open our doors."
    />
  );
}
