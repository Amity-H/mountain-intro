import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_TC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MountainQuiz from "@/components/MountainQuiz";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif-tc",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "台灣山林 | 走進山與光的懷抱",
  description: "探索台灣著名山林 — 玉山、阿里山、太魯閣、雪山、合歡山與溪頭，感受森林裡的陽光與寧靜。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifTC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <MountainQuiz />
      </body>
    </html>
  );
}
