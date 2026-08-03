"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

const stats = [
  { number: "5.0", label: "Google Rating" },
  { number: "500+", label: "Rides Completed" },
  { number: "24/7", label: "Available" },
];

const fleet = [
  {
    name: "Mercedes S-Class",
    type: "Executive Sedan",
    passengers: "1-3",
    price: "from $55",
    image: "/images/mercedes_sclass.png",
    features: ["Whisper-quiet cabin", "Leather seating", "Ambient light"],
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    passengers: "1-6",
    price: "from $82",
    image: "/images/cadillac_escalade.png",
    badge: "Most Booked",
    features: ["Spacious & powerful", "Rear entertainment", "Extra luggage"],
  },
  {
    name: "Mercedes Sprinter",
    type: "Group Van",
    passengers: "1-14",
    price: "from $128",
    image: "/images/mercedes_sprinter.png",
    features: ["High ceilings", "Premium sound", "Reclining seats"],
  },
];

const services = [
  {
    icon: "✈️",
    title: "Airport Transfers",
    description: "IAH & Hobby with real-time flight tracking, meet & greet, and luggage help.",
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    description: "Punctual, professional chauffeurs for meetings and client entertainment.",
  },
  {
    icon: "💍",
    title: "Weddings",
    description: "White-glove service and photo-worthy arrivals for your biggest day.",
  },
  {
    icon: "🎬",
    title: "Concerts & Events",
    description: "Toyota Center, NRG, 713 Music Hall. Skip the parking, we'll be waiting.",
  },
  {
    icon: "🎵",
    title: "Nights Out & Parties",
    description: "BYOB Sprinters and party vans for the bride tribe and group nights.",
  },
  {
    icon: "🍷",
    title: "Wine & Brewery Tours",
    description: "Hill Country wineries and Houston breweries, safe and fully custom.",
  },
];

const reviews = [
  {
    text: "Everything was perfect, from booking to arrival. The vehicle was immaculate and the driver was professional and courteous.",
    author: "David M.",
    type: "Airport Transfer",
  },
  {
    text: "Best airport transfer I've ever had. My flight was delayed and they were still waiting when I landed.",
    author: "Jennifer K.",
    type: "IAH Pickup",
  },
  {
    text: "Used them for our wedding, absolutely perfect. The S-Class was stunning and the chauffeur helped with everything.",
    author: "Michael & Sarah T.",
    type: "Wedding",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Houston&apos;s Premium Chauffeur Service
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Arrive in{" "}
              <span className="text-gradient italic">absolute</span>
              <br />
              luxury.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Airport transfers, corporate travel, weddings and nights out.
              Flat rates, zero surge, always on time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/book" className="btn-gold text-lg px-8 py-4">
              Reserve Your Car
            </Link>
            <Link
              href="/fleet"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              View the Fleet
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-12 md:gap-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-yellow-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A flat rate, <span className="text-gradient italic">sent in minutes.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Never a surge. Tell us where you&apos;re going and we&apos;ll respond with a transparent price.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 glow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Pickup Location</label>
                <select className="input-gold w-full">
                  <option>IAH Airport</option>
                  <option>Hobby Airport</option>
                  <option>Downtown</option>
                  <option>Galleria / Uptown</option>
                  <option>Sugar Land</option>
                  <option>The Woodlands</option>
                  <option>Katy</option>
                  <option>Galveston</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Drop-off Location</label>
                <select className="input-gold w-full">
                  <option>Downtown</option>
                  <option>IAH Airport</option>
                  <option>Hobby Airport</option>
                  <option>Galleria / Uptown</option>
                  <option>Sugar Land</option>
                  <option>The Woodlands</option>
                  <option>Katy</option>
                  <option>Galveston</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date & Time</label>
                <input type="datetime-local" className="input-gold w-full" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Vehicle</label>
                <select className="input-gold w-full">
                  <option>Sedan — S-Class (1-3)</option>
                  <option>SUV — Escalade (1-6)</option>
                  <option>Sprinter (1-14)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Estimated fare</p>
                <p className="text-2xl font-bold text-gradient">$—</p>
              </div>
              <button className="btn-gold">Request My Quote</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              The Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Three ways to travel{" "}
              <span className="text-gradient italic">well.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {fleet.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                variants={fadeInUp}
                className="glass-card glass-card-hover p-6 relative group cursor-pointer"
              >
                {vehicle.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                    {vehicle.badge}
                  </div>
                )}
                <div className="relative h-48 mb-6 flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={300}
                    height={200}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-yellow-500 text-sm font-medium mb-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {vehicle.type} • Up to {vehicle.passengers} passengers
                </p>
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-gradient font-bold">{vehicle.price}</p>
                  <Link
                    href="/book"
                    className="text-yellow-500 hover:text-yellow-400 text-sm font-medium flex items-center gap-1"
                  >
                    Book{" "}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Every occasion,{" "}
              <span className="text-gradient italic">covered.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="glass-card glass-card-hover p-6"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by{" "}
              <span className="text-gradient italic">500+</span> Houston riders
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.author}
                variants={fadeInUp}
                className="glass-card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-gray-400">{review.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready when{" "}
              <span className="text-gradient italic">you are.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book online in 30 seconds. Talk to our AI assistant or reach
              dispatch directly.
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
