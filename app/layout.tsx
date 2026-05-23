import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import RegisterGsapPlugins from "@/components/RegisterGsapPlugins";

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
    <html lang="en" className={`${geistSans.variable} ${noto.variable} h-full antialiased`}>
      <RegisterGsapPlugins />
      <body>
        <div className="fixed z-50 top-0 w-screen ">
          <div className="flex items-center justify-between">
            <div id="logoAndName" className=" relative ">
              <div className="flex gap-2 items-center ">
                <div className="relative w-20 aspect-square">
                  <Image src={"/logo.png"} alt="Logo" fill />
                </div>
                {/* should have a width that grows from 0  to its actual width */}
                <h1
                  id="CompanyName"
                  className=" font-bold uppercase text-black bg-primary text-xl p-2 rounded-lg text-nowrap overflow-hidden"
                >
                  AB KAY Productions
                </h1>
              </div>
            </div>
            <div className="relative flex gap-4 items-center top-[100vh] navLinks py-4 px-4 bg-black rounded-full">
              <p className="font-medium">About</p>
              <p className="font-medium">Contact us</p>
            </div>
            <div></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
