"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

export default function Navbar() {
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

  return (
    <header className="sticky top-0 z-50 transition-all duration-500 bg-transparent">
      <div className="w-full">
        <div className="flex items-center justify-between py-2 px-4 sm:px-6 relative">
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-serif text-gradient transition-all duration-1000 text-xl font-bold">Ormee Hairs</h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 text-[18px]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                {link.label}
              </Link>
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
            <button aria-label="Account" className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 h-12 w-12 bg-[#efede7]/50 text-[#3a2c20] hover:scale-105 hover:bg-[#efede7]">
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


