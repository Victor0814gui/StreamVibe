import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope400 = Manrope({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StreamVibe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope400.className}>{children}</body>
    </html>
  );
}
