import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Script from "next/script";

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
    "Compare Medicare Advantage, Supplement, and Part D plans from top carriers. Speak with a licensed agent and find the right coverage at no cost.",
  keywords: [
    "Medicare plans",
    "Medicare Advantage",
    "Medicare Supplement",
    "Medicare Part D",
    "licensed insurance agent",
    "turning 65 Medicare",
  ],

  // ✅ Google Search Console Verification
  verification: {
    google: "tReOlbVwZIVNSvAFkxK7io3qhHuF37XhCgT2aPhcjSI",
  },

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
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
            {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QGDRKRZKS6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QGDRKRZKS6');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-807CYQCC8H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-807CYQCC8H');
          `}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
          <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="XLcSOVP/STzq0O1TpP4fHQ"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}