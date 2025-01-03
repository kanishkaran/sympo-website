import { useSearchParams } from 'react-router-dom';

interface EventFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function EventFilter({ activeFilter, onFilterChange }: EventFilterProps) {
  const filters = ['all', 'technical', 'non-technical', 'workshop'];
  const [, setSearchParams] = useSearchParams();

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
    setSearchParams({ filter });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeFilter === filter
              ? 'bg-gold text-navy'
              : 'bg-navy-light text-white hover:bg-navy'
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
