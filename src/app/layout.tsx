import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';

export const fetchCache = 'force-no-store';
export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Todo App",
  description: "App generated using Redoc & next-rest-framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

