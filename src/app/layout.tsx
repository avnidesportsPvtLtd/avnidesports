import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <title>Avnide: About </title>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>

      <body>{children}</body>
    </html>
  );
}
