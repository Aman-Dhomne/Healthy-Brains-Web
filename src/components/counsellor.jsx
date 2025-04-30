import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, Search, Phone, Mail, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

const counsellorData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    specialty: "Anxiety & Stress Management",
    experience: "15 years",
    education: "Ph.D. in Clinical Psychology, Stanford University",
    description: "Specializes in cognitive-behavioral therapy approaches for anxiety and stress-related disorders. Dr. Johnson's approach combines evidence-based techniques with mindfulness practices.",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@healthyminds.com",
      website: "https://www.drsarahjohnson.com"
    },
    availability: "Mon, Wed, Fri",
    insurance: "Accepts most major insurance plans",
    tags: ["anxiety", "stress", "cbt", "trauma"]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    specialty: "Depression & Mood Disorders",
    experience: "12 years",
    education: "Psy.D. in Clinical Psychology, Columbia University",
    description: "Dr. Chen helps clients navigate depression and mood disorders using an integrative approach that combines cognitive-behavioral therapy, mindfulness, and psychodynamic techniques.",
    contact: {
      phone: "+1 (555) 987-6543",
      email: "michael.chen@healthyminds.com",
      website: "https://www.drmichaelchen.com"
    },
    availability: "Tue, Thu, Sat",
    insurance: "In-network with Blue Cross, Aetna, United",
    tags: ["depression", "mood disorders", "mindfulness", "teens"]
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    specialty: "Work-Life Balance & Burnout",
    experience: "8 years",
    education: "Ph.D. in Counseling Psychology, University of Michigan",
    description: "Specializes in helping professionals navigate work-life challenges, prevent burnout, and develop sustainable self-care practices. Dr. Patel combines practical strategies with deeper psychological exploration.",
    contact: {
      phone: "+1 (555) 789-0123",
      email: "amara.patel@healthyminds.com",
      website: "https://www.dramarapatel.com"
    },
    availability: "Mon, Tue, Thu",
    insurance: "Out-of-network provider, offers superbills",
    tags: ["burnout", "work stress", "self-care", "adults"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    specialty: "Trauma & PTSD",
    experience: "20 years",
    education: "Ph.D. in Clinical Psychology, University of California",
    description: "Dr. Wilson specializes in trauma recovery using EMDR, somatic experiencing, and other evidence-based approaches. He has extensive experience working with both acute and complex trauma.",
    contact: {
      phone: "+1 (555) 456-7890",
      email: "james.wilson@healthyminds.com",
      website: "https://www.drjameswilson.com"
    },
    availability: "Wed, Thu, Fri",
    insurance: "In-network with most major providers",
    tags: ["trauma", "ptsd", "emdr", "veterans"]
  },
  {
    id: 5,
    name: "Dr. Elena Rodriguez",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    specialty: "Life Transitions & Identity",
    experience: "10 years",
    education: "Ph.D. in Counseling Psychology, New York University",
    description: "Helps clients navigate major life changes, identity exploration, and personal growth. Dr. Rodriguez uses a multicultural, strengths-based approach that honors each client's unique background and experiences.",
    contact: {
      phone: "+1 (555) 234-5678",
      email: "elena.rodriguez@healthyminds.com",
      website: "https://www.drelena.com"
    },
    availability: "Mon, Wed, Fri",
    insurance: "Sliding scale available, limited insurance",
    tags: ["life transitions", "identity", "multicultural", "adults"]
  }
];

const PersonList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique specialties and availability options
  const specialties = [...new Set(counsellorData.map(person => person.specialty))];
  const availabilityOptions = [...new Set(counsellorData.flatMap(person => 
    person.availability.split(', ')))];

  // Filter counsellors based on search and filter selections
  const filteredCounsellors = counsellorData.filter(counsellor => {
    const matchesSearch = counsellor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         counsellor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         counsellor.tags.some(tag => tag.includes(searchTerm.toLowerCase()));
                         
    const matchesSpecialty = selectedSpecialty === '' || counsellor.specialty === selectedSpecialty;
    
    const matchesAvailability = selectedAvailability === '' || 
                               counsellor.availability.includes(selectedAvailability);
    
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <Link to="/recommendations" className="flex items-center text-gray-700 hover:text-amber-700">
            <ArrowLeft className="mr-2" /> Back to Recommendations
          </Link>
        </div>
        
        <h1 className="text-4xl font-semibold text-center mb-2">Mental Health Professionals</h1>
        <p className="text-center text-gray-600 mb-10">Find the right specialist for your needs</p>
        
        {/* Search and Filter UI */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, specialty, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center md:justify-start px-4 py-3 bg-white rounded-lg border border-gray-300 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2" />
              <span>Filters</span>
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((specialty, index) => (
                    <option key={index} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="">Any Day</option>
                  {availabilityOptions.map((day, index) => (
                    <option key={index} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Counsellor List */}
        <div className="space-y-6">
          {filteredCounsellors.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-lg shadow">
              <h3 className="text-xl font-medium text-gray-700">No results found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredCounsellors.map(counsellor => (
              <div key={counsellor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <img 
                      src={counsellor.image} 
                      alt={counsellor.name} 
                      className="h-48 w-full md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{counsellor.name}</h2>
                        <p className="text-amber-700 font-medium">{counsellor.specialty}</p>
                        <p className="text-sm text-gray-600 mt-1">{counsellor.experience} experience</p>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                        {counsellor.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700">{counsellor.description}</p>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{counsellor.contact.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-500" />
                            <span>{counsellor.contact.email}</span>
                          </div>
                          <div className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
                            <a href={counsellor.contact.website} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Details</h3>
                        <div className="mt-2 space-y-2">
                          <p className="text-sm"><span className="font-medium">Availability:</span> {counsellor.availability}</p>
                          <p className="text-sm"><span className="font-medium">Insurance:</span> {counsellor.insurance}</p>
                          <p className="text-sm"><span className="font-medium">Education:</span> {counsellor.education}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonList;
