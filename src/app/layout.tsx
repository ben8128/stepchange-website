import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, Archivo_Black } from "next/font/google";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header";

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const archivoBlack = Archivo_Black({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent"
});

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
      <body className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${archivoBlack.variable}`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
