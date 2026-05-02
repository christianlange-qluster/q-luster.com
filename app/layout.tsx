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
    "QLuster Photonics builds atom-compatible, chip-integrated single-photon emitters — the quantum photonics platform for scalable quantum networks and distributed quantum computing.",
  keywords: [
    "QLuster Photonics",
    "Q-luster Photonics",
    "QLuster",
    "Q-luster",
    "quantum photonics",
    "quantum networking",
    "quantum interconnect",
    "single photon source",
    "neutral atom quantum computing",
    "rubidium D2",
    "nanophotonics",
    "quantum computing",
  ],
  alternates: { canonical: "https://q-luster.com" },
  authors: [{ name: "QLuster Photonics" }],
  openGraph: {
    type: "website",
    url: "https://q-luster.com",
    title: "QLuster Photonics — The Photon Source for the Quantum Age",
    description:
      "QLuster Photonics builds atom-compatible, chip-integrated single-photon emitters — the quantum photonics platform for scalable quantum networks.",
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
      "QLuster Photonics: atom-compatible, chip-integrated single-photon emitters for scalable quantum networks.",
    images: ["/images/source-between-processors.png"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QLuster Photonics",
  alternateName: ["Q-luster Photonics", "QLuster", "Q-luster"],
  url: "https://q-luster.com",
  logo: "https://q-luster.com/images/source-between-processors.png",
  description:
    "QLuster Photonics builds atom-compatible, chip-integrated single-photon emitters — the quantum photonics platform for scalable quantum networks and distributed quantum computing.",
  email: "Christian.Lange@q-luster.com",
  founder: [
    {
      "@type": "Person",
      name: "Dr. Christian M. Lange",
      jobTitle: "Founder & CEO",
    },
    {
      "@type": "Person",
      name: "Dr. Jonathan D. Hood",
      jobTitle: "Founder & CTO",
    },
  ],
  knowsAbout: [
    "Quantum networking",
    "Quantum photonics",
    "Single-photon sources",
    "Neutral-atom quantum computing",
    "Nanophotonics",
    "Quantum interconnects",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
