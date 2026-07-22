import type { Metadata } from "next";
import "./globals.css";
import DashboardLayout from "@/components/layout/dashboard-layout";

export const metadata: Metadata = {
  title: "ERP System",
  description: "Business Management ERP System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
