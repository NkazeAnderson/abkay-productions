import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RegisterGsapPlugins from "@/components/RegisterGsapPlugins";
import NavBar from "@/components/layout/NavBar";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

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
  title: "AB Kay Productions",
  description: "Where life meets entertainment",
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
