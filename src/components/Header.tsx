import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-corporate text-white shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-corporate-green font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold">Startech-X</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-opacity-80 transition-colors">Home</a>
            <a href="/services" className="hover:text-opacity-80 transition-colors">Services</a>
            <a href="/about" className="hover:text-opacity-80 transition-colors">About</a>
            <a href="/contact" className="hover:text-opacity-80 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="secondary" size="lg" className="font-semibold">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/" className="hover:text-opacity-80 transition-colors">Home</a>
              <a href="/services" className="hover:text-opacity-80 transition-colors">Services</a>
              <a href="/about" className="hover:text-opacity-80 transition-colors">About</a>
              <a href="/contact" className="hover:text-opacity-80 transition-colors">Contact</a>
              <Button variant="secondary" size="lg" className="font-semibold mt-4">
                Get Consultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;