import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with AB KAY Productions at Carrefour Matango, Japoma, Douala, Cameroon. Reach us on WhatsApp for music production, food and complex enquiries.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
