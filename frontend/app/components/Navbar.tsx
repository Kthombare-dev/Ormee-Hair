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
    <header className="sticky top-0 z-50 bg-[#f7f7f4]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between h-[64px]">
          <nav className="flex items-center gap-8 text-[18px] text-[#1f1f1f]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-80">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-[28px] font-semibold tracking-wide text-[#cc9839]">
            Ormee Hairs
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="w-12 h-12 rounded-xl bg-[#efede7] flex items-center justify-center text-[#3a2c20]">
              <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
            </button>
            <div className="relative">
              <button aria-label="Cart" className="w-12 h-12 rounded-xl bg-[#efede7] flex items-center justify-center text-[#3a2c20]">
                <Image src="/icons/cart.svg" alt="Cart" width={22} height={22} />
              </button>
              <span className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-[#cc9839] text-white text-[12px] flex items-center justify-center">2</span>
            </div>
            <button aria-label="Account" className="w-12 h-12 rounded-xl bg-[#efede7] flex items-center justify-center text-[#3a2c20]">
              <Image src="/icons/user.svg" alt="Account" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


