import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#4B2E1E] text-[#F2E3C9]">
      {/* Newsletter */}
      <div className="border-b border-[#F9A826]/30">
        <div className="container mx-auto px-6 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Stay Beautiful with{" "}
            <span className="text-[#F9A826]">Ormee Hairs</span>
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Get exclusive access to new collections, styling tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-12 w-full rounded-md border border-[#F9A826]/40 bg-[#3B2314] px-4 
                         text-base placeholder:text-[#F2E3C9]/60 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#F9A826] to-[#FFCC70] text-[#3B2314] 
                               font-semibold rounded-md h-12 px-6 hover:scale-105 
                               transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-[#F9A826] mb-4">
              Ormee Hairs
            </h2>
            <p className="opacity-90 leading-relaxed mb-6">
              Premium hair extensions crafted with heritage techniques. Discover the finest
              collection of Remy and Virgin hair for the modern woman.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-sm">+91 8962648358</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-sm">hello@emiliobeaufort.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-sm">Vrushabari Towers, Whitefield, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-[#F9A826] mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Remy Hair Extensions",
                "Virgin Hair Extensions",
                "Clip-In Extensions",
                "Tape-In Extensions",
                "Weft Extensions",
                "Closure Pieces",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="opacity-80 hover:text-[#F9A826]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Care & Support */}
          <div>
            <h4 className="font-semibold text-[#F9A826] mb-4">Care & Support</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Care Instructions",
                "Installation Guide",
                "Styling Tips",
                "Maintenance",
                "Color Matching",
                "Size Guide",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="opacity-80 hover:text-[#F9A826]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#F9A826] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Our Story", "Team", "Careers", "Press", "Awards"].map(
                (item, i) => (
                  <li key={i}>
                    <Link href="#" className="opacity-80 hover:text-[#F9A826]">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-[#F9A826] mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Contact Us",
                "Shipping Info",
                "Returns",
                "Size Guide",
                "FAQ",
                "Live Chat",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="opacity-80 hover:text-[#F9A826]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12 pt-8 border-t border-[#F9A826]/30">
          <Link
            href="#"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full bg-[#3B2314] flex items-center justify-center hover:bg-[#F9A826]/20 transition-colors duration-300"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full bg-[#3B2314] flex items-center justify-center hover:bg-[#F9A826]/20 transition-colors duration-300"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="w-12 h-12 rounded-full bg-[#3B2314] flex items-center justify-center hover:bg-[#F9A826]/20 transition-colors duration-300"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="#"
            aria-label="YouTube"
            className="w-12 h-12 rounded-full bg-[#3B2314] flex items-center justify-center hover:bg-[#F9A826]/20 transition-colors duration-300"
          >
            <Youtube size={20} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-[#F9A826]/30 text-sm opacity-70">
          <p>© 2025 Ormee Hairs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <Link key={i} href="#" className="hover:text-[#F9A826]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
