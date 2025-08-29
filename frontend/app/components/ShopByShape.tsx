"use client";

import Image from "next/image";

export default function ShopByShape() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Shop by <span className="text-gradient">Shape</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect extension type for your lifestyle and hair goals
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left image card */}
          <div className="relative">
            <div className="card-luxury overflow-hidden">
              <Image
                src="/assets/hair-clips-shapes-Bhw1Q2nA.jpg"
                alt="Hair Extension Shapes and Accessories"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card shadow-luxury rounded-2xl p-6 border border-border/50">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Shape Options</p>
              </div>
            </div>
          </div>

          {/* Right options */}
          <div className="space-y-6">
            {[
              {
                icon: "📎",
                title: "Clip-In Extensions",
                desc: "Easy application, perfect for daily wear",
                delay: "0ms",
              },
              {
                icon: "🎞️",
                title: "Tape-In Extensions",
                desc: "Semi-permanent solution, lasts 6-8 weeks",
                delay: "100ms",
              },
              {
                icon: "🌊",
                title: "Weft Extensions",
                desc: "Professional application, maximum volume",
                delay: "200ms",
              },
              {
                icon: "⭕",
                title: "Closure Pieces",
                desc: "Complete coverage for thinning areas",
                delay: "300ms",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary/50 text-accent hover:bg-secondary hover:scale-105 h-10 px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="card-luxury p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Not Sure Which Shape to Choose?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our hair experts are here to help you find the perfect match for
              your hair type and lifestyle.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-14 px-8 py-4 text-lg font-semibold">
              Get Personal Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
