import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "@/app/dashboardWrapper";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
