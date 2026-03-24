import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://smilinshack.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
