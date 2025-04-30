import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroundingExercise = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // goes back one page in history
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">The 5-4-3-2-1 Grounding Exercise</h1>

      {/* Description */}
      <p className="mb-6 text-gray-700">
        Anxiety is something most of us have experienced at least once in our life...
        {/* (Add the full explanation you wrote here) */}
      </p>

      {/* Video */}
      <div className="mb-8">
        <iframe
          src="https://www.youtube.com/embed/2-WMJpoi8Qo"
          className="w-full aspect-video rounded-xl shadow-md"
          title="5-4-3-2-1 Grounding Exercise"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Steps (Optional: Format them nicely) */}
      <div className="space-y-4 text-gray-800">
        <p><strong>5:</strong> Acknowledge FIVE things you see around you...</p>
        <p><strong>4:</strong> Acknowledge FOUR things you can touch around you...</p>
        <p><strong>3:</strong> Acknowledge THREE things you hear...</p>
        <p><strong>2:</strong> Acknowledge TWO things you can smell...</p>
        <p><strong>1:</strong> Acknowledge ONE thing you can taste...</p>
      </div>
    </div>
  );
};

export default GroundingExercise;