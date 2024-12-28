import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Book, Award, Users, Calendar, MapPin } from 'lucide-react';
import { events } from '../data/events';

export default function Workshop() {
  const workshop = events.find(event => event.type === 'workshop');

  if (!workshop) return null;

  const schedule = [
    { time: '09:00 AM', topic: 'Introduction to Advanced ML Concepts' },
    { time: '10:30 AM', topic: 'Hands-on Session: Model Building' },
    { time: '01:00 PM', topic: 'Lunch Break' },
    { time: '02:00 PM', topic: 'Advanced Topics and Best Practices' },
    { time: '04:00 PM', topic: 'Project Implementation' },
    { time: '05:30 PM', topic: 'Q&A and Wrap-up' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">{workshop.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">{workshop.description}</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-gold" />
              <span>March 16, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gold" />
              <span>AI & DS Department Lab</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-semibold text-navy mb-2">Duration</h3>
            <p className="text-gray-600">Full-day Workshop</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Book className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-semibold text-navy mb-2">Prerequisites</h3>
            <p className="text-gray-600">Basic Python & ML Knowledge</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-semibold text-navy mb-2">Certificate</h3>
            <p className="text-gray-600">Industry-Recognized</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-8 h-8 text-gold mb-4" />
            <h3 className="font-semibold text-navy mb-2">Seats</h3>
            <p className="text-gray-600">Limited to 50 participants</p>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Workshop Schedule</h2>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="text-gold font-semibold">{item.time}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600">{item.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Workshop Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshop.coordinators.map((coordinator, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-navy">{coordinator.name}</h3>
                <p className="text-sm text-gray-600">{coordinator.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center">
          <Link
            to="/register"
            className="inline-block bg-gold text-navy px-8 py-3 rounded-md font-bold text-lg hover:bg-gold-light transition"
          >
            Register for Workshop
          </Link>
        </div>
      </div>
    </div>
  );
}