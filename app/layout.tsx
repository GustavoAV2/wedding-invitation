import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Eliane & Miguel | Amor, vida e um novo começo",
  description:
    "Venha celebrar conosco o amor, a vida e o início de uma nova etapa. 10 de outubro de 2026, às 11 horas, em Blumenau.",
  openGraph: {
    title: "Casamento de Eliane & Miguel",
    description:
      "10 de outubro de 2026, às 11 horas, no Edifício Paladium, em Blumenau.",
    siteName: "Eliane & Miguel",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Eliane & Miguel — 10 de outubro de 2026, Blumenau",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casamento de Eliane & Miguel",
    description: "Amor, vida e um novo começo — 10 de outubro de 2026.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1b1114",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${cormorant.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
