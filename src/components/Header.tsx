import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-opacity-80 transition-colors">
                <span>menu1</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-gray-900">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="hover:text-opacity-80 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-opacity-80 transition-colors">Contact</Link>
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
              <div className="space-y-2">
                <span className="text-white/80 text-sm font-medium">menu1</span>
                <div className="pl-4 space-y-2">
                  <Link to="/" className="block hover:text-opacity-80 transition-colors" onClick={toggleMenu}>Home</Link>
                  <Link to="/services" className="block hover:text-opacity-80 transition-colors" onClick={toggleMenu}>Services</Link>
                </div>
              </div>
              <Link to="/about" className="hover:text-opacity-80 transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="hover:text-opacity-80 transition-colors" onClick={toggleMenu}>Contact</Link>
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