"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../components/ui/button";

const BASE_URL =
  "https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2F";

const getVideoUrl = (fileName: string) => {
  return `${BASE_URL}${fileName}?alt=media`;
};

export default function HeroSection({
  onToggleBrand,
}: {
  onToggleBrand: (show: boolean) => void;
}) {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const titleRef = useRef(null);

  // 👇 Check if ORMEE HAIR is visible
  const isInView = useInView(titleRef, { amount: 0.5 }); // visible at least 50%

  // Toggle navbar brand when text leaves view
  useEffect(() => {
    onToggleBrand(!isInView);
  }, [isInView, onToggleBrand]);

  return (
     <section className="relative w-full h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 w-full h-full">
        
        {/* LEFT SIDE - video1 */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={getVideoUrl("video1.mp4")} type="video/mp4" />
          </video>
          
        </div>

        {/* RIGHT SIDE - video2 */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={getVideoUrl("video2.mp4")} type="video/mp4" />
          </video>
          <div
          />
        </div>
      </div>
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10 pt-22">
        <motion.h1
          ref={titleRef}
          layoutId="brandText"
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="text-5xl md:text-7xl font-serif font-bold tracking-wide text-white]"
        >
          ORMEE HAIR
        </motion.h1>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up">
          Heritage in every strand. Discover the finest collection of Remy and
          Virgin hair extensions, crafted with heritage techniques and
          uncompromising quality for the modern woman.
        </p>

        {/* Buttons below */}
<div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-in-up">
  <Button
  size="xl"
  className="min-w-[200px] bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-lg hover:bg-white/40 hover:scale-105 active:scale-95 transition-all duration-300"
>
  Discover Remy Hair
</Button>
  <Button
  size="xl"
  className="min-w-[200px] bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-lg hover:bg-white/40 hover:scale-105 active:scale-95 transition-all duration-300"
>
    Discover Virgin Hair
  </Button>
</div>

        {/* Floating Badge 
        <div className="mt-16 animate-float">
          <div className="inline-flex items-center px-8 py-4 bg-card/90 backdrop-blur-sm rounded-2xl shadow-luxury border border-border/50">
            <div className="text-left">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                New Arrivals
              </p>
              <p className="text-lg font-semibold text-foreground">
                Latest Collection Available
              </p>
            </div>
          </div>
        </div>*/}
      </div>

      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}

