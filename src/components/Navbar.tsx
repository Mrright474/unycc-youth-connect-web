
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Join UNYCC", path: "/join" },
    { name: "Our Structure", path: "/structure" },
    { name: "Programs & Projects", path: "/programs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png"
              alt="UNYCC Logo"
              className="h-16 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-unblue transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Button className="btn-primary" asChild>
              <Link to="/join">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-unblue"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 space-y-2 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 px-2 text-gray-700 hover:text-unblue hover:bg-gray-50 rounded"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-2">
              <Button className="w-full btn-primary" asChild>
                <Link to="/join" onClick={toggleMenu}>Get Involved</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
