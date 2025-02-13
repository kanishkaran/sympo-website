import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import CountdownTimer from "../components/CountdownTimer";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen relative">
        {isMobile ? (
          // Mobile Background - iFrame
          <Spline
            scene="https://prod.spline.design/8oUDB3Qzbwj9cCKL/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          // Desktop Background - Spline
          <Spline
            scene="https://prod.spline.design/8kGDuZ0OhZHtHhrw/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue/50 opacity-75"></div>
        <div className="absolute bottom-16 w-full text-center px-4">
          <div className="flex flex-col items-center mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-black/50 backdrop-blur-sm p-3 sm:p-4 rounded-md flex items-center text-white text-xs sm:text-sm md:text-base shadow-lg">
                <Calendar className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                <span>Feb 15, 2025</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-3 sm:p-4 rounded-md flex items-center text-white text-xs sm:text-sm md:text-base shadow-lg">
                <MapPin className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                <span>Velammal Engineering College</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-3 sm:p-4 rounded-md flex items-center text-white text-xs sm:text-sm md:text-base shadow-lg">
                <Users className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                <span>Department of AI & DS</span>
              </div>
            </div>
            <div className="mb-6 md:mb-8">
              <CountdownTimer />
            </div>
            <button
              className="bg-gradient-to-r from-blue-500 to-yellow-500 text-navy px-6 py-2 sm:px-8 sm:py-3 rounded-md font-bold text-sm sm:text-lg hover:opacity-90 transition shadow-lg"
            >
              Registerations Closed!
            </button>
          </div>
        </div>
      </div>


      {/* Events Preview */}
      <div className="py-12 md:py-16 bg-light-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-navy-gradient text-center mb-8 sm:mb-12">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-navy to-navy-light p-4 sm:p-6 rounded-lg text-white shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gold-gradient mb-2 sm:mb-4">
                Technical Events
              </h3>
              <p className="text-sm sm:text-base mb-4">
                Showcase your technical prowess in our cutting-edge competitions.
              </p>
              <Link 
              to="/events?filter=technical" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gold hover:text-gold-light text-sm sm:text-base">
                Learn more →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light p-4 sm:p-6 rounded-lg text-white shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gold-gradient mb-2 sm:mb-4">
                Non-Technical Events
              </h3>
              <p className="text-sm sm:text-base mb-4">
                Participate in fun and engaging activities beyond technology.
              </p>
              <Link 
              to="/events?filter=non-technical"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="text-gold hover:text-gold-light text-sm sm:text-base">
                Learn more →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light p-4 sm:p-6 rounded-lg text-white shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gold-gradient mb-2 sm:mb-4">
                Workshop
              </h3>
              <p className="text-sm sm:text-base mb-4">
                Learn from industry experts in our intensive workshop sessions.
              </p>
              <Link 
              to="/events?filter=workshop" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gold hover:text-gold-light text-sm sm:text-base">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
