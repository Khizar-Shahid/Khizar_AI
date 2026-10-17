import type { Metadata, Viewport } from "next";
import { Playfair_Display, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "khizar.ai | CRM for real estate agents & loan officers",
  description:
    "A CRM set up for you from day one: texting, booking, follow-up and past-client campaigns for real estate agents and mortgage loan officers. Month to month.",
  verification: {
    google: "1C87TjVPAR3nS_72K6KDCLzBKuSDXl9NRSbD3cOF0AA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A1511",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
