import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Music, 
  PersonStanding, // Changed from Yoga to PersonStanding
  Quote, 
  Video, 
  HeartHandshake, 
  Sparkles,
  ArrowLeft,
  HandHeart,
  X
} from 'lucide-react';
import recommendationsData from '../data/recommendations.json';
import Navbar from '../components/Navbar';
import HighLightText from '../components/HighLightText';

function Recommendations() {
  const { totalStress } = useSelector((state) => state.stress);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Determine stress level based on score
  const getStressLevel = () => {
    if (totalStress <= 13) return "good";
    if (totalStress <= 26) return "moderate";
    return "critical";
  };

  const level = getStressLevel();
  const recommendations = recommendationsData[level] || []; // Fallback to empty array if no recommendations

  // Map category names to icons
  const categoryIcons = {
    "Meditation": <Brain className="w-10 h-10" />,
    "Music": <Music className="w-10 h-10" />,
    "Yoga": <PersonStanding className="w-10 h-10" />, // Changed from Yoga to PersonStanding
    "Quotes": <Quote className="w-10 h-10" />,
    "Self-help Videos": <Video className="w-10 h-10" />,
    "Professional Help": <HeartHandshake className="w-10 h-10" />,
    "Spirituality": <Sparkles className="w-10 h-10" />,
    "Example" : <HandHeart className="w-10 h-10" />,
  };


  // Get color classes based on stress level
  const getColorClasses = () => {
    switch(level) {
      case "good":
        return {
          primary: "bg-green-100 text-green-800",
          secondary: "text-green-700",
          border: "border-green-200",
          highlight: "bg-green-50 hover:bg-green-100",
          button: "bg-green-600 hover:bg-green-700 text-white"
        };
      case "moderate":
        return {
          primary: "bg-amber-100 text-amber-800",
          secondary: "text-amber-700",
          border: "border-amber-200",
          highlight: "bg-amber-50 hover:bg-amber-100",
          button: "bg-amber-600 hover:bg-amber-700 text-white"
        };
      case "critical":
        return {
          primary: "bg-rose-100 text-rose-800",
          secondary: "text-rose-700",
          border: "border-rose-200",
          highlight: "bg-rose-50 hover:bg-rose-100",
          button: "bg-rose-600 hover:bg-rose-700 text-white"
        };
      default:
        return {
          primary: "bg-blue-100 text-blue-800",
          secondary: "text-blue-700",
          border: "border-blue-200",
          highlight: "bg-blue-50 hover:bg-blue-100",
          button: "bg-blue-600 hover:bg-blue-700 text-white"
        };
    }
  };

  const colors = getColorClasses();

  // Find recommendation details by category
  const getRecommendationByCategory = (category) => {
    return recommendations.find(item => item.category === category) || {}; // Fallback to empty object
  };

  // Close detailed view
  const closeDetailView = () => {
    setSelectedCategory(null);
  };

  // Message based on stress level
  const getLevelMessage = () => {
    switch(level) {
      case "good":
        return "Your stress levels appear to be well managed. Here are some recommendations to maintain your positive mental state.";
      case "moderate":
        return "You're experiencing moderate stress levels. These targeted recommendations can help you reduce and manage your stress.";
      case "critical":
        return "Your responses indicate high stress levels. Please consider the following recommendations, including professional support.";
      default:
        return "Based on your assessment, here are personalized recommendations for your mental wellbeing.";
    }
  };

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-6">
          <Link to="/display-stresslevel" className="mr-4 p-2 rounded-full hover:bg-[#e8c185]">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl font-semibold text-center flex-grow">
            Your <HighLightText text="Personalized" /> Recommendations
          </h1>
        </div>

        <div className={`p-4 rounded-lg mb-8 ${colors.primary}`}>
          <h2 className="text-xl font-semibold">
            {level === "good" ? "Looking Good!" : level === "moderate" ? "Be Mindful" : "Take Action"}
          </h2>
          <p className="mt-2">{getLevelMessage()}</p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${colors.border} border`}
              onClick={() => setSelectedCategory(item.category)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-full mb-4 ${colors.primary}`}>
                  {categoryIcons[item.category]}
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Recommendation View */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold flex items-center">
                  {categoryIcons[selectedCategory]}
                  <span className="ml-3">{getRecommendationByCategory(selectedCategory).title}</span>
                </h2>
                <button 
                  onClick={closeDetailView}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Log the selected category's details */}
       

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  {getRecommendationByCategory(selectedCategory).detailedDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Resources</h3>
                {getRecommendationByCategory(selectedCategory).resources && getRecommendationByCategory(selectedCategory).resources.map((resource, idx) => (
                  <div key={idx} className={`p-4 rounded-lg ${colors.highlight}`}>
                    <h4 className="font-medium text-lg mb-2">{resource.title}</h4>
                    {resource.description && <p className="text-gray-600">{resource.description}</p>}
                    {resource.link && (
                      <Link to={resource.link} className={`inline-block mt-2 px-4 py-2 rounded ${colors.button}`}>
                        Explore
                      </Link>
                    )}
                    {resource.quotes && (
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        {resource.quotes.map((quote, i) => (
                          <li key={i} className="text-gray-700 italic">{quote}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
              <button 
                onClick={closeDetailView}
                className={`w-full py-2 rounded ${colors.button}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendations;