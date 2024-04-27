import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Client from "./Client";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pankh.AI",
  description: "A platform for private llm models trained on your custom data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Client>
          <div className="">{children}</div>
        </Client>
      </body>
    </html>
  );
}
