import type { Metadata } from "next";
import "../style/globals.css"

export const metadata: Metadata = {
  title: "Ether.it.com",
  description: "Game Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root">
        {children}
      </body>
    </html>
  );
}
