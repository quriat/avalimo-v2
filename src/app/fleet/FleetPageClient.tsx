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
      staggerChildren: 0.15,
    },
  },
};

const vehicles = [
  {
    name: "Mercedes S-Class",
    type: "Executive Sedan",
    passengers: "1-3",
    price: "from $55",
    image: "/images/mercedes_sclass.png",
    features: [
      "Whisper-quiet cabin",
      "Hand-stitched leather seating",
      "Ambient interior lighting",
      "Complimentary bottled water",
      "Phone chargers",
    ],
  },
  {
    name: "Cadillac Escalade",
    type: "Luxury SUV",
    passengers: "1-6",
    price: "from $82",
    image: "/images/cadillac_escalade.png",
    badge: "Most Booked",
    features: [
      "Spacious & powerful",
      "Rear entertainment system",
      "Extra luggage capacity",
      "Climate control zones",
      "Privacy partition",
    ],
  },
  {
    name: "Mercedes Sprinter",
    type: "Group Van",
    passengers: "1-14",
    price: "from $128",
    image: "/images/mercedes_sprinter.png",
    features: [
      "High ceilings for easy entry",
      "Premium surround sound",
      "Reclining leather seats",
      "Mood lighting",
      "Built-in coolers",
    ],
  },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Our Fleet
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Travel,{" "}
              <span className="text-gradient italic">elevated.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three meticulously maintained vehicles to match every occasion.
              Impeccable interiors, professional chauffeurs, flat-rate pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                variants={fadeInUp}
                className="glass-card glass-card-hover p-6 relative group"
              >
                {vehicle.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-950 text-xs font-bold px-3 py-1 rounded-full z-10">
                    {vehicle.badge}
                  </div>
                )}

                <div className="relative h-56 mb-6 flex items-center justify-center overflow-hidden rounded-lg bg-white/5">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={250}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-yellow-500 text-sm font-medium mb-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {vehicle.type} • Up to {vehicle.passengers} passengers
                </p>

                <ul className="space-y-3 mb-8">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-300 text-sm flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <p className="text-gradient text-xl font-bold">{vehicle.price}</p>
                  <Link href="/book" className="btn-gold text-sm px-5 py-2.5">
                    Book Now
                  </Link>
                </div>
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
              Not sure which{" "}
              <span className="text-gradient italic">vehicle fits?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Our team will match you with the perfect ride based on your group
              size, luggage, and occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-gold text-lg px-8 py-4">
                Get a Recommendation
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
