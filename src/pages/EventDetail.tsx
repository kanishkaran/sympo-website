import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import { Clock } from 'lucide-react';

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  // Refs for DOM elements
  const eventWrapperRef = useRef<HTMLDivElement>(null);
  const eventTitleRef = useRef<HTMLHeadingElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animations with GSAP
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Animate the event wrapper
    if (eventWrapperRef.current) {
      gsap.fromTo(
        eventWrapperRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
      );
    }

    // Animate the event title
    if (eventTitleRef.current) {
      gsap.fromTo(
        eventTitleRef.current,
        {
          opacity: 0,
          x: -100,
          rotation: -10,
          transformOrigin: 'left center'
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: eventTitleRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            markers: false
          }
        }
      );
    }

    // Animate slots
    slotRefs.current.forEach((slot, index) => {
      if (slot) {
        gsap.fromTo(
          slot,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: index * 0.2, ease: 'power4.out' }
        );
      }
    });
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Event Not Found</h1>
          <Link to="/events" className="text-gold hover:text-gold-light">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16" ref={eventWrapperRef}>
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/events" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Events
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-navy mb-4" ref={eventTitleRef}>
            {event.title}
          </h1>
          <span className="inline-block bg-navy-light text-gold px-3 py-1 rounded-full text-sm mb-6">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">About</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {event.slots && event.slots.length > 0 ? (
              event.slots.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                  ref={(el) => (slotRefs.current[index] = el)}
                >
                  <Clock
                    className={`w-6 h-6 ${
                      index === 0 ? 'text-green-500' : 'text-yellow-400'
                    }`}
                  />
                  <div>
                    <h3 className="font-bold">Slot {index + 1}</h3>
                    <p className="text-gray-600">{slot}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-300">No slots available</div>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Rules</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-navy">{coordinator.name}</h3>
                  <p className="text-sm text-gray-600">{coordinator.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Join Button */}
            <div className="mt-8">
              <button
                onClick={() => window.open('https://forms.gle/your-google-form-link', '_blank')}
                className="w-full py-3 px-6 rounded-lg text-lg font-semibold text-white 
                          bg-gradient-to-r from-blue-500 to-blue-700 
                          hover:from-blue-600 hover:to-blue-800 
                          transition duration-300"
              >
                Join Event
              </button>
            </div>

        </div>
      </div>
    </div>
  );
}
