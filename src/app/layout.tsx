import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Beam - Digital Services for Bermuda",
    template: "%s | Beam",
  },
  description:
    "Delivering thoughtful digital commerce, marketing and brand strategy to local businesses and associations. Developing and implementing proprietary technology for consumer facing businesses in Bermuda.",
  keywords: [
    "digital commerce",
    "marketing strategy",
    "brand strategy",
    "Bermuda",
    "consulting services",
    "technology development",
    "consumer businesses",
    "local businesses",
  ],
  authors: [{ name: "Beam Bermuda Ltd" }],
  creator: "Beam Bermuda Ltd",
  publisher: "Beam Bermuda Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://beam.bm"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beam - Digital Services for Bermuda",
    description:
      "Delivering thoughtful digital commerce, marketing and brand strategy to local businesses and associations. Developing and implementing proprietary technology for consumer facing businesses.",
    url: "https://beam.bm",
    siteName: "Beam",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beam - Digital Services for Bermuda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam - Digital Services for Bermuda",
    description:
      "Delivering thoughtful digital commerce, marketing and brand strategy to local businesses and associations. Developing and implementing proprietary technology for consumer facing businesses.",
    images: ["/beam.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className="min-h-screen bg-background flex flex-col mx-auto w-full text-primary ">
          <Header />
          <main className="flex-grow flex flex-col mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center text-sm py-4 bg-accent">
      Beam Bermuda Ltd &copy; {new Date().getFullYear()}
    </footer>
  );
}
