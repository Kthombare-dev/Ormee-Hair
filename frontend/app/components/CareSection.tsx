"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Scissors, Film, Waves, Circle } from "lucide-react"; 
import {
  Droplets,
  Sparkles,
  Clock,
  Heart,
  UserCheck,
   ArrowRight,
} from "lucide-react";

const CareSection = () => {
  const router = useRouter();
  return (
    <section className="relative py-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Refined: Washing and Cleaning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips to keep your extensions beautiful, healthy, and long-lasting.
          </p>
        </div>

        {/* Image Centered */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/ormee-hair-62ddb.firebasestorage.app/o/herosection-image%2Fhair-care-products.jpg?alt=media&token=55ec902a-d96b-4c43-a1d6-e591c2977184" 
              alt="Hair care products"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Tips Below Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Washing */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <Droplets className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Gentle Cleansing (Refined)
                </h3>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Wash with sulfate-free shampoos to protect natural oils and integrity.</li>
                  <li>Lukewarm Water Only</li>
                  <li>Gentle Scalp Massage</li>
                  <li>Focus on Roots, Not Lengths</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Moisture */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Moisture Restoration (Refined)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Keep your extensions soft, silky, and manageable.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Weekly Deep Treatments</li>
                  <li>Leave-in Conditioners</li>
                  <li>Natural Oil Care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Wear */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Extended Wear (Refined)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Simple care for longer-lasting beauty.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Protective Sleep Styles</li>
                  <li>Regular Brushing Routine</li>
                  <li>Professional Check-ups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complete Kit */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Complete Care Kit (Refined)
                </h3>
                <p className="text-muted-foreground">
                  Complete Care Kit – All-in-one solution for healthy, lasting extensions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Care - Bottom Center */}
        <div className="mt-12 flex justify-center">
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md max-w-xl w-full">
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Need Professional Care? (Refined)
                </h3>
                <p className="text-muted-foreground ">
                  Need Expert Care? Our certified specialists are here to guide you.
                </p>
                 <div className="flex justify-center py-5">
                  <button
                   onClick={() => router.push("/consultation")}
                  className="px-8 py-3 rounded-lg bg-black text-white font-semibold shadow hover:shadow-lg transition flex items-center gap-2"
                   >
                   Book Consultation
                   <ArrowRight className="w-5 h-5" />
                  </button>

                  {/*<button className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition">
                    Shop Care Products
                  </button>*/}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
