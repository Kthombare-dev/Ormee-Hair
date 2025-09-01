"use client";

import Image from "next/image";
import { 
  Heart, 
  Users, 
  Award, 
  Sparkles,
  Clock,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We believe every woman deserves to feel confident and beautiful with hair that reflects her unique style."
    },
    {
      icon: Shield,
      title: "Quality Commitment",
      description: "Only the finest, ethically-sourced hair extensions that meet our rigorous quality standards."
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans hand-select and craft each extension with meticulous attention to detail."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Continuously developing new techniques and products to enhance your hair extension experience."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "/team/sarah.jpg",
      bio: "With 15+ years in hair styling, Sarah founded Ormee Hair to make premium extensions accessible to everyone."
    },
    {
      name: "Maria Rodriguez",
      role: "Master Stylist",
      image: "/team/maria.jpg",
      bio: "Certified in advanced extension techniques, Maria leads our styling education and consultation services."
    },
    {
      name: "Emily Chen",
      role: "Quality Specialist",
      image: "/team/emily.jpg",
      bio: "Emily ensures every extension meets our premium standards through rigorous testing and quality control."
    }
  ];

  const achievements = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About Ormee Hair
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting beautiful, natural hair extensions with passion, precision, and an unwavering commitment to quality since 2009.
            </p>
          </div>

          {/* Main Story Image */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-4xl h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/ormeelogo.jpeg" 
                alt="Ormee Hair story"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Story</h2>
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-md">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ormee Hair was born from a simple belief: every woman should have access to beautiful, high-quality hair extensions that enhance her natural beauty. Founded in 2009 by master stylist Sarah Johnson, we started as a small studio with a big dream.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What began as a passion project has grown into a trusted brand serving thousands of women worldwide. We've never lost sight of our core mission: to provide premium hair extensions that look natural, feel comfortable, and last beautifully.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Ormee Hair continues to set industry standards through innovation, quality, and an unwavering commitment to customer satisfaction. Every extension tells a story of craftsmanship, care, and the pursuit of beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center shadow-md">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Transform Your Look?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Ormee Hair for their extension needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:shadow-lg transition-all">
                Shop Collections
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
