import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Beam",
  description: "Digital Services for Bermuda",
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
