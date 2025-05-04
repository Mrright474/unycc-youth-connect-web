
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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png" 
              alt="UNYCC Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="ml-2 text-lg font-semibold hidden sm:block">UNYCC</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/about") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              About
            </Link>
            <Link 
              to="/join" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/join") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Join
            </Link>
            <Link 
              to="/structure" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/structure") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Structure
            </Link>
            <Link 
              to="/programs" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/programs") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/contact") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/donations" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/donations") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Donate
            </Link>
          </div>
          
          {/* Join CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/join">Get Involved</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 px-2">
          <div className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
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
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/join" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
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
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isActive("/structure") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Structure
            </Link>
            <Link 
              to="/programs" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isActive("/programs") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-base font-medium ${
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
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isActive("/donations") 
                  ? "bg-unblue text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={closeMenu}
            >
              Donate
            </Link>
            <Link 
              to="/join" 
              className="mt-2 block"
              onClick={closeMenu}
            >
              <Button className="w-full">Get Involved</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
