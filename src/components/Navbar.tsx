import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';
import Logo from '../assets/logo.png'; // Replace with the correct path to your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power4.out',
      });
    }
  }, [isOpen]);

  return (
    <nav className="bg-gradient-to-r from-navy to-navy-light shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20 rounded-xl bg-gradient-to-r from-navy to-navy-light px-6 shadow-md">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img src={Logo} alt="Event Logo" className="h-12 w-12" />
            <Link
              to="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-yellow-500 text-3xl font-bold ml-3"
            >
              COGNEBULA'25
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-gold transition">
              Home
            </Link>
            <Link to="/events" className="text-white hover:text-gold transition">
              Events
            </Link>
            <Link to="/workshop" className="text-white hover:text-gold transition">
              Workshop
            </Link>
            <Link to="/about" className="text-white hover:text-gold transition">
              About
            </Link>
            <button
              onClick={() => window.open('https://your-google-form-url-here', '_blank')}
              className="bg-gradient-to-r from-yellow-500 to-blue-700 text-navy px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* GSAP Animated Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-full w-3/4 bg-gradient-to-b from-navy-light to-navy-dark shadow-lg transform translate-x-full md:hidden flex flex-col items-center space-y-8 pt-10"
        >
          {/* Close Button Inside Menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 text-white hover:text-gold"
          >
            <ArrowLeft size={28} />
          </button>

          {/* Mobile Links */}
          <Link
            to="/"
            className="block text-white hover:text-gold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/events"
            className="block text-white hover:text-gold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/workshop"
            className="block text-white hover:text-gold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Workshop
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gold text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              window.open('https://your-google-form-url-here', '_blank');
            }}
            className="bg-gradient-to-r from-yellow-500 to-blue-700 text-navy px-6 py-2 rounded-md font-semibold text-lg hover:opacity-90 transition shadow-md"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}
