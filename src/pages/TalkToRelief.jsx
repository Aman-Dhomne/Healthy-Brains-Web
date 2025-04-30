import React from 'react';
import { Phone } from 'lucide-react';
import Navbar from '../components/Navbar';

const supportPeople = [
  {
    name: 'Dr. Ananya Mehra',
    phone: '+919876543210',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Mr. Rohan Singh',
    phone: '+918765432109',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ms. Kritika Das',
    phone: '+917654321098',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

function TalkToRelief() {
  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#8a642d]">
          Talk to Relief
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          If you're feeling anxious, overwhelmed, or simply need someone to talk to, reach out to one of our supportive listeners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportPeople.map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300">
              <img src={person.photo} alt={person.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{person.name}</h3>
              <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-[#daa75c] hover:underline text-lg">
                <Phone className="w-5 h-5" /> {person.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TalkToRelief;