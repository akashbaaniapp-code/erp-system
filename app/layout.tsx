import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERP System",
  description: "Business ERP Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
