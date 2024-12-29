import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { events } from '../data/events';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const filteredEvents = events.filter(
    event => activeFilter === 'all' || event.type === activeFilter
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy text-center mb-8">Events</h1>
        <EventFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
