import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { AudioPlayer } from "@/components/audio-player";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Footsteppa",
  description: "Underground music broadcasting since 2002 ",
  generator: "codingOG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <MainNav />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import "./globals.css";
