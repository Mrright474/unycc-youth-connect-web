
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Made more prominent */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <img 
              src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png" 
              alt="UNYCC Logo" 
              className="h-12 w-auto object-contain lg:h-16" 
            />
            <span className="ml-3 text-xl font-bold text-unblue lg:text-2xl">UNYCC</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/programs") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Programs
            </Link>
            <Link 
              to="/news" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/news") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              News
            </Link>
            <Link 
              to="/events" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/events") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Events
            </Link>
            <Link 
              to="/join" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/join") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Join
            </Link>
            <Link 
              to="/structure" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/structure") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Structure
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/donations" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/donations") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Donate
            </Link>
          </div>
          
          {/* Join CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-unblue hover:bg-unblue-dark">
              <Link to="/join">Get Involved</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
            <Link 
              to="/" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/about") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/programs") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Programs
            </Link>
            <Link 
              to="/news" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/news") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              News
            </Link>
            <Link 
              to="/events" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/events") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link 
              to="/join" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/join") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Join
            </Link>
            <Link 
              to="/structure" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/structure") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Structure
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/contact") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              to="/donations" 
              className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                isActive("/donations") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Donate
            </Link>
            <div className="pt-4 pb-2">
              <Link 
                to="/join" 
                className="block"
                onClick={closeMenu}
              >
                <Button className="w-full bg-unblue hover:bg-unblue-dark">Get Involved</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
