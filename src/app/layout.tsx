import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Gonzalo Ramos",
  description: "Software developer and student based on Argentina",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-black text-[#d1d5db]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
