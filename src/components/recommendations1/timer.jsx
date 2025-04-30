import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Play, Pause, RefreshCw } from 'lucide-react';
import Navbar from '../Navbar';

const MeditationTimer = () => {
  const [phase, setPhase] = useState("Inhale");
  const [countdown, setCountdown] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);

  const timerRef = useRef(null);
  const sessionTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearInterval(sessionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            if (phase === "Inhale") {
              setPhase("Hold");
              return 7;
            } else if (phase === "Hold") {
              setPhase("Exhale");
              return 8;
            } else if (phase === "Exhale") {
              setPhase("Inhale");
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);

      sessionTimerRef.current = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      clearInterval(sessionTimerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
      clearInterval(sessionTimerRef.current);
    };
  }, [isActive, phase]);

  const toggleTimer = () => {
    if (!isActive && sessionTime === 0) {
      setTotalSessions(prev => prev + 1);
    }
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setPhase("Inhale");
    setCountdown(4);
    setSessionTime(0);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getPhaseColors = () => {
    switch(phase) {
      case "Inhale":
        return {
          text: "text-blue-600",
          bg: "bg-blue-100",
          border: "border-blue-300",
          progress: "bg-blue-500"
        };
      case "Hold":
        return {
          text: "text-amber-600",
          bg: "bg-amber-100",
          border: "border-amber-300",
          progress: "bg-amber-500"
        };
      case "Exhale":
        return {
          text: "text-green-600",
          bg: "bg-green-100",
          border: "border-green-300",
          progress: "bg-green-500"
        };
      default:
        return {
          text: "text-blue-600",
          bg: "bg-blue-100",
          border: "border-blue-300",
          progress: "bg-blue-500"
        };
    }
  };

  const colors = getPhaseColors();

  const getProgressPercentage = () => {
    let maxTime;
    switch(phase) {
      case "Inhale": maxTime = 4; break;
      case "Hold": maxTime = 7; break;
      case "Exhale": maxTime = 8; break;
      default: maxTime = 4;
    }
    return 100 - ((countdown / maxTime) * 100);
  };

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <Link to="/recommendations" className="flex items-center text-gray-700 hover:text-amber-700">
            <ArrowLeft className="mr-2" /> Back to Recommendations
          </Link>
          <Link to="/" className="flex items-center text-gray-700 hover:text-amber-700">
            <Home className="mr-2" /> Home
          </Link>
        </div>

        <h1 className="text-4xl font-semibold text-center mb-2">Breathing Meditation</h1>
        <p className="text-center text-gray-600 mb-10">Follow the rhythm to reduce stress and increase focus</p>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className={`p-8 ${colors.bg} transition-colors duration-500`}>
            <div className={`text-center mb-6 ${colors.text} text-5xl font-bold transition-colors duration-500`}>
              {phase}
            </div>

            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div
                className={`absolute top-0 left-0 h-full ${colors.progress} transition-all duration-1000 ease-linear`}
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>

            <div className="text-center text-3xl font-mono font-semibold">
              {countdown}
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-700">
                <div className="text-sm text-gray-500">Session Time</div>
                <div className="text-xl font-mono">{formatTime(sessionTime)}</div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={toggleTimer}
                  className={`p-3 rounded-full ${isActive ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} hover:opacity-80`}
                >
                  {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                <button
                  onClick={resetTimer}
                  disabled={sessionTime === 0}
                  className={`p-3 rounded-full bg-gray-100 text-gray-700 hover:opacity-80 ${sessionTime === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <RefreshCw className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-2">Instructions:</div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
              <li><span className="text-blue-600 font-medium">Inhale</span>: Breathe in slowly through your nose for 4 seconds</li>
              <li><span className="text-amber-600 font-medium">Hold</span>: Hold your breath gently for 7 seconds</li>
              <li><span className="text-green-600 font-medium">Exhale</span>: Release slowly through your mouth for 8 seconds</li>
            </ul>

            <div className="text-gray-600 text-sm">
              This 4-7-8 breathing technique activates your parasympathetic nervous system, helping to reduce stress and anxiety.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            For best results, try to complete at least 4 breath cycles (about 2 minutes).
            Regular practice of 5-10 minutes daily can significantly reduce stress levels.
          </p>

          {totalSessions > 0 && (
            <p className="text-amber-700 font-medium mb-4">
              You've completed {totalSessions} meditation {totalSessions === 1 ? 'session' : 'sessions'} today. Great job!
            </p>
          )}

          <Link
            to="/recommendations"
            className="bg-[#daa75c] text-white px-6 py-3 rounded-md hover:bg-[#845022ad] inline-block"
          >
            Return to Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeditationTimer;