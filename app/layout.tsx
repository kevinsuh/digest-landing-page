import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Digest - The Universal Bookmark",
  description: "Save any URL via SMS. Get AI-powered summaries and audio digests. Turn your commute into learning time with Digest.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "32x32"
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
