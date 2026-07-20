import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = "https://bestmedicareadvisor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Medicare Advisor | Find the Right Medicare Plan",
    template: "%s | Best Medicare Advisor",
  },
  description:
    "Compare Medicare Advantage, Supplement, and Part D plans from top carriers in your area. Speak with a licensed insurance agent and find the right coverage at no cost.",
  keywords: [
    "Medicare plans",
    "Medicare Advantage",
    "Medicare Supplement",
    "Medicare Part D",
    "licensed insurance agent",
    "turning 65 Medicare",
  ],
  openGraph: {
    title: "Best Medicare Advisor | Find the Right Medicare Plan",
    description:
      "Compare Medicare plans from top carriers and talk to a licensed agent, at no cost to you.",
    url: siteUrl,
    siteName: "Best Medicare Advisor",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}