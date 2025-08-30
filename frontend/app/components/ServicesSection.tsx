"use client";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-accent text-accent-foreground w-full">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mt-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-primary-glow">Our Services</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover premium care designed to help you look and feel your best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Service 1 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Mail Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Let’s Text</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Be the first to know via SMS.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Briefcase Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Premium salon & hair care.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Message Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Got questions? We’re here.
            </p>
          </div>

          {/* Service 4 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Truck Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65l-3.7-4.35H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              On orders above £300.
            </p>
          </div>

          {/* Service 5 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Wrench Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M22 2l-6 6" />
                <circle cx="16" cy="16" r="6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Warranty & Repairs</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              One-year product warranty.
            </p>
          </div>

          {/* Service 6 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Droplets Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C12 2 6 10 6 14a6 6 0 0 0 12 0c0-4-6-12-6-12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Washing & Cleaning</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Gentle care, lasting wear.
            </p>
          </div>

          {/* Service 7 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* Phone Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.79 19.79 0 0 1 3.07 8.81 19.79 19.79 0 0 1 0 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72c.2 1.52.73 2.98 1.56 4.25a2 2 0 0 1-.45 2.47L7.09 9.91a16 16 0 0 0 7 7l2.47-1.02a2 2 0 0 1 2.47.45c1.27.83 2.73 1.36 4.25 1.56A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone Orders</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Call us to place your order.
            </p>
          </div>

          {/* Service 8 */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <div className="mb-4 flex items-center justify-center">
              {/* WhatsApp Icon */}
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 12.5a9.5 9.5 0 1 1-18.5 5.1l-1.5 5 5.2-1.4A9.5 9.5 0 1 1 21.5 12.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="opacity-80 leading-relaxed mb-2">
              Quick help anytime.
            </p>
          </div>
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
