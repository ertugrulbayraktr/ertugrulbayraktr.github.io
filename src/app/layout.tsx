import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ertuğrul Bayraktar',
    default: 'Ertuğrul Bayraktar | Software Engineering Student',
  },
  description: "Personal portfolio of Ertuğrul Bayraktar, showcasing projects and skills in software development",
  keywords: ["Ertuğrul Bayraktar", "Portfolio", "Software Engineering", "Software Development", "React", "Next.js", "Spring Boot", "Trading", "Finance"],
  authors: [{ name: "Ertuğrul Bayraktar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#FBFCFC] text-black`}
      >
        <Header />
        <main className="flex-grow pt-20 md:pt-24 pb-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
