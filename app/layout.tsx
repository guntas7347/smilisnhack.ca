import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
