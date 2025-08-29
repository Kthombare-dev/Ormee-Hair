"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 grid grid-cols-2 opacity-30">
        <div className="relative">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fremy-hair-hero.jpg?alt=media&token=8a1d4282-412d-460b-a7e8-a5ff3453710e"
            alt="Luxury Remy Hair"
            fill
            className="object-cover"
            priority
          />
          <div className="image-overlay"></div>
        </div>
        <div className="relative">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fvirgin-hair-hero.jpg?alt=media&token=8afb7371-0578-4640-ac15-780b658a2a95"
            alt="Premium Virgin Hair"
            fill
            className="object-cover"
            priority
          />
          <div className="image-overlay"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-6xl mx-auto">
        <div className="inline-flex items-center px-6 py-2 bg-secondary/80 rounded-full text-accent font-medium mb-6 animate-fade-in-up">
          <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-glow"></span>
          About Us - Premium Hair Collection
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 animate-fade-in-up">
          <span className="text-gradient">Heritage</span>
          <br />
          <span className="text-foreground">in Every</span>
          <br />
          <span className="text-gradient">Strand</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          Discover the finest collection of Remy and Virgin hair extensions,
          crafted with heritage techniques and uncompromising quality for the
          modern woman.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground tracking-wide hover:shadow-glow hover:scale-105 active:scale-95 h-16 px-10 py-5 text-xl font-bold min-w-[200px]">
            Discover Remy Hair
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-16 px-10 py-5 text-xl font-bold min-w-[200px]">
            Discover Virgin Hair
          </button>
        </div>

        {/* Floating Badge */}
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
        </div>
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
