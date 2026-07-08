import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
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
      </body>
    </html>
  );
}
