import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | Flat Rates, No Surge — Houston Limo Service | AvaLimo",
  description:
    "Transparent flat-rate pricing for Houston limo service. S-Class from $55, Escalade from $82, Sprinter from $128. No surge pricing, 45-min free airport wait time. Get an instant fare estimate.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AvaLimo Pricing | Flat Rates, Zero Surge",
    description:
      "S-Class from $55, Escalade from $82, Sprinter from $128. No surge pricing. Airport pickups include 45 min free wait time.",
    url: "https://avalimo.net/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
