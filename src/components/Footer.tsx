import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/pricing", label: "Pricing" },
    { href: "/fleet", label: "Our Fleet" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/policy", label: "Privacy Policy" },
  ],
  services: [
    { href: "/services#airport", label: "Airport Transfers" },
    { href: "/services#corporate", label: "Corporate Travel" },
    { href: "/services#wedding", label: "Weddings" },
    { href: "/services#events", label: "Concerts & Events" },
  ],
  areas: [
    "IAH Airport",
    "Hobby Airport",
    "Sugar Land",
    "The Woodlands",
    "Katy",
    "Galveston",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <span className="text-gray-950 font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">
                Ava<span className="text-gradient">Limo</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Houston&apos;s premium chauffeur service. Flat rates, zero surge,
              always on time.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <span>📞</span>
              <a href="tel:+18325678050" className="hover:text-white transition-colors">
                (832) 567-8050
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serving</h3>
            <ul className="space-y-3">
              {footerLinks.areas.map((area) => (
                <li key={area} className="text-gray-400 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AvaLimo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Houston, TX</span>
            <span>•</span>
            <a href="mailto:adam@avalimo.net" className="hover:text-white transition-colors">
              adam@avalimo.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
