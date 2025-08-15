import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-corporate-subtle"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-corporate-green/5 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-corporate-blue/10 rounded-full animate-[float_4s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-primary/5 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-corporate-green/10 to-corporate-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Transform Your Business with 
                <span className="bg-gradient-corporate bg-clip-text text-transparent"> Expert IT Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in delay-200">
                Journal-X delivers cutting-edge journal publishing consulting that accelerates research publication, 
                enhances acceptance rates, and drives academic success for researchers and institutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 animate-fade-in delay-500">
              {[
                "Expert Journal Selection & Matching",
                "Manuscript Review & Enhancement", 
                "Publication Process Management"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${600 + index * 100}ms`}}>
                  <CheckCircle className="text-corporate-green w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-1000">
              <Button variant="corporate" size="lg" className="group">
                Start Your Publication Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="corporate-outline" size="lg">
                Schedule Free Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border animate-fade-in delay-1200">
              <p className="text-sm text-muted-foreground mb-3">Trusted by 500+ researchers worldwide</p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <span className="text-2xl font-bold text-corporate-green">500+</span>
                <span className="text-sm">Papers Published</span>
                <span className="text-2xl font-bold text-corporate-blue">95%</span>
                <span className="text-sm">Success Rate</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in delay-700">
            <div className="bg-gradient-corporate p-8 rounded-2xl shadow-elegant hover-scale">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">Journal Success Rate</span>
                  <span className="text-green-300">+18% ↑</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Acceptance Rate</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-300 h-2 rounded-full w-[87%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Publications This Month</span>
                    <span>23</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full w-[76%]"></div>
                  </div>
                </div>
                <div className="pt-2 text-white/60 text-xs">
                  Live publication tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;