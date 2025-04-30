import React from 'react';
import { Link } from 'react-router-dom';

export default function GuidedVisualization() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://www.youtube.com/watch?v=_ZeEPo8w-n8&ab_channel=Dr.JenniferAndrews%28Dr.Jen%29" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content Box */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-30 rounded-3xl p-8 max-w-2xl text-center shadow-lg text-white">
          <Link to="/recommendations" className="text-sm text-blue-200 hover:underline block mb-6 text-left">
            ← Back to Recommendations
          </Link>
          <h1 className="text-4xl font-bold mb-4 drop-shadow">Guided Visualization</h1>
          <p className="text-lg leading-relaxed drop-shadow">
            Close your eyes and imagine yourself in a serene place — a beach, forest, or mountain.
            Hear the waves, feel the breeze, smell the trees. Engage all your senses.
            Let your thoughts slow down and enjoy the calm.
          </p>
        </div>
      </div>
    </div>
  );
}