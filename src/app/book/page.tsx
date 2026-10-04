import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book Your Ride",
  description:
    "Book your Houston luxury chauffeur ride with AvaLimo. Flat rates for IAH & Hobby airport transfers, corporate travel, weddings, and events.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
