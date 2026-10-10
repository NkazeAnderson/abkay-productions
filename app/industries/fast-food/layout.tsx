import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fast Food",
  description:
    "AB KAY Fast Food serves fresh meals, snacks and drinks made fast without sacrificing taste, in Douala, Cameroon.",
  path: "/industries/fast-food",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
