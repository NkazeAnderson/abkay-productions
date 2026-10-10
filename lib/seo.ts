import type { Metadata } from "next";

// Set NEXT_PUBLIC_SITE_URL in the hosting environment to the live domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://abkayproduction.com"
).replace(/\/$/, "");

export const SITE_NAME = "AB KAY Productions";
export const SITE_DESCRIPTION =
  "AB KAY Productions is a Cameroonian entertainment brand in Douala: AB KAY Music Production (recording, mixing, mastering, music videos), AB KAY Fast Food and AB KAY Complex.";
export const DEFAULT_OG_IMAGE = "/logo.png";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

/** Build complete metadata (title, description, canonical, Open Graph, Twitter) for a page. */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
}: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [{ url: image, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
