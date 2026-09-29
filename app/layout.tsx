import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4 Colors Arena",
  description: "4 Colors Arena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}