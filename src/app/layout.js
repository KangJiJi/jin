import { Inter } from "next/font/google";
import "./globals.css";

import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello!",
};

export default function RootLayout({ children }) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </PortfolioProvider>
  );
}
