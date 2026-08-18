import type { Metadata } from "next";
import FleetPageClient from "./FleetPageClient";

export const metadata: Metadata = {
  title: "Our Fleet | Mercedes S-Class, Cadillac Escalade & Sprinter | AvaLimo",
  description:
    "Explore AvaLimo's luxury fleet: Mercedes S-Class executive sedan, Cadillac Escalade SUV, and Mercedes Sprinter group van. Premium interiors, professional chauffeurs, flat-rate pricing.",
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: "AvaLimo Luxury Fleet | S-Class, Escalade, Sprinter",
    description:
      "Three meticulously maintained vehicles: S-Class (1-3), Escalade (1-6), Sprinter (1-14). Book online, flat-rate pricing.",
    url: "https://avalimo.net/fleet",
  },
};

export default function FleetPage() {
  return <FleetPageClient />;
}
