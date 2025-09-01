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
    <footer className="text-white" style={{background: "linear-gradient(91deg,rgba(18, 18, 18, 1) 0%, rgba(54, 54, 54, 1) 51%, rgba(23, 23, 23, 1) 100%)"}}>
      {/* Newsletter */}
      <div className="border-b border-white/30">
        <div className="w-full px-6 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white">
            Stay Beautiful with{" "}
            <span className="text-white">Ormee Hair</span>
          </h3>
          <p className="text-lg opacity-90 mb-6 text-white">
            Get exclusive access to new collections, styling tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-12 w-full rounded-md border border-white/40 bg-white/10 px-4 
                         text-base text-white placeholder:text-white/60 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black 
                               font-semibold rounded-md h-12 px-6 hover:bg-gray-200 hover:scale-105 
                               transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Ormee Hair
            </h2>
            <p className="opacity-90 leading-relaxed mb-6 text-white">
              Premium hair extensions crafted with heritage techniques. Discover the finest
              collection of Remy and Virgin hair for the modern woman.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span className="text-sm text-white">+91 8962648358</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="text-sm text-white">hello@ormeehair.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="text-sm text-white">Vrushabari Towers, Whitefield, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
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
                  <Link href="#" className="opacity-80 hover:text-white text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Care & Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Care & Support</h4>
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
                  <Link href="#" className="opacity-80 hover:text-white text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Our Story", "Team", "Careers", "Press", "Awards"].map(
                (item, i) => (
                  <li key={i}>
                    <Link href="#" className="opacity-80 hover:text-white text-gray-300">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
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
                  <Link href="#" className="opacity-80 hover:text-white text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-12 pt-8 border-t border-white/30">
          <Link
            href="#"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 text-white"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 text-white"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 text-white"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="#"
            aria-label="YouTube"
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 text-white"
          >
            <Youtube size={20} />
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/30 text-sm opacity-70">
          <p className="text-white">© 2025 Ormee Hairs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <Link key={i} href="#" className="hover:text-white text-gray-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
