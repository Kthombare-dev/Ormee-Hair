"use client";

import Image from "next/image";

export default function CollectionsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect hair extension for your unique style and needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Remy Hair */}
          <div
            className="card-luxury group overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fremy-hair-hero.jpg?alt=media&token=8a1d4282-412d-460b-a7e8-a5ff3453710e"
                alt="Remy Hair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-serif font-semibold text-accent">
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Remy Hair
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Premium quality with cuticles aligned for natural flow and shine
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    100% Human Hair
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Natural Cuticle Direction
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Long-lasting
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Easy to Style
                  </span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-14 px-8 py-4 text-lg font-semibold w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                Shop Remy Hair
              </button>
            </div>
          </div>

          {/* Virgin Hair */}
          <div
            className="card-luxury group overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fvirgin-hair-hero.jpg?alt=media&token=8afb7371-0578-4640-ac15-780b658a2a95"
                alt="Virgin Hair"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-serif font-semibold text-accent">
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Virgin Hair
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Completely unprocessed hair in its most natural state
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Never Chemically Treated
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Superior Quality
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Maximum Durability
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">
                    Natural Texture
                  </span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-14 px-8 py-4 text-lg font-semibold w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                Shop Virgin Hair
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground tracking-wide hover:shadow-glow hover:scale-105 active:scale-95 h-16 px-10 py-5 text-xl font-bold">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
