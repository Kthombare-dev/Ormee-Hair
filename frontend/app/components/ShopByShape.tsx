"use client";

import Image from "next/image";
import { Scissors, Film, Waves, Circle } from "lucide-react"; 
import { useRouter } from "next/navigation";

export default function ShopByShape() {
  const router = useRouter(); // 👈 must be inside component

  const options = [
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Clip-In Extensions",
      desc: "Easy application, perfect for daily wear",
      delay: "0ms",
    },
    {
      icon: <Film className="w-8 h-8 text-primary" />,
      title: "Tape-In Extensions",
      desc: "Semi-permanent solution, lasts 6-8 weeks",
      delay: "100ms",
    },
    {
      icon: <Waves className="w-8 h-8 text-primary" />,
      title: "Weft Extensions",
      desc: "Professional application, maximum volume",
      delay: "200ms",
    },
    {
      icon: <Circle className="w-8 h-8 text-primary" />,
      title: "Closure Pieces",
      desc: "Complete coverage for thinning areas",
      delay: "300ms",
    },
  ];

  return (
    <section className="section-padding w-full">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mt-10 mb-16">
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
            <div className="card-luxury overflow-hidden rounded-2xl">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fhair-clips-shapes.jpg?alt=media&token=23834ede-41df-40ae-91f2-865cb0139a0b"
                alt="Hair Extension Shapes and Accessories"
                width={800}
                height={600}
                className="w-full h-96 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-2xl p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground">Shape Options</p>
              </div>
            </div>
          </div>

          {/* Right options */}
          <div className="space-y-6">
            {options.map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium bg-secondary/50 text-accent hover:bg-secondary hover:scale-105 h-10 px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <div className="bg-gradient-to-b from-white to-secondary/20 shadow-md rounded-2xl p-9 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Not Sure Which Shape to Choose?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our hair experts are here to help you find the perfect match for
              your hair type and lifestyle.
            </p>
            <button
  onClick={() => router.push("/consultation")} 
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-black bg-black text-white font-semibold hover:bg-gray-900 hover:shadow-lg hover:scale-105 h-12 px-6 text-base"
>
  Get Personal Consultation
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
