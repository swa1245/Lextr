import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Chatbot from "@/app/components/Chatbot";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/app/components/SmoothScroll";
import TransitionProvider from "@/app/components/TransitionProvider";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <SmoothScroll>
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </SmoothScroll>
        <Chatbot />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
