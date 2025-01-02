import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";
import { gsap } from "gsap";
import Logo from "../assets/logo.png"; // Replace with the correct path to your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Detect scroll to change navbar style
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // GSAP animation for mobile menu
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy text-white" : "bg-[#e3e3e3] text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Event Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <Link
              to="/"
              className={`text-xl md:text-3xl font-bold ${
                isScrolled
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-yellow-500"
                  : "text-black"
              }`}
            >
              COGNEBULA'25
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link
              to="/"
              className={`hover:text-gold transition text-sm lg:text-base ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`hover:text-gold transition text-sm lg:text-base ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Events
            </Link>
            <Link
              to="/workshop"
              className={`hover:text-gold transition text-sm lg:text-base ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Workshop
            </Link>
            <Link
              to="/about"
              className={`hover:text-gold transition text-sm lg:text-base ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/credits"
              className={`hover:text-gold transition text-sm lg:text-base ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Credits
            </Link>
            <button
              onClick={() => window.open("https://your-google-form-url-here", "_blank")}
              className="bg-gradient-to-r from-yellow-500 to-blue-700 text-navy px-4 py-2 rounded-lg font-semibold text-sm lg:text-base hover:opacity-90 transition shadow-lg"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-gold ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* GSAP Animated Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-navy-light to-navy-dark shadow-lg transform translate-x-full md:hidden flex flex-col items-center space-y-6 pt-16 px-4"
        >
          {/* Close Button Inside Menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 text-white hover:text-gold"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Mobile Links */}
          <Link
            to="/"
            className="block text-white hover:text-gold text-sm"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="block text-white hover:text-gold text-sm"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/workshop"
            className="block text-white hover:text-gold text-sm"
            onClick={() => setIsOpen(false)}
          >
            Workshop
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gold text-sm"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/credits"
            className="block text-white hover:text-gold text-sm"
            onClick={() => setIsOpen(false)}
          >
            Credits
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              window.open("https://your-google-form-url-here", "_blank");
            }}
            className="bg-gradient-to-r from-yellow-500 to-blue-700 text-navy px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition shadow-md"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}
