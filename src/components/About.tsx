import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Target, number: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, number: "99.9%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      title: "Client Success",
      description: "Your success is our mission. We build long-term partnerships based on trust, transparency, and results."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About <span className="bg-gradient-corporate bg-clip-text text-transparent">Startech-X</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, 
                Startech-X has been at the forefront of digital innovation for over 15 years.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We are a team of passionate technologists, strategists, and innovators who understand 
                that technology is not just about code—it's about transforming businesses and empowering 
                people to achieve more.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans across cloud computing, cybersecurity, data analytics, and digital 
                transformation, helping organizations of all sizes navigate the complexities of modern technology.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="border-l-4 border-corporate-green pl-4 space-y-1">
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="corporate" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-corporate transition-all duration-300 border-border">
                    <CardContent className="space-y-3 p-0">
                      <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                        <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-corporate-subtle border-border p-8">
              <CardContent className="space-y-4 p-0">
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create sustainable competitive advantages in an 
                  ever-evolving digital landscape.
                </p>
                <div className="pt-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <Target className="w-5 h-5" />
                    <span className="font-semibold">Driving Digital Excellence Since 2009</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;