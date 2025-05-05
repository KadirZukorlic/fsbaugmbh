import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FS Bauunternehmer - Renovierung, Sanierung und mehr",
  description:
    "Ihr zuverlässiger Partner für Renovierung, Sanierung, Abbrucharbeiten, Mauerarbeiten, Außenanlagen und Gartenarbeiten in Böblingen und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
