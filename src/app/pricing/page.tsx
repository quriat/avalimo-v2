"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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

const vehicles = [
  {
    name: "S-Class",
    type: "Executive Sedan",
    passengers: "1–3",
    base: 55,
    perMile: 2,
    perMinute: 1,
    lateNight: 28,
    image: "/images/mercedes_sclass.png",
  },
  {
    name: "Escalade",
    type: "Luxury SUV",
    passengers: "1–6",
    base: 82,
    perMile: 4,
    perMinute: 1,
    lateNight: 28,
    badge: "Most Booked",
    image: "/images/cadillac_escalade.png",
  },
  {
    name: "Sprinter",
    type: "Group Van",
    passengers: "1–14",
    base: 128,
    perMile: 5,
    perMinute: 1,
    lateNight: 28,
    image: "/images/mercedes_sprinter.png",
  },
];

const routes = [
  { from: "IAH Airport", to: "Downtown", sclass: 108, escalade: 162, sprinter: 231 },
  { from: "Hobby Airport", to: "Downtown", sclass: 87, escalade: 132, sprinter: 191 },
  { from: "IAH Airport", to: "The Woodlands", sclass: 102, escalade: 154, sprinter: 220 },
  { from: "IAH Airport", to: "Galleria", sclass: 117, escalade: 177, sprinter: 250 },
  { from: "Hobby Airport", to: "Sugar Land", sclass: 130, escalade: 195, sprinter: 272 },
  { from: "Downtown", to: "Galveston", sclass: 265, escalade: 382, sprinter: 512 },
];

const locations = [
  "IAH Airport",
  "Hobby Airport",
  "Downtown",
  "Galleria / Uptown",
  "Sugar Land",
  "The Woodlands",
  "Katy",
  "Galveston",
];

export default function PricingPage() {
  const [pickup, setPickup] = useState("IAH Airport");
  const [dropoff, setDropoff] = useState("Downtown");
  const [vehicleType, setVehicleType] = useState("S-Class");
  const [includeGratuity, setIncludeGratuity] = useState(true);

  const matchedRoute = routes.find(
    (r) => r.from === pickup && r.to === dropoff
  );

  const vehicleIndex = vehicleType === "S-Class" ? 0 : vehicleType === "Escalade" ? 1 : 2;
  const estimatedFare = matchedRoute
    ? [matchedRoute.sclass, matchedRoute.escalade, matchedRoute.sprinter][vehicleIndex]
    : null;
  const gratuityAmount = estimatedFare && includeGratuity ? Math.round(estimatedFare * 0.2) : 0;
  const totalFare = estimatedFare ? estimatedFare + gratuityAmount : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              Transparent Pricing
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Flat rates.{" "}
              <span className="text-gradient italic">Zero surge.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No hidden fees. No surge pricing. What you see is exactly what you pay.
              Airport pickups include 45 minutes of complimentary wait time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Pricing Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Rate Structure
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Pricing by{" "}
              <span className="text-gradient italic">vehicle.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {vehicles.map((v) => (
              <motion.div
                key={v.name}
                variants={fadeInUp}
                className="glass-card glass-card-hover p-8 relative"
              >
                {v.badge && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                    {v.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1">{v.name}</h3>
                <p className="text-gray-400 text-sm mb-6">
                  {v.type} • Up to {v.passengers} passengers
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-gray-400">Base Fare</span>
                    <span className="text-gradient font-bold text-lg">${v.base}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-gray-400">Per Mile</span>
                    <span className="font-semibold">${v.perMile}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/10">
                    <span className="text-gray-400">Per Minute</span>
                    <span className="font-semibold">${v.perMinute}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-400">Late Night (10pm–5am)</span>
                    <span className="font-semibold">+${v.lateNight}</span>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="btn-gold w-full mt-8 text-center block"
                >
                  Book {v.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Routes Table */}
      <section className="py-24 relative bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Sample Routes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common routes,{" "}
              <span className="text-gradient italic">fixed prices.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-sm text-gray-400 font-medium p-4 pl-6">Route</th>
                    <th className="text-center text-sm text-gray-400 font-medium p-4">S-Class</th>
                    <th className="text-center text-sm text-gray-400 font-medium p-4">Escalade</th>
                    <th className="text-center text-sm text-gray-400 font-medium p-4">Sprinter</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route) => (
                    <tr key={`${route.from}-${route.to}`} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 pl-6">
                        <span className="font-medium">{route.from}</span>
                        <span className="text-gray-500 mx-2">→</span>
                        <span className="font-medium">{route.to}</span>
                      </td>
                      <td className="text-center p-4 text-gradient font-semibold">${route.sclass}</td>
                      <td className="text-center p-4 text-gradient font-semibold">${route.escalade}</td>
                      <td className="text-center p-4 text-gradient font-semibold">${route.sprinter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 pl-6 border-t border-white/10">
              <p className="text-sm text-gray-500 italic">
                All fares are one-way. Taxes and gratuity not included unless specified.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Fare Calculator */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Fare Estimator
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get an{" "}
              <span className="text-gradient italic">instant estimate.</span>
            </h2>
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
                <select
                  className="input-gold w-full"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Drop-off Location</label>
                <select
                  className="input-gold w-full"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date & Time</label>
                <input type="datetime-local" className="input-gold w-full" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Vehicle</label>
                <select
                  className="input-gold w-full"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option>S-Class — Executive Sedan (1–3)</option>
                  <option>Escalade — Luxury SUV (1–6)</option>
                  <option>Sprinter — Group Van (1–14)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="gratuity"
                checked={includeGratuity}
                onChange={(e) => setIncludeGratuity(e.target.checked)}
                className="w-4 h-4 accent-yellow-500 rounded"
              />
              <label htmlFor="gratuity" className="text-sm text-gray-400">
                Include 20% gratuity
              </label>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Estimated Fare</p>
                  {totalFare !== null ? (
                    <>
                      <p className="text-3xl font-bold text-gradient">${totalFare}</p>
                      {includeGratuity && (
                        <p className="text-xs text-gray-500 mt-1">
                          ${estimatedFare} fare + ${gratuityAmount} gratuity
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-2xl font-bold text-gray-500">Select route</p>
                  )}
                </div>
                <Link href="/book" className="btn-gold">
                  Book Now
                </Link>
              </div>
              {!matchedRoute && (
                <p className="text-sm text-gray-500 mt-3">
                  This route isn&apos;t in our sample table yet. Contact us for a custom quote.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fine Print / Notes */}
      <section className="py-16 relative bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold mb-6">Good to know</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  <strong className="text-white">45-minute free wait time</strong> for all airport pickups.
                  We track your flight in real time — even if you&apos;re delayed, your chauffeur will be there.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  <strong className="text-white">No surge pricing.</strong> Rates are fixed 24/7, 365 days a year.
                  Holidays, rush hour, and late-night rides are all the same flat rate.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  <strong className="text-white">Gratuity is optional.</strong> 20% is customary but entirely your choice.
                  You can adjust or remove it before confirming your ride.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  <strong className="text-white">Meet &amp; greet included</strong> at IAH and Hobby.
                  Your chauffeur will meet you at baggage claim or your terminal with a name sign.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  <strong className="text-white">Cancellation is free</strong> up to 2 hours before your scheduled pickup.
                  No charge for rescheduling.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to{" "}
              <span className="text-gradient italic">ride?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book online in 30 seconds. No account needed. Flat rate, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-gold text-lg px-8 py-4">
                Start a Booking
              </Link>
              <a
                href="tel:+18325678050"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                Call (832) 567-8050
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
