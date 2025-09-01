"use client";

import Image from "next/image";
import { 
  Droplets, 
  Sparkles, 
  Clock, 
  Heart, 
  UserCheck,
  Shield,
  Sun,
  Moon,
  Scissors
} from "lucide-react";

const CareGuide = () => {
  const careSteps = [
    {
      icon: Droplets,
      title: "Pre-Wash Preparation",
      description: "Gently detangle your extensions using a wide-tooth comb, starting from the ends and working upward.",
      tips: [
        "Use a detangling spray for easier combing",
        "Never brush wet extensions aggressively",
        "Start from the bottom and work your way up"
      ]
    },
    {
      icon: Sparkles,
      title: "Washing Technique",
      description: "Use sulfate-free shampoo with lukewarm water for gentle cleansing.",
      tips: [
        "Focus shampoo on the scalp and roots",
        "Let suds run down the length naturally",
        "Avoid circular motions that cause tangling"
      ]
    },
    {
      icon: Heart,
      title: "Deep Conditioning",
      description: "Apply conditioner from mid-length to ends, avoiding the attachment points.",
      tips: [
        "Leave conditioner for 3-5 minutes",
        "Use a wide-tooth comb to distribute evenly",
        "Rinse thoroughly with cool water"
      ]
    },
    {
      icon: Sun,
      title: "Drying Process",
      description: "Gently squeeze out excess water and air dry when possible.",
      tips: [
        "Use a microfiber towel to pat dry",
        "Apply heat protectant before blow-drying",
        "Use low heat settings only"
      ]
    },
    {
      icon: Shield,
      title: "Daily Protection",
      description: "Protect your extensions from environmental damage and styling stress.",
      tips: [
        "Use UV protection sprays",
        "Avoid excessive heat styling",
        "Sleep with a silk pillowcase"
      ]
    },
    {
      icon: Moon,
      title: "Nighttime Care",
      description: "Proper nighttime routine to prevent tangling and damage.",
      tips: [
        "Braid loosely or use a silk scrunchie",
        "Apply leave-in treatment to ends",
        "Use a silk or satin pillowcase"
      ]
    }
  ];

  const maintenanceSchedule = [
    {
      frequency: "Daily",
      tasks: ["Gentle brushing", "Protective styling", "UV protection"],
      icon: Sun
    },
    {
      frequency: "Weekly",
      tasks: ["Deep conditioning", "Scalp massage", "Professional brushing"],
      icon: Sparkles
    },
    {
      frequency: "Monthly",
      tasks: ["Professional check-up", "Trim if needed", "Deep cleansing treatment"],
      icon: Scissors
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Complete Care Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the art of hair extension care with our comprehensive guide. Keep your extensions beautiful, healthy, and long-lasting.
            </p>
          </div>

          {/* Featured Image */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-4xl h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/care-guide-hero.jpg"
                alt="Hair care guide"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Care Steps */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Step-by-Step Care Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Maintenance Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceSchedule.map((schedule, index) => {
              const IconComponent = schedule.icon;
              return (
                <div key={index} className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-md text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{schedule.frequency}</h3>
                  <ul className="space-y-2">
                    {schedule.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-muted-foreground">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 text-center">
            <UserCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-4">
              Need Professional Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our certified hair extension specialists are here to provide personalized care advice and professional maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:shadow-lg transition-all">
                Book Consultation
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                Shop Care Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareGuide;
