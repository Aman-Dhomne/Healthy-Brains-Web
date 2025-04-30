// src/pages/EmergencyCalm.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Play, Pause, RefreshCw } from 'lucide-react';
import Navbar from '../Navbar';

const EmergencyCalm = () => {
  const groundingSteps = [
    "First, let your lips part. Make a whooshing sound, exhaling completely through your mouth.",
    "Next, close your lips, inhaling silently through your nose as you count to 4 seconds in your head.",
    "Then, for 7 seconds, hold your breath.",
    "Make another whooshing exhale from your mouth for 8 seconds."
  ];

  const otherTechniques = [
    'wearing a sleeping mask',
    "listening to a white noise machine",
    "wearing earplugs",
    "playing relaxation music",
    "diffusing essential oils like lavender",
    "reducing caffeine intake",
    "doing bedtime yoga"
  ];

  const [phase, setPhase] = useState('Inhale');
  const [countdown, setCountdown] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (phase === 'Inhale') {
            setPhase('Hold');
            return 4;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            return 6;
          } else {
            setPhase('Inhale');
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isActive, phase]);

  const toggleTimer = () => setIsActive(prev => !prev);

  const resetTimer = () => {
    setIsActive(false);
    setPhase('Inhale');
    setCountdown(4);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'Inhale': return 'text-blue-600';
      case 'Hold': return 'text-amber-600';
      case 'Exhale': return 'text-green-600';
      default: return 'text-gray-700';
    }
  };

  const sectionBox = 'bg-white rounded-2xl shadow-md p-6 w-full mb-10';
  const heading = 'text-2xl font-bold text-center mb-4';
  const paragraph = 'text-gray-600 text-center mb-4';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcefbe] to-[#fae7a0] text-gray-800">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <Link to="/recommendations" className="text-gray-700 hover:text-amber-600 flex items-center">
            <ArrowLeft className="mr-2" /> Back
          </Link>
          <Link to="/" className="text-gray-700 hover:text-amber-600 flex items-center">
            <Home className="mr-2" /> Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">Emergency Calm</h1>
        <p className={paragraph}>Use this quick breathing tool to calm down instantly.</p>

        {/* Side-by-side layout for Breathing and Grounding */}
        <div className="md:flex md:space-x-6 mb-10">
          {/* Breathing Section */}
          <div className={`${sectionBox} md:w-1/2`}>
            <h2 className="text-xl font-semibold text-center mb-4">Breathing Exercise</h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className={`text-4xl font-bold ${getPhaseColor()}`}>{phase}</div>
              <div className="text-6xl font-mono text-gray-800">{countdown}</div>
              <div className="flex gap-4">
                <button
                  onClick={toggleTimer}
                  className={`p-3 rounded-full ${
                    isActive ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  } hover:opacity-80`}
                >
                  {isActive ? <Pause /> : <Play />}
                </button>
                <button
                  onClick={resetTimer}
                  className="p-3 rounded-full bg-gray-100 text-gray-700 hover:opacity-80"
                >
                  <RefreshCw />
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center max-w-sm">
                Breathe in for 4 seconds, hold for 4 seconds, and exhale for 6 seconds.
                This cycle helps calm your nervous system and regain control.
              </p>
            </div>
          </div>

          {/* Grounding Section */}
          <div className={`${sectionBox} md:w-1/2`}>
            <h2 className={heading}>How to do the 4-7-8 breathing technique</h2>
            <p className={paragraph}>
              To practice 4-7-8 breathing, find a comfortable place to sit or lie down. Be sure to practice good posture, especially when starting out. Lying down is best if you’re using the technique to fall asleep.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {groundingSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Quick Mindfulness */}
        <div className={sectionBox}>
          <h2 className={heading}>Other techniques to help you sleep</h2>
          <p className={paragraph}>
            If you’re experiencing mild sleeplessness due to anxiety or stress, 4-7-8 breathing could help you get the rest you’ve been missing.

            If the technique isn’t helpful enough on its own, you can try to combine it with other interventions, such as:
          </p>
          <p className="text-gray-600 text-center">
            The 4-7-8 breathing technique is suggested to be beneficial in providing a sense of relaxation. If you find it difficult to sleep or rest, consider practicing this technique for at least four breath cycles.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700 mt-4">
            {otherTechniques.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCalm;