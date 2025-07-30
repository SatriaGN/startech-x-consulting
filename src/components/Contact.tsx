import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@startech-x.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Mon - Fri, 9AM - 6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      subtext: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:00 AM - 6:00 PM",
      subtext: "Monday through Friday"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-corporate bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how Startech-X can help you 
            achieve your technology goals and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Send us a message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="border-border" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@company.com" className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" className="border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input placeholder="Your Company Name" className="border-border" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">How can we help you?</label>
                  <Textarea 
                    placeholder="Tell us about your project, challenges, or questions..."
                    rows={6}
                    className="border-border resize-none"
                  />
                </div>

                <Button variant="corporate" size="lg" className="w-full group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-border hover:shadow-corporate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-corporate rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="bg-gradient-corporate text-white border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Ready to Get Started?</h3>
                <p className="text-white/80 leading-relaxed">
                  Schedule a free consultation with our experts to discuss your 
                  specific needs and explore how we can help.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;