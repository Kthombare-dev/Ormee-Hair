"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import NewNav from "../components/NewNav";


export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // ✅ Optional: send form data to backend here
  };

  // ⏳ Reset form after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="w-full">
      <NewNav/>

      {/*  Hero Section */}
      <section className="relative w-full h-[550px] rounded-b-3xl overflow-hidden">
        <video
          src="/consultation-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex flex-col items-start justify-center px-10 md:px-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Personalized Hair <br /> Consultation
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
            Get expert guidance to choose the perfect extensions for your hair
            type, lifestyle, and goals. Feel confident in every look.
          </p>
          <Link
            href="#form"
            className="px-6 py-3 bg-black text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Start My Consultation
          </Link>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* Card 1 */}
          <div className="group relative bg-white shadow-lg rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="relative z-10 flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-5">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tailored Advice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get recommendations based on your natural hair and goals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white shadow-lg rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="relative z-10 flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-5">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Expert Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our specialists help you avoid costly mistakes.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white shadow-lg rounded-2xl p-8 transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="relative z-10 flex flex-col items-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-5">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Confidence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Choose with certainty and enjoy your perfect look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Consultation Form */}
      <section id="form" className="py-16 px-6 bg-gray-50">
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-3xl p-10 relative z-10">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold mb-4 font-serif text-black">
                  Book Your Free Consultation
                </h2>
                <p className="mb-8 text-gray-600">
                  Let our experts help you select the right extensions for your
                  unique style and needs.
                </p>

                <form className="space-y-5 text-left" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone (optional)"
                    className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                  <textarea
                    placeholder="Tell us about your hair type and goals..."
                    className="w-full border border-gray-300 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="w-full h-12 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 hover:scale-[1.02] transition transform shadow-md"
                  >
                    Book My Consultation
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 animate-fadeIn">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your consultation request has been submitted. <br /> Our team
                  will reach out to you shortly.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  Redirecting back to the form...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
