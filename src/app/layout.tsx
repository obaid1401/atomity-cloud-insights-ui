import type { Metadata } from "next";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "Atomity Cloud Insights",
  description: "Frontend Engineering Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-page text-text-primary antialiased min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}