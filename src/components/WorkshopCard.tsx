import { Calendar, Clock, Users } from 'lucide-react';

interface WorkshopCardProps {
  title: string;
  date: string;
  time: string;
  capacity: string;
  description: string;
  imageUrl: string;
  speaker: {
    name: string;
    organization: string;
  };
}

export default function WorkshopCard({
  title,
  date,
  time,
  capacity,
  description,
  imageUrl,
  speaker,
}: WorkshopCardProps) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden border border-gold">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-navy-gradient">
          {title}
        </h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-white/90">
            <Calendar className="w-5 h-5 mr-2 text-gold" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-white/90">
            <Clock className="w-5 h-5 mr-2 text-gold" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-white/90">
            <Users className="w-5 h-5 mr-2 text-gold" />
            <span>{capacity}</span>
          </div>
        </div>
        <p className="text-white/90 mb-4">{description}</p>
        <div className="text-white/90">
          <p className="font-bold">Speaker:</p>
          <p>{speaker.name}</p>
          <p className="italic text-gold">{speaker.organization}</p>
        </div>
      </div>
    </div>
  );
}
