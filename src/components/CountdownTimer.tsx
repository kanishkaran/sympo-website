import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-02-15T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-8"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <motion.div 
            className="w-16 h-16 sm:w-24 sm:h-24 bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-black to-yellow-500 bg-clip-text text-transparent">
              {value.toString().padStart(2, '0')}
            </span>
          </motion.div>
          <p className="text-gray-400 text-xs sm:text-sm capitalize">{unit}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
