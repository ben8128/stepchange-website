import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

const TITLE = "Stepchange";
const DESCRIPTION = "Early-stage venture fund focused on climate technology and product-led companies accelerating the energy transition.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://stepchange.vc/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@stepchange_vc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
