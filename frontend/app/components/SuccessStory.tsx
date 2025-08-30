"use client";

import Image from "next/image";

export default function SuccessStory() {
  return (
    <section className="section-padding w-full">
      <div className="container mx-auto">
        {/* Success Story */}
        <div className="mb-24">
          <div className="text-center mt-12 mb-16"> {/* 🔥 Added mt-12 */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Team Member <span className="text-gradient">Success Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Once a client, now our Lead Specialist – Sarah’s expertise in premium
              extensions has transformed confidence for thousands of women.
            </p>
          </div>

          <div className="card-luxury overflow-hidden max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fhair-stylist.jpg?alt=media&token=7d0e7531-24ea-404f-9c2f-e8b342ff1b9a"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                    8+ Years
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                  Sarah Chen
                </h3>
                <p className="text-primary font-semibold mb-6">
                  Lead Hair Extension Specialist
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Once a client, now our Lead Specialist – Sarah’s expertise in
                  premium extensions has transformed confidence for thousands of
                  women.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium text-accent">
                      Certified Master Stylist
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium text-accent">
                      10,000+ Happy Clients
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium text-accent">
                      Featured in Top Beauty Magazines
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium text-accent">
                      Winner – Industry Award 2023
                    </span>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-14 px-8 py-4 text-lg font-semibold w-fit">
                  Read Sarah’s Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section (unchanged) */}
      </div>
    </section>
  );
}
