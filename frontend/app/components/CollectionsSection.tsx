"use client";
import { useRouter } from "next/navigation";
export default function CollectionsSection() {
  const router = useRouter();
  return (
    <section className="w-full flex items-center justify-center min-h-[80vh] bg-secondary/30 pt-20 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect hair extension for your unique style and needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full mx-auto justify-items-center">
          <div className="card-luxury group overflow-hidden animate-fade-in-up shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl" style={{ animationDelay: "0ms" }}>

            <div className="relative h-80 overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fvirgin-hair-hero.jpg?alt=media&token=8afb7371-0578-4640-ac15-780b658a2a95"
                alt="Remy Hair"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-serif font-semibold text-accent">Premium Quality</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Remy Hair</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Premium quality with cuticles aligned for natural flow
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">100% Human Hair</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Natural Cuticle Direction</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Long-lasting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Easy to Style</span>
                </div>
              </div>
              <button
                 onClick={() => router.push("/RemyHairs")}
                 className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
                 border-2 border-black bg-transparent text-black 
                 hover:bg-black hover:text-white 
                 hover:shadow-lg hover:scale-105 
                 h-14 px-8 py-4 text-lg font-semibold w-full 
                 transition-all duration-300"
              >
               Shop Remy Hair
              </button>

            </div>
          </div>

          <div className="card-luxury group overflow-hidden animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fremy-hair-hero.jpg?alt=media&token=8a1d4282-412d-460b-a7e8-a5ff3453710e"
                alt="Virgin Hair"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-accent/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-serif font-semibold text-accent">Premium Quality</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Virgin Hair</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Completely unprocessed hair in its most natural state
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Never Chemically Treated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Superior Quality</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Maximum Durability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-sm text-accent font-medium">Natural Texture</span>
                </div>
              </div>
              <button
                 onClick={() => router.push("/VirginHair")}
                 className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
                 border-2 border-black bg-transparent text-black 
                 hover:bg-black hover:text-white 
                 hover:shadow-lg hover:scale-105 
                 h-14 px-8 py-4 text-lg font-semibold w-full 
                 transition-all duration-300"
              >
                Shop Virgin Hair
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button  onClick={() => router.push("/collections")}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white tracking-wide hover:shadow-lg hover:scale-105 active:scale-95 h-16 px-10 py-5 text-xl font-bold">
  View All Collections
</button>

        </div>
      </div>
    </section>
  );
}


