"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

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

const vehicles = [
  { label: "Sedan — S-Class (1-3)", value: "S-Class" },
  { label: "SUV — Escalade (1-6)", value: "Escalade" },
  { label: "Sprinter (1-14)", value: "Sprinter" },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: searchParams.get("pickup") || "IAH Airport",
    dropoff: searchParams.get("dropoff") || "Downtown",
    time: searchParams.get("time") || "",
    vehicle: searchParams.get("vehicle") || "S-Class",
    passengers: searchParams.get("passengers") || "1",
    flight: "",
    notes: "",
    price: searchParams.get("price") || "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Keep local time as default if none provided
    if (!form.time) {
      const now = new Date();
      now.setMinutes(now.getMinutes() + 30);
      now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15);
      const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
      setForm((f) => ({ ...f, time: localIso }));
    }
  }, []);

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please call (832) 567-8050.");
      }

      setStatus("success");
      setTimeout(() => {
        router.push("/");
      }, 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-yellow-500 font-medium tracking-wide uppercase mb-3">
            Reserve Your Ride
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book your <span className="text-gradient italic">AvaLimo</span> ride
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill in the details below and we&apos;ll confirm your ride right away.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="glass-card p-6 md:p-10 glow"
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking received!</h2>
              <p className="text-gray-400">
                We&apos;ve sent your confirmation and our dispatch team has been notified.
                You&apos;ll be redirected home in a few seconds.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    className="input-gold w-full"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone *</label>
                  <input
                    required
                    type="tel"
                    className="input-gold w-full"
                    placeholder="(832) 567-8050"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="input-gold w-full"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Pickup Location *</label>
                  <select
                    required
                    className="input-gold w-full"
                    value={form.pickup}
                    onChange={(e) => update("pickup", e.target.value)}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Drop-off Location *</label>
                  <select
                    required
                    className="input-gold w-full"
                    value={form.dropoff}
                    onChange={(e) => update("dropoff", e.target.value)}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Date & Time *</label>
                  <input
                    required
                    type="datetime-local"
                    className="input-gold w-full"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Passengers</label>
                  <select
                    className="input-gold w-full"
                    value={form.passengers}
                    onChange={(e) => update("passengers", e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
                      <option key={n} value={String(n)}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Vehicle *</label>
                  <select
                    required
                    className="input-gold w-full"
                    value={form.vehicle}
                    onChange={(e) => update("vehicle", e.target.value)}
                  >
                    {vehicles.map((v) => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Flight Number</label>
                  <input
                    type="text"
                    className="input-gold w-full"
                    placeholder="AA1234"
                    value={form.flight}
                    onChange={(e) => update("flight", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Special Requests / Notes</label>
                <textarea
                  rows={3}
                  className="input-gold w-full"
                  placeholder="Luggage, child seat, preferred pickup spot, etc."
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>

              {form.price && (
                <div className="glass-card p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Estimated Fare</p>
                    <p className="text-2xl font-bold text-gradient">${form.price}</p>
                  </div>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Final price may vary based on stops, wait time, or route changes.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-gold w-full md:w-auto md:px-12 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting..." : "Confirm Booking"}
              </button>

              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about your ride. Need help?{" "}
                <a href="tel:+18325678050" className="text-yellow-500 hover:underline">
                  Call (832) 567-8050
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function BookPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-40 text-center text-gray-400">Loading booking form…</div>
    }>
      <BookingForm />
    </Suspense>
  );
}
