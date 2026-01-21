import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SmilinShack | Photo Booth Rental in Brampton & GTA",
  description:
    "Rent a premium photo booth in Brampton and the GTA. 360 video booth, mirror booth, instant prints. Perfect for weddings, parties, and corporate events.",
  alternates: {
    canonical: "https://smilinshack.com/",
  },
  openGraph: {
    title: "SmilinShack | Photo Booth Rental in Brampton & GTA",
    description:
      "Premium photo booth rentals in Brampton and the GTA. 360 booths, mirror booths, instant prints for weddings and events.",
    url: "https://smilinshack.com/",
    siteName: "SmilinShack",
    images: [{
      url: "/icon.png",
      width: 512,
      height: 512,
    }],
    locale: "en_CA",
    type: "website",
  },
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
