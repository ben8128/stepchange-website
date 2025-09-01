import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

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
        <nav className="border-b border-slate-200 bg-white">
          <div className="max-w-screen-sm mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-slate-900">
                  Stepchange
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a href="/portfolio" className="text-slate-600 hover:text-sky-600">
                  Portfolio
                </a>
                <a href="/team" className="text-slate-600 hover:text-sky-600">
                  Team
                </a>
                <a href="/history" className="text-slate-600 hover:text-sky-600">
                  History
                </a>
                <a href="/software" className="text-slate-600 hover:text-sky-600">
                  Software Guide
                </a>
                <a href="/invest" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 text-sm font-medium">
                  Submit Investment
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
