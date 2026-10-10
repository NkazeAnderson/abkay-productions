import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Music Production: Recording, Mixing & Our Artists",
  description:
    "AB KAY Music Production offers studio recording, mixing and mastering, music videos and beat production, and is home to artists Lexy, Mukolah and Oken.",
  path: "/industries/music-production",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
