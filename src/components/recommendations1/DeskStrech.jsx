import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for stress level

const DeskStretch = () => {
  const { totalStress } = useSelector((state) => state.stress); // Get stress level from Redux
  const [currentStretchIndex, setCurrentStretchIndex] = useState(0);

  // Define stretches based on stress level
  const getStretches = () => {
    // Stress level 0-10: Gentle stretches
    if (totalStress <= 10) {
      return [
        {
          name: "Triceps Stretch",
          description: [
            "Raise your arm and bend it so your hand reaches toward the opposite side.",
            "Use your other hand to pull the elbow gently toward your head.",
            "Hold for 10 to 30 seconds. Repeat on the other side."
          ],
          image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Triceps_Stretch.gif?w=1155&h=840"
        },
        {
          name: "Overhead Reach (Lat Stretch)",
          description: [
            "Extend each arm overhead.",
            "Reach to the opposite side and hold.",
            "Hold for 10 to 30 seconds. Repeat on the other side."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Overhead_Reach.gif"
        },
        {
          name: "Upper Body and Arm Stretch",
          description: [
            "Clasp hands together above the head with palms facing outward.",
            "Push your arms up, stretching upward.",
            "Hold the pose for 10 to 30 seconds."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Upper_Body_Stretch.gif"
        }
      ];
    }
    // Stress level 10-20: Mild stretches
    else if (totalStress <= 20) {
      return [
        {
          name: "Shoulder (Pectoralis) Stretch",
          description: [
            "Clasp hands behind your back.",
            "Push the chest outward, and raise the chin.",
            "Hold for 10 to 30 seconds."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Shoulder_Pec_Stretch.gif"
        },
        {
          name: "Forward Stretch (Upper Back)",
          description: [
            "Clasp your hands in front of you and lower your head in line with your arms.",
            "Press forward and hold.",
            "Hold for 10 to 30 seconds."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Forward_Stretch.gif"
        }
      ];
    }
    // Stress level 20-30: Moderate stretches
    else if (totalStress <= 30) {
      return [
        {
          name: "Torso Stretch (Trunk Rotation)",
          description: [
            "Keep your feet on the ground facing forward.",
            "Twist your upper body toward the arm resting on the back of your chair.",
            "Hold for 10 to 30 seconds. Repeat on other side."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Torso_Stretch.gif"
        }
      ];
    }
    // Stress level 30-40: Deep stretches
    else {
      return [
        {
          name: "Full Body Stretch",
          description: [
            "Stretch your entire body, reaching arms overhead and legs long.",
            "Hold for 20-30 seconds while taking deep breaths."
          ],
          image: "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_Stretches_to_Do_at_Work_Every_Day_Full_Body_Stretch.gif"
        }
      ];
    }
  };

  const stretches = getStretches();

  const nextStretch = () => {
    setCurrentStretchIndex((prev) => (prev === stretches.length - 1 ? 0 : prev + 1));
  };

  const prevStretch = () => {
    setCurrentStretchIndex((prev) => (prev === 0 ? stretches.length - 1 : prev - 1));
  };

  const currentStretch = stretches[currentStretchIndex];

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <Link to="/recommendations" className="flex items-center text-gray-700 hover:text-amber-700">
            Back to Recommendations
          </Link>
          <Link to="/" className="flex items-center text-gray-700 hover:text-amber-700">
            Home
          </Link>
        </div>

        <h1 className="text-4xl font-semibold text-center mb-2">Desk Stretches for Wellbeing</h1>
        <p className="text-center text-gray-600 mb-10">Personalized stretches based on your stress assessment</p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={currentStretch.image}
                alt={currentStretch.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{currentStretch.name}</h2>
              </div>

              <p className="text-gray-600 mb-4">{currentStretch.description.join(" ")}</p>

              <div className="flex justify-between">
                <button
                  onClick={prevStretch}
                  className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded hover:bg-amber-200"
                >
                  Previous
                </button>
                <span className="self-center text-gray-500">
                  {currentStretchIndex + 1} of {stretches.length}
                </span>
                <button
                  onClick={nextStretch}
                  className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded hover:bg-amber-200"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Remember to listen to your body and modify any stretch as needed.
          </p>
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

export default DeskStretch;