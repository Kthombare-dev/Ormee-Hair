"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ showBrand }: { showBrand: boolean }) {
  const router = useRouter(); 
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/collection", label: "Collections" },
      { href: "/careguide", label: "Care Guide" },
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
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-white"
      }`}>
      <div className="w-full">
        <div className="flex items-center justify-between py-2 px-4 sm:px-6 relative">
          {/*  Animate brand into Navbar */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <AnimatePresence mode="wait">
              {showBrand && (
  <motion.h1
    layoutId="brandText"
    transition={{ type: "spring", stiffness: 80, damping: 20 }}
    className="font-serif text-4xl font-bold text-black"
  >
    ORMEE HAIR
  </motion.h1>
)}

            </AnimatePresence>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 text-[18px]">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}   
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 ml-auto">
            <div className="relative">
              <button aria-label="Search" className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7]">
                <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
              </button>
            </div>
            <button aria-label="Cart" className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 w-12 relative bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7]">
              <Image src="/icons/cart.svg" alt="Cart" width={22} height={22} />
              <span className="absolute -top-2 -right-2 bg-[#cc9839] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </button>
            <button aria-label="Account" onClick={() => router.push("/login")} className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7]">
              <Image src="/icons/user.svg" alt="Account" width={20} height={20} />
            </button>
            <button aria-label="Menu" className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7] lg:hidden">
              <Image src="/icons/menu.svg" alt="Menu" width={22} height={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


