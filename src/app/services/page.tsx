import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Limo Services in Houston | Airport, Corporate, Wedding & Events",
  description:
    "Comprehensive luxury transportation services in Houston. IAH & Hobby airport transfers, corporate travel, wedding limos, concert events, wine tours. Flat rates, zero surge.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AvaLimo Services | Houston Luxury Transportation",
    description:
      "Airport transfers, corporate travel, weddings, events & wine tours. Flat rates, zero surge, always on time.",
    url: "https://avalimo.net/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
