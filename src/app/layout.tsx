import React from "react";
import "@/styles/globals.css";
import "@fontsource/space-grotesk";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Akhilesh Bonde | Portfolio",
  description: "Personal portfolio of Akhilesh Bonde - Software Engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] font-['Space_Grotesk'] overflow-x-hidden perspective">{children}</body>
    </html>
  );
}
