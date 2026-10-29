import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranav Kale // AI Engineer & Systems Builder",
  description:
    "Tactical command interface portfolio of Pranav Kale — AI Engineer specializing in Autonomous Agentic AI, Hybrid RAG Architectures, Computer Vision, and Production Intelligent Systems.",
  keywords: [
    "Pranav Kale",
    "AI Engineer",
    "Machine Learning",
    "Self-RAG",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Computer Engineering",
  ],
  authors: [{ name: "Pranav Kale" }],
  creator: "Pranav Kale",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070A] text-[#E6ECE8] selection:bg-[#34D399]/20 selection:text-[#34D399] relative">
        {/* Ambient tactical background grid & subtle scanlines */}
        <div className="fixed inset-0 hud-grid-overlay pointer-events-none opacity-40 z-0" />
        <div className="fixed inset-0 hud-scanlines opacity-10 pointer-events-none z-0" />

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
