import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Z.ai Model 4.5 Benchmark Report",
    template: "%s | Z.ai Model 4.5 Benchmark"
  },
  description: "Comprehensive benchmark report for Z.ai's 4.5v model, testing capabilities in geography, visual positioning, and webpage replication tasks.",
  keywords: ["Z.ai", "AI Benchmark", "Model 4.5", "Geography", "Visual Positioning", "Webpage Replication", "AI Testing"],
  authors: [{ name: "Hasin Raiyan", url: "https://hasin.vercel.app" }],
  creator: "Hasin Raiyan",
  publisher: "Z.ai",
  metadataBase: new URL("https://zai-4.5v-benchmark.vercel.app"),
  openGraph: {
    title: "Z.ai Model 4.5 Benchmark Report",
    description: "Comprehensive benchmark report for Z.ai's 4.5v model, testing capabilities in geography, visual positioning, and webpage replication tasks.",
    url: "https://zai-4.5v-benchmark.vercel.app",
    siteName: "Z.ai Model 4.5 Benchmark",
    images: [
      {
        url: "/Images/MainWaldo.jpg",
        width: 1200,
        height: 630,
        alt: "Z.ai Model 4.5 Benchmark Report",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z.ai Model 4.5 Benchmark Report",
    description: "Comprehensive benchmark report for Z.ai's 4.5v model, testing capabilities in geography, visual positioning, and webpage replication tasks.",
    images: ["/Images/MainWaldo.jpg"],
    creator: "@hasinraiyan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Images/MainWaldo.jpg" />
        <meta name="theme-color" content="#050505" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#ededed]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
