import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "PrepByte: AI-Powered Real-Time Interview Platform for Smarter Hiring",
  description:
    "PrepByte is an intelligent voice-driven interview platform that helps companies assess candidates in real time using conversational AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} antialiased pattern`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
