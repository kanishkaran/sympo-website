import { Link } from 'react-router-dom';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-card-gradient rounded-lg shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-navy-gradient mb-2">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-gradient-to-r from-navy to-navy-light text-gold px-3 py-1 rounded-full text-sm">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
          <Link
            to={`/events/${event.id}`}
            className="text-transparent bg-clip-text bg-gold-gradient font-semibold hover:opacity-80"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}