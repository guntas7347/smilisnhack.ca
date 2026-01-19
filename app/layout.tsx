import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilinshack.com"),
  title:
    "SmilinShack | Premium Photo Booth Rentals in Brampton & Greater Toronto Area",
  description:
    "SmilinShack offers luxury photo booth experiences across Brampton, Toronto, and the GTA — including 360° booths, mirror booths, and instant print stations for weddings, parties, and corporate events.",
  keywords: [
    "photo booth rental Brampton",
    "Toronto 360 photobooth",
    "mirror photobooth GTA",
    "event photography Ontario",
    "wedding photobooth Toronto",
    "corporate event photo booth",
    "SmilinShack",
  ],
  authors: [{ name: "SmilinShack" }],
  creator: "SmilinShack",
  publisher: "SmilinShack",
  openGraph: {
    title: "SmilinShack | Premium Photo Booth Rentals in Brampton & GTA",
    description:
      "Luxury photobooth rentals with instant prints, 360° video booths, and mirror experiences — perfect for weddings, birthdays, and corporate events.",
    url: "https://smilinshack.com",
    siteName: "SmilinShack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SmilinShack Photo Booth Setup",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmilinShack | Premium Photo Booth Rentals",
    description:
      "Make your event unforgettable with 360°, mirror, and instant-print photo booths from SmilinShack.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/logo-bg.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark text-text-primary dark:text-text-primary-dark font-body antialiased transition-colors duration-300 selection:bg-primary selection:text-white">
        <Navbar />
        <div className="pt-32"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
