import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "AvaLimo — Houston Premier Limo Service | IAH & Hobby Airport Transfers",
  description:
    "Houston's premium chauffeur service. Flat rates, zero surge, always on time. IAH & Hobby airport transfers, corporate travel, weddings, and events in luxury vehicles. Book online in 30 seconds.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AvaLimo — Houston's Premium Chauffeur Service",
    description:
      "Flat rates, zero surge, always on time. IAH & Hobby airport transfers, corporate travel, weddings, and events in luxury vehicles.",
    url: "https://avalimo.net",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
