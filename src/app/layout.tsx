import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-portfolio.vercel.app"),
  title: "Aman Kumar · Software Engineer",
  description:
    "Aman Kumar is a software engineer at Saarathi Finance and a B.Tech CSE (AI & DS) student at IIIT Manipur, building full-stack loan and product systems.",
  openGraph: {
    title: "Aman Kumar · Software Engineer",
    description:
      "Software Engineer at Saarathi Finance. Full-stack work on loan origination, collections, and telecaller workflows, plus competitive programming.",
    url: "https://ayush-portfolio.vercel.app",
    siteName: "Aman Kumar Portfolio",
    images: [
      {
        url: "https://opengraph.githubassets.com/1/akt9802/prasikshan",
        width: 1200,
        height: 630,
        alt: "Aman Kumar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar · Software Engineer",
    description:
      "Software Engineer at Saarathi Finance building full-stack loan and product systems.",
    images: [
      "https://opengraph.githubassets.com/1/akt9802/prasikshan",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
