import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-corporate-subtle"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-corporate bg-clip-text text-transparent"> Expert IT Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Startech-X delivers cutting-edge technology consulting that accelerates growth, 
                enhances efficiency, and drives digital transformation for forward-thinking companies.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "24/7 Premium Support & Monitoring",
                "Scalable Cloud Infrastructure Solutions", 
                "Advanced Cybersecurity & Compliance"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-corporate-green w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="corporate" size="lg" className="group">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="corporate-outline" size="lg">
                Schedule Free Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Trusted by 500+ companies worldwide</p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <span className="text-2xl font-bold text-corporate-green">500+</span>
                <span className="text-sm">Projects Delivered</span>
                <span className="text-2xl font-bold text-corporate-blue">99.9%</span>
                <span className="text-sm">Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-corporate p-8 rounded-2xl shadow-elegant">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium">System Performance</span>
                  <span className="text-green-300">+24% ↑</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>CPU Usage</span>
                    <span>42%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-300 h-2 rounded-full w-[42%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>Network Latency</span>
                    <span>12ms</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full w-[15%]"></div>
                  </div>
                </div>
                <div className="pt-2 text-white/60 text-xs">
                  Real-time monitoring dashboard
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