"use client";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-primary-glow">Our Services</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover premium services designed to help you look and feel your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-mail h-10 w-10">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Let’s text</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Be the first to hear when you sign-up to SMS messaging.
            </p>
            <div className="space-y-1">
              <a href="#" className="text-sm font-semibold underline">
                Sign Up Now
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-briefcase h-10 w-10">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              We provide premium salon and hair care services for all your needs.
            </p>
            <div className="space-y-1">
              <a href="#" className="text-sm font-semibold underline">
                View Services
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-message-square h-10 w-10">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Questions? Ask away. We love hearing from you.
            </p>
            <div className="space-y-1">
              <a href="#" className="text-sm font-semibold underline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-truck h-10 w-10">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="opacity-80 leading-relaxed mb-2">On orders over £300.</p>
            <div className="space-y-1">
              <a href="#" className="text-sm font-semibold underline">
                About Shipping
              </a>
              <a href="#" className="text-sm font-semibold underline">
                About Returns
              </a>
            </div>
          </div>

          {/* ... continue same pattern for other services (Wrench, Droplets, Phone, WhatsApp) ... */}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 opacity-60">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">10K+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">5★</p>
            <p className="text-sm">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">99%</p>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary-glow">2-3</p>
            <p className="text-sm">Days Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
