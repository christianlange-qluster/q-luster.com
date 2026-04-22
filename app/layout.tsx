import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://q-luster.com"),
  title: {
    default: "QLuster Photonics — The Photon Source for the Quantum Age",
    template: "%s · QLuster Photonics",
  },
  description:
    "Atom-compatible, chip-integrated single-photon emitters — the missing interconnect for scalable quantum networks.",
  keywords: [
    "quantum networking",
    "single photon source",
    "quantum interconnect",
    "neutral atom quantum computing",
    "rubidium",
    "nanophotonics",
    "quantum computing",
    "QLuster",
  ],
  authors: [{ name: "QLuster Photonics" }],
  openGraph: {
    type: "website",
    url: "https://q-luster.com",
    title: "QLuster Photonics — The Photon Source for the Quantum Age",
    description:
      "Atom-compatible, chip-integrated single-photon emitters — the missing interconnect for scalable quantum networks.",
    siteName: "QLuster Photonics",
    images: [
      {
        url: "/images/source-between-processors.png",
        width: 1200,
        height: 630,
        alt: "QLuster photon source connecting two quantum processors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QLuster Photonics — The Photon Source for the Quantum Age",
    description:
      "Atom-compatible, chip-integrated single-photon emitters for scalable quantum networks.",
    images: ["/images/source-between-processors.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
