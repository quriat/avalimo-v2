import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvaLimo — Houston Premier Limo Service | IAH & Hobby Airport Transfers",
  description: "Houston's premium chauffeur service. Flat rates, zero surge, always on time. Airport transfers, corporate travel, weddings. S-Class, Escalade, Sprinter.",
  keywords: "Houston limo, IAH airport transfer, luxury car service, corporate travel Houston, wedding limo Houston",
  openGraph: {
    title: "AvaLimo — Houston's Premium Chauffeur Service",
    description: "Flat rates, zero surge, always on time. Airport transfers, corporate travel, weddings.",
    url: "https://avalimo.net",
    siteName: "AvaLimo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
