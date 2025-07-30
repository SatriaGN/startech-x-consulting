import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-corporate text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-corporate-green font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">Startech-X</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Leading IT consulting firm specializing in digital transformation, 
              cloud solutions, and enterprise technology services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@startech-x.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DevOps & Automation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-white/80">
              Get the latest insights on technology trends and best practices.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="w-full group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2024 Startech-X. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;