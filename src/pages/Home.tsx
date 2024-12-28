import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import Logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center bg-hero-gradient"
        
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue/50 to-blue opacity-75"></div>
        <div className="relative text-center px-4">
          <img 
            src={Logo} 
            alt="Event Logo" 
            className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 md:mb-12" 
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-yellow-500 mb-6">
            COGNEBULA'25
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8">
            National Level Technical Symposium
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center text-white text-sm md:text-base">
              <Calendar className="mr-2 w-4 h-4 md:w-6 md:h-6" />
              <span>Feb 15, 2025</span>
            </div>
            <div className="flex items-center text-white text-sm md:text-base">
              <MapPin className="mr-2 w-4 h-4 md:w-6 md:h-6" />
              <span>Department of AI & DS</span>
            </div>
            <div className="flex items-center text-white text-sm md:text-base">
              <Users className="mr-2 w-4 h-4 md:w-6 md:h-6" />
              <span>500+ Participants</span>
            </div>
          </div>
          <div className="mb-6 md:mb-8">
            <CountdownTimer />
          </div>
          <button 
            onClick={() => window.open("https://your-google-form-url-here", "_blank")} 
            className="bg-gradient-to-r from-blue-500 to-yellow-500 text-navy px-6 py-2 sm:px-8 sm:py-3 rounded-md font-bold text-sm sm:text-lg hover:opacity-90 transition shadow-lg"
          >
            Register Now
          </button>
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
              <Link to="/events" className="text-gold hover:text-gold-light text-sm sm:text-base">
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
              <Link to="/events" className="text-gold hover:text-gold-light text-sm sm:text-base">
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
              <Link to="/events" className="text-gold hover:text-gold-light text-sm sm:text-base">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}