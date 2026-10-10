import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RegisterGsapPlugins from "@/components/RegisterGsapPlugins";
import NavBar from "@/components/layout/NavBar";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const geistSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});

const noto = Noto_Sans({
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-noto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Music Production, Fast Food & Entertainment in Douala`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AB KAY Productions",
    "AB KAY Music Production",
    "music production Cameroon",
    "recording studio Douala",
    "Cameroonian artists",
    "AB KAY Fast Food",
    "AB KAY Complex",
    "Douala entertainment",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Entertainment At It's Best`,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrefour Matango, Japoma",
    addressLocality: "Douala",
    addressCountry: "CM",
  },
  telephone: "+237654894282",
  sameAs: [
    "https://web.facebook.com/abkayp/",
    "https://www.tiktok.com/@ab.kay.production",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${noto.variable} antialiased`}
    >
      <RegisterGsapPlugins />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        <SmoothScrollProvider>
          <LoadingScreen />
          <NavBar />
          {children}
        </SmoothScrollProvider>
        {/* Hidden Google Translate widget container */}
        <div id="google_translate_element" style={{ display: "none" }} />
        <Script id="google-translate-init" strategy="afterInteractive">{`
          window.googleTranslateElementInit = function() {
            if (window.google && window.google.translate) {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr',
                autoDisplay: false,
              }, 'google_translate_element');
            }
          };
        `}</Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
