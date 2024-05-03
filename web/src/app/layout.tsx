import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pankh.Ai",
  description: "Deploy more LLms in less storage",
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
