import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud platforms for optimal performance and cost efficiency.",
      features: ["Multi-cloud strategy", "Auto-scaling", "Disaster recovery"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security frameworks protecting your digital assets with advanced threat detection and prevention.",
      features: ["24/7 monitoring", "Penetration testing", "Compliance audits"]
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      description: "Modernize legacy systems and processes with cutting-edge technology to drive innovation and efficiency.",
      features: ["Legacy migration", "Process automation", "AI integration"]
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence.",
      features: ["Real-time dashboards", "Predictive analytics", "Data warehousing"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design and implement robust network architectures that ensure reliability, security, and high performance.",
      features: ["Network design", "Performance optimization", "Security protocols"]
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamline development cycles with CI/CD pipelines, infrastructure as code, and automated deployment strategies.",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring & logging"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-corporate bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT consulting services designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-corporate transition-all duration-300 border-border bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-corporate rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-corporate-green rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="w-full group/btn justify-between mt-4">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="corporate" size="lg" className="group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;