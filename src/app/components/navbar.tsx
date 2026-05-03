import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Link, useNavigate, useLocation } from "react-router";
import logo from "figma:asset/005df1f965f8a32d07a0bcc0c23a7079e8988399.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsOpen(false);

    // If we're already on the home page, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#8fa670]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="PropDAO Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-[#2a2d1f]">PropDAO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/#about" 
              onClick={(e) => scrollToSection('about', e)} 
              className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              About
            </a>
            <a 
              href="/#faq" 
              onClick={(e) => scrollToSection('faq', e)} 
              className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              FAQ
            </a>
            <a 
              href="/#tokenomics" 
              onClick={(e) => scrollToSection('tokenomics', e)} 
              className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              Tokenomics
            </a>
            <Link to="/whitepaper" className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors">
              Whitepaper
            </Link>
            <Link to="/pairs" className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors">
              Pairs
            </Link>
            <Link to="/contact" className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors">
              Contact Us
            </Link>
            <Link to="/get-funded">
              <Button className="bg-[#8fa670] hover:bg-[#7a9160] text-white">
                Get Funded
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2a2d1f] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/#about"
              onClick={(e) => scrollToSection('about', e)}
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              About
            </a>
            <a
              href="/#faq"
              onClick={(e) => scrollToSection('faq', e)}
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              FAQ
            </a>
            <a
              href="/#tokenomics"
              onClick={(e) => scrollToSection('tokenomics', e)}
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
            >
              Tokenomics
            </a>
            <Link
              to="/whitepaper"
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Whitepaper
            </Link>
            <Link
              to="/pairs"
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pairs
            </Link>
            <Link
              to="/contact"
              className="block text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/get-funded" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#8fa670] hover:bg-[#7a9160] text-white">
                Get Funded
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}