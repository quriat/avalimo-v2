import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AvaLimo — Houston Premier Limo Service | IAH & Hobby Airport Transfers",
    template: "%s | AvaLimo — Houston Luxury Chauffeur Service",
  },
  description:
    "Houston's premium chauffeur service. Flat rates, zero surge, always on time. IAH & Hobby airport transfers, corporate travel, weddings, events. S-Class, Escalade, Sprinter.",
  keywords: [
    "Houston limo service",
    "IAH airport transfer",
    "Hobby airport car service",
    "luxury chauffeur Houston",
    "corporate car service Houston",
    "wedding limo Houston",
    "flat rate limo Houston",
    "avia limo houston",
    "ava limo",
    "Houston black car service",
  ],
  authors: [{ name: "AvaLimo" }],
  creator: "AvaLimo",
  publisher: "AvaLimo",
  metadataBase: new URL("https://avalimo.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AvaLimo — Houston's Premium Chauffeur Service",
    description:
      "Flat rates, zero surge, always on time. IAH & Hobby airport transfers, corporate travel, weddings, and events in luxury vehicles.",
    url: "https://avalimo.net",
    siteName: "AvaLimo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AvaLimo — Houston Luxury Chauffeur Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AvaLimo — Houston's Premium Chauffeur Service",
    description:
      "Flat rates, zero surge, always on time. IAH & Hobby airport transfers, corporate travel, weddings.",
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
  verification: {
    google: "TODO_ADD_GOOGLE_SEARCH_CONSOLE_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AvaLimo",
    image: "https://avalimo.net/og-image.jpg",
    "@id": "https://avalimo.net",
    url: "https://avalimo.net",
    telephone: "+1-832-567-8050",
    email: "adam@avalimo.net",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Invoice",
    description:
      "Houston's premium chauffeur service. Flat-rate luxury transportation for airports, corporate travel, weddings, and events.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77000",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://g.page/r/CVgUaFV7t4-8EBM/review",
      "https://www.facebook.com/avalimo",
      "https://www.instagram.com/avalimo",
    ],
    areaServed: [
      "Houston",
      "IAH",
      "Hobby",
      "Sugar Land",
      "The Woodlands",
      "Katy",
      "Galveston",
      "Pearland",
      "League City",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Limo Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfer",
            description: "IAH and Hobby airport transfers with flight tracking and meet & greet",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corporate Travel",
            description: "Executive transportation for business meetings and corporate events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Transportation",
            description: "White-glove wedding limo service with champagne and photo-worthy arrivals",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      reviewCount: "500",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} style={{ textAlign: "center" }}>
        <Navigation />
        <main style={{ textAlign: "center" }}>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
