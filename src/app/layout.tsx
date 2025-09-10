import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-black text-[#d1d5db]`}>
        <div className="min-h-dvh flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
