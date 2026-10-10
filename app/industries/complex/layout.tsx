import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Complex: Food, Drinks & Nightlife",
  description:
    "The AB KAY Complex in Douala is where friends meet for good food, great drinks and a lively atmosphere.",
  path: "/industries/complex",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
