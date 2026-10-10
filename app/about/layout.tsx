import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about AB KAY Productions: our mission, vision and the three industries we serve in Douala, Cameroon: music production, fast food and the AB KAY Complex.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
