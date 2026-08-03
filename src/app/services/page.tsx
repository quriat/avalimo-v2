"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: "✈️",
    title: "Airport Transfers",
    description:
      "IAH & Hobby with real-time flight tracking, meet & greet, and luggage assistance.",
    features: [
      "Flight tracking for delays",
      "Curbside meet & greet",
      "Help with luggage",
      "Complimentary wait time",
    ],
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    description:
      "Punctual, professional chauffeurs for meetings, conferences, and client entertainment.",
    features: [
      "Discreet & professional",
      "On-time guaranteed",
      "NDA-signed drivers",
      "Monthly billing available",
    ],
  },
  {
    icon: "💍",
    title: "Weddings",
    description:
      "White-glove service and photo-worthy arrivals for your biggest day.",
    features: [
      "Just-married signage",
      "Red carpet service",
      "Decorated vehicles",
      "Flexible scheduling",
    ],
  },
  {
    icon: "🎬",
    title: "Concerts & Events",
    description:
      "Toyota Center, NRG, 713 Music Hall. Skip the parking, we'll be waiting.",
    features: [
      "Door-to-door service",
      "Post-event pickup",
      "Group coordination",
      "VIP drop-off zones",
    ],
  },
  {
    icon: "🎵",
    title: "Nights Out & Parties",
    description:
      "BYOB Sprinters and party vans for the bride tribe and group nights.",
    features: [
      "BYOB-friendly vehicles",
      "Premium sound systems",
      "Mood lighting",
      "Multi-stop routes",
    ],
  },
  {
    icon: "🍷",
    title: "Wine & Brewery Tours",
    description:
      "Hill Country wineries and Houston breweries, safe and fully custom.",
    features: [
      "Custom itineraries",
      "All-day bookings",
      "Safe ride home",
      "Group discounts",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              What We Do
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Every occasion,{" "}
              <span className="text-gradient italic">covered.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From airport runs to wedding days, we deliver luxury ground
              transportation for every moment that matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="glass-card glass-card-hover p-8"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-300 text-sm flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className="btn-gold text-sm px-5 py-2.5 inline-block"
                >
                  Book This Service
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need something{" "}
              <span className="text-gradient italic">custom?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We handle special requests, multi-stop itineraries, and unique
              occasions. Just ask.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-gold text-lg px-8 py-4">
                Start a Booking
              </Link>
              <a
                href="tel:+18325678050"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                📞 (832) 567-8050
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
