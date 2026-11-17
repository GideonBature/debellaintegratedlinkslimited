import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Roboto, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { asset, company } from "@/lib/site";

const barlow = Barlow_Condensed({ subsets: ["latin"], variable: "--font-barlow", weight: ["500", "600", "700", "800"] });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["400", "500", "700"] });
const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500", "600"] });

export const viewport: Viewport = { themeColor: "#13152b" };

export const metadata: Metadata = {
  title: `${company.name} | Construction, Civil Engineering & General Contracts`,
  description:
    "Debella Integrated Links Limited — building and civil engineering, renovation, facilities management, construction materials, furniture supply and general contracts from Kaduna, with offices in Abuja, Kano and Katsina.",
  keywords: ["Debella Integrated Links", "construction company Kaduna", "civil engineering Nigeria", "general contractors Kaduna", "facilities management", "building materials supply", "school furniture supply"],
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/favicon.png"), type: "image/png" },
    ],
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: company.name,
    description: "Civil engineering, construction, consultancy, supply and general contracts — Kaduna, Nigeria.",
    type: "website",
    images: [asset("/icon-512.png")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${roboto.variable} ${plex.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
