import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay Beautiful with <span className="text-primary-glow">Ormee Hairs</span>
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Get exclusive access to new collections, styling tips, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background
                file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
                bg-background/10 border-primary/30 text-accent-foreground placeholder:text-accent-foreground/60"
                placeholder="Enter your email"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm
                transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                disabled:pointer-events-none disabled:opacity-50
                bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold tracking-wide
                hover:shadow-glow hover:scale-105 active:scale-95 h-12 px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-primary-glow mb-4">Ormee Hairs</h2>
            <p className="opacity-90 leading-relaxed mb-6">
              Premium hair extensions crafted with heritage techniques. Discover the finest collection of Remy and Virgin hair for the modern woman.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-3 text-primary-glow">📞</span>
                <span className="text-sm">+91 8962648358</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-primary-glow">✉️</span>
                <span className="text-sm">hello@emiliobeaufort.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-primary-glow">📍</span>
                <span className="text-sm">Vrushabari Towers, Whitefield, Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-primary-glow mb-4">Shop</h4>
            <ul className="space-y-2">
              {["Remy Hair Extensions", "Virgin Hair Extensions", "Clip-In Extensions", "Tape-In Extensions", "Weft Extensions", "Closure Pieces"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Care & Support */}
          <div>
            <h4 className="font-semibold text-primary-glow mb-4">Care & Support</h4>
            <ul className="space-y-2">
              {["Care Instructions", "Installation Guide", "Styling Tips", "Maintenance", "Color Matching", "Size Guide"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-glow mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Story", "Team", "Careers", "Press", "Awards"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-primary-glow mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ", "Live Chat"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary-glow transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mt-12 pt-8 border-t border-primary/20">
          {["Facebook", "Instagram", "Twitter", "YouTube"].map((platform, i) => (
            <Link
              key={i}
              href="#"
              className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
              aria-label={platform}
            >
              <span className="text-primary-glow group-hover:scale-110 transition-transform duration-300">
                {platform[0]}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-primary/20 text-sm opacity-60">
          <p>© 2025 Ormee Hairs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
              <Link key={i} href="#" className="hover:opacity-100 transition-opacity duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
