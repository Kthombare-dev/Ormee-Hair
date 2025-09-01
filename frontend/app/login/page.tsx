"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  User,
  ArrowRight,
  Shield,
  Heart
} from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Heart,
      title: "Personalized Recommendations",
      description: "Get hair extension suggestions tailored to your style and needs"
    },
    {
      icon: Shield,
      title: "Exclusive Member Discounts",
      description: "Access special pricing and early access to new collections"
    },
    {
      icon: User,
      title: "Expert Consultations",
      description: "Book one-on-one sessions with our certified stylists"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits & Branding */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  Welcome to Ormee Hair
                </h1>
                <p className="text-lg text-muted-foreground">
                  Join our community of beautiful, confident women who trust Ormee Hair for their extension needs.
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/login-hero.jpg"
                  alt="Beautiful hair extensions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Member Benefits</h2>
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 rounded-lg p-2 mt-1">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Login/Signup Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif font-bold mb-2">
                  {isSignUp ? 'Create Your Account' : 'Welcome Back'}
                </h2>
                <p className="text-muted-foreground">
                  {isSignUp 
                    ? 'Start your journey to beautiful hair' 
                    : 'Sign in to access your account'
                  }
                </p>
              </div>

              <form className="space-y-6">
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#efede7] focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                )}

                {!isSignUp && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-[#efede7] text-primary focus:ring-primary" />
                      <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-black text-white font-semibold shadow hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#efede7]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-[#efede7] hover:bg-[#efede7]/50 transition-all"
                  >
                    <div className="w-5 h-5 bg-red-500 rounded mr-2"></div>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-[#efede7] hover:bg-[#efede7]/50 transition-all"
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded mr-2"></div>
                    Facebook
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-primary hover:underline font-medium"
                    >
                      {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                  </p>
                </div>

                {isSignUp && (
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      By creating an account, you agree to our{' '}
                      <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
