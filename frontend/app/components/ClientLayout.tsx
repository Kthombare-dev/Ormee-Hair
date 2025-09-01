"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PageWrapper from "./PageWrapper";
import { usePathname } from "next/navigation"; 

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showBrand, setShowBrand] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <Navbar showBrand={showBrand} />
      </AnimatePresence>
      {pathname === "/" && <HeroSection onToggleBrand={setShowBrand} />}
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
