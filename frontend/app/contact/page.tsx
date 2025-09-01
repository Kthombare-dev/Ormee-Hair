"use client";

import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Star
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@ormeehair.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Beauty Boulevard, Suite 456",
      subtitle: "New York, NY 10001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM",
      subtitle: "Saturday: 10AM - 4PM"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our extensions or need personalized advice? We're here to help you find the perfect solution for your hair goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Book Consultation</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="care-advice">Care Advice</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Visit Our Studio</h3>
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Located in the heart of New York's beauty district, our studio offers personalized consultations and professional extension services.
                </p>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                  Get Directions
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-[#efede7] hover:bg-primary/5 transition-all">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Book a Consultation</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-[#efede7] hover:bg-primary/5 transition-all">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>Live Chat Support</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 rounded-lg border border-[#efede7] hover:bg-primary/5 transition-all">
                    <Star className="w-5 h-5 text-primary" />
                    <span>Leave a Review</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How long do hair extensions last?",
                answer: "With proper care, our premium extensions can last 6-12 months depending on the type and maintenance routine."
              },
              {
                question: "Do you offer color matching services?",
                answer: "Yes! We provide professional color matching consultations to ensure perfect blend with your natural hair."
              },
              {
                question: "Can I style my extensions with heat tools?",
                answer: "Our extensions can be styled with heat tools up to 350°F. Always use heat protectant products for best results."
              },
              {
                question: "What's your return policy?",
                answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy, we'll work with you to find the perfect solution."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
