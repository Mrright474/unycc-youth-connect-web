import { Link } from "react-router-dom";
import { Mail, Facebook, Twitter, Instagram, Linkedin, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-ungray-light pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/lovable-uploads/1ddde308-f2d4-42ba-be9d-a316584451ce.png"
              alt="UNYCC Logo"
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-unblue mb-4">UNYCC</h3>
            <p className="text-gray-600 mb-4">
              United Nations Youth Clubs and Communities - Empowering youth to drive sustainable change through leadership, innovation, and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/UNYCC-ORG" target="_blank" className="text-gray-500 hover:text-unblue" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-unblue" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-unblue" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-unblue" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-unblue">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-unblue">About Us</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-600 hover:text-unblue">Join UNYCC</Link>
              </li>
              <li>
                <Link to="/structure" className="text-gray-600 hover:text-unblue">Our Structure</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-600 hover:text-unblue">Programs & Projects</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2" />
                <a href="mailto:unitednationsyouthclubsunycc@gmail.com" className="hover:text-unblue">unitednationsyouthclubsunycc@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2" />
                <a href="tel:+256744552195" className="hover:text-unblue">+256 744 552 195</a>
              </li>
              <li className="flex items-center text-gray-600">
                <Globe size={18} className="mr-2" />
                <span>Uganda, Market Street, Kampala</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest news and events</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="rounded-md" />
              <Button className="btn-primary">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} UNYCC. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-unblue">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-unblue">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
