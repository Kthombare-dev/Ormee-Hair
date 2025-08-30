"use client";

import Image from "next/image";

export default function CollectionsSection() {
  return (
    <section className="section-padding bg-secondary/30 w-full">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mt-10 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect hair extension for your unique style and needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Remy Hair */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-background group hover:shadow-xl transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fremy-hair-hero.jpg?alt=media&token=8a1d4282-412d-460b-a7e8-a5ff3453710e"
                alt="Remy Hair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-accent">
                  Premium Quality
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Remy Hair
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Premium quality with cuticles aligned for natural flow and shine.
              </p>

              <ul className="grid grid-cols-2 gap-y-3 mb-8 text-sm font-medium text-accent">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  100% Human Hair
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Natural Cuticle Direction
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Long-lasting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Easy to Style
                </li>
              </ul>

              <button className="w-full h-12 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Shop Remy Hair
              </button>
            </div>
          </div>

          {/* Virgin Hair */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-background group hover:shadow-xl transition-all duration-500">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fvirgin-hair-hero.jpg?alt=media&token=8afb7371-0578-4640-ac15-780b658a2a95"
                alt="Virgin Hair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-accent">
                  Premium Quality
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Virgin Hair
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Completely unprocessed hair in its most natural state.
              </p>

              <ul className="grid grid-cols-2 gap-y-3 mb-8 text-sm font-medium text-accent">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Never Chemically Treated
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Superior Quality
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Maximum Durability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Natural Texture
                </li>
              </ul>

              <button className="w-full h-12 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Shop Virgin Hair
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 px-10 py-4 text-lg">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
