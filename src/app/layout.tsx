import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/loading-screen";

export const metadata: Metadata = {
  title: "HOP Fabrications Inc.",
  description:
    "Custom food carts, kiosks, and fabrication solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}