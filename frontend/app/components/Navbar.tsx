"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/collections", label: "Collections" },
      { href: "/care-guide", label: "Care Guide" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between py-2 px-4 sm:px-6 relative">
          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-gradient transition-all duration-1000 text-xl font-bold">
              Ormee Hairs
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3a2c20] hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Search */}
            {searchOpen ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-[#cc9839]"
                />
                <Image
                  src="/icons/search.svg"
                  alt="Search"
                  width={18}
                  height={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3a2c20]"
                />
              </div>
            ) : (
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center justify-center rounded-lg h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7] transition-all"
              >
                <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
              </button>
            )}

            {/* Cart */}
            <button
              aria-label="Cart"
              className="relative inline-flex items-center justify-center rounded-lg h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7] transition-all"
            >
              <Image src="/icons/cart.svg" alt="Cart" width={22} height={22} />
              <span className="absolute -top-2 -right-2 bg-[#cc9839] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Account */}
            <button
              aria-label="Account"
              className="inline-flex items-center justify-center rounded-lg h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7] transition-all"
            >
              <Image src="/icons/user.svg" alt="Account" width={20} height={20} />
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7] transition-all"
            >
              <Image src="/icons/menu.svg" alt="Menu" width={22} height={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-lg shadow-md">
          <nav className="flex flex-col space-y-4 p-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#3a2c20] hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
