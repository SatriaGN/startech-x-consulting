import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current route is one of the dropdown children
  const isDropdownActive = location.pathname === "/" || location.pathname === "/services";

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
              <DropdownMenuTrigger className={`flex items-center space-x-1 transition-all duration-300 group px-3 py-2 rounded-lg ${
                isDropdownActive 
                  ? 'bg-corporate-green text-white shadow-glow' 
                  : 'hover:text-corporate-green hover:bg-white/10'
              }`}>
                <span className="font-medium">menu1</span>
                <ChevronDown size={16} className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant min-w-[200px] p-2" 
                sideOffset={8}
              >
                <DropdownMenuItem asChild className="rounded-lg mb-1">
                  <Link 
                    to="/" 
                    className="w-full px-4 py-3 text-gray-700 hover:bg-gradient-corporate hover:text-white transition-all duration-300 rounded-lg font-medium"
                  >
                    🏠 Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-lg">
                  <Link 
                    to="/services" 
                    className="w-full px-4 py-3 text-gray-700 hover:bg-gradient-corporate hover:text-white transition-all duration-300 rounded-lg font-medium"
                  >
                    ⚙️ Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="hover:text-corporate-green transition-colors duration-300 font-medium">About</Link>
            <Link to="/contact" className="hover:text-corporate-green transition-colors duration-300 font-medium">Contact</Link>
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