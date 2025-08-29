// app/components/SuccessStory.tsx (or wherever you want to place it)

import Image from "next/image";

export default function SuccessStory() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Success Story */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Success Story of <span className="text-gradient">Team Member</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformation stories from our expert team members
            </p>
          </div>

          <div className="card-luxury overflow-hidden max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/assets/hair-stylist-Ca2syHXX.jpg"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary text-primary-foreground">
                    8+ Years
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                  Sarah Chen
                </h3>
                <p className="text-primary font-semibold mb-6">
                  Lead Hair Extension Specialist
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  From struggling with thin hair to becoming our lead specialist, Sarah&apos;s journey with premium extensions transformed not only her look but her entire confidence. Her expertise now helps thousands of women discover their perfect hair solution.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-accent">
                      Certified Master Stylist
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-accent">
                      10,000+ Satisfied Clients
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-accent">
                      Featured in Beauty Magazine
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-accent">
                      Industry Award Winner 2023
                    </span>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-luxury hover:scale-105 h-14 px-8 py-4 text-lg font-semibold w-fit">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to helping you achieve your perfect look
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                initials: "ER",
                name: "Emma Rodriguez",
                role: "Senior Stylist",
                desc: "Virgin Hair Expert",
                exp: "6 years",
                delay: "0ms",
              },
              {
                initials: "MJ",
                name: "Michael Johnson",
                role: "Color Specialist",
                desc: "Remy Hair Matching",
                exp: "5 years",
                delay: "150ms",
              },
              {
                initials: "OK",
                name: "Olivia Kim",
                role: "Extension Consultant",
                desc: "Shape & Style Advisor",
                exp: "4 years",
                delay: "300ms",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="card-luxury text-center group animate-fade-in-up"
                style={{ animationDelay: member.delay }}
              >
                <div className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <span className="text-2xl font-serif font-bold text-primary-foreground">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.desc}</p>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                    {member.exp}
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary/50 text-accent hover:bg-secondary hover:scale-105 h-10 px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="card-luxury p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready for Your Transformation?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation with our expert team to find your perfect hair solution
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground tracking-wide hover:shadow-glow hover:scale-105 active:scale-95 h-14 px-8 py-4 text-lg font-semibold">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
