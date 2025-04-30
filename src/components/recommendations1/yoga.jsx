import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react'; // Removed PersonStanding
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const YogaForWellbeing = () => {
  const { totalStress } = useSelector((state) => state.stress);
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);

  // Define yoga poses based on stress level
  const getYogaPoses = () => {
    // Low stress: Basic poses
    if (totalStress <= 13) {
      return [
        {
          name: "Mountain Pose (Tadasana)",
          duration: "1-2 minutes",
          description: "A foundational standing pose that improves posture and balance.",
          instructions: [
            "Stand with feet hip-width apart, arms at sides",
            "Distribute weight evenly across both feet",
            "Engage leg muscles slightly",
            "Lengthen spine and draw shoulders down and back",
            "Breathe deeply for 1-2 minutes"
          ],
          benefits: "Improves posture, strengthens thighs, ankles, and core",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/YJ_Mountain-Pose_Andrew-Clark_2400x1350.png?width=1400"
        },
        {
          name: "Upward Salute (Urdhva Hastasana)",
          duration: "30-60 seconds",
          description: "An upward reaching pose that opens the chest and stretches the entire body.",
          instructions: [
            "Begin in Mountain Pose",
            "Inhale and sweep arms out to sides and up overhead",
            "Palms can face each other or touch",
            "Reach up through fingertips while keeping shoulders relaxed",
            "Hold for 3-5 breaths"
          ],
          benefits: "Stretches sides of body, improves breathing capacity",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2008/02/Upward-Salute_Andrew-Clark.jpg?crop=535:301&width=1070&enable=upscale"
        },
        {
          name: "Standing Forward Bend (Uttanasana)",
          duration: "1 minute",
          description: "A forward fold that stretches the back body and calms the mind.",
          instructions: [
            "From Mountain Pose, exhale and hinge at hips",
            "Fold forward with a straight back",
            "Allow hands to rest on floor or shins",
            "Relax neck and let head hang heavy",
            "Hold for 4-8 breaths"
          ],
          benefits: "Stretches hamstrings and spine, reduces stress",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2022/05/forward-bend-andrew-clark.jpg?crop=535:301&width=1070&enable=upscale"
        }
      ];
    }
    // Moderate stress: More active poses
    else if (totalStress <= 26) {
      return [
        {
          name: "Child's Pose (Balasana)",
          duration: "1-3 minutes",
          description: "A restful pose that gently stretches the back and promotes relaxation.",
          instructions: [
            "Kneel on the floor with big toes touching",
            "Sit back on heels and spread knees wide",
            "Fold forward, extending arms in front or alongside body",
            "Rest forehead on mat",
            "Breathe deeply for 1-3 minutes"
          ],
          benefits: "Releases tension in back, shoulders, and chest; calms the nervous system",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/Childs-Pose_Andrew-Clark_1.jpg?width=1400"
        },
        {
          name: "Cat-Cow Stretch (Marjaryasana-Bitilasana)",
          duration: "1-2 minutes (5-10 rounds)",
          description: "A gentle flow between two poses that warms the spine and releases tension.",
          instructions: [
            "Start on hands and knees in tabletop position",
            "For Cow: Inhale, drop belly, lift chest and gaze",
            "For Cat: Exhale, round spine, tuck chin to chest",
            "Continue flowing between poses with breath",
            "Complete 5-10 rounds"
          ],
          benefits: "Improves spine flexibility, relieves stress and tension",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2022/01/Cow-Pose_Andrew-Clark_2400x1350-e1710374292371.jpg?width=1400"
        },
        {
          name: "Legs Up The Wall (Viparita Karani)",
          duration: "5-15 minutes",
          description: "A restorative inversion that calms the nervous system and reduces stress.",
          instructions: [
            "Sit with one hip touching a wall",
            "Swing legs up as you lay back",
            "Position buttocks close to or touching wall",
            "Rest arms at sides, palms up",
            "Close eyes and breathe deeply for 5-15 minutes"
          ],
          benefits: "Reduces anxiety, relieves tired legs, improves circulation",
          imageUrl: "https://www.yogajournal.com/wp-content/uploads/2021/12/Legs-Up-the-Wall_Andrew-Clark.jpg"
        },
        {
          name: "Corpse Pose (Savasana)",
          duration: "5-10 minutes",
          description: "A final relaxation pose that promotes deep rest and integration.",
          instructions: [
            "Lie on back with legs extended",
            "Allow feet to fall open naturally",
            "Place arms at sides, palms facing up",
            "Close eyes and relax entire body",
            "Breathe naturally for 5-10 minutes"
          ],
          benefits: "Reduces blood pressure, anxiety, and fatigue; promotes deep relaxation",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2013/11/savasana-on-a-pier-getty.jpg?width=1400"
        }
      ];
    }
    // High stress: Restorative poses
    else {
      return [
        {
          name: "Supported Child's Pose",
          duration: "3-5 minutes",
          description: "A deeply restorative variation of Child's Pose using props for comfort.",
          instructions: [
            "Place a bolster or folded blankets lengthwise in front of you",
            "Kneel and spread knees wide around the bolster",
            "Fold forward to rest torso and head on bolster",
            "Turn head to one side, changing halfway through",
            "Breathe deeply for 3-5 minutes"
          ],
          benefits: "Deeply calms nervous system, releases back tension, promotes surrender",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/Childs-Pose-Mod-1_Andrew-Clark_1.jpg?crop=535:301&width=1070&enable=upscale"
        },
        {
          name: "Reclining Bound Angle (Supta Baddha Konasana)",
          duration: "5-10 minutes",
          description: "A supported heart-opening pose that relieves stress and anxiety.",
          instructions: [
            "Sit with bolster/folded blankets behind you",
            "Bring soles of feet together, knees wide",
            "Slowly recline onto bolster/blankets",
            "Support outer thighs with blocks or blankets if needed",
            "Rest arms at sides with palms up",
            "Breathe deeply for 5-10 minutes"
          ],
          benefits: "Opens chest for deeper breathing, relieves anxiety and fatigue",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/03/Reclining-Bound-Angle_Andrew-Clark-1.jpg?width=1400"
        },
        {
          name: "Supported Bridge Pose",
          duration: "3-5 minutes",
          description: "A gentle backbend supported by props that opens the chest and calms the mind.",
          instructions: [
            "Lie on back with knees bent, feet on floor",
            "Lift hips and place a block or bolster under sacrum",
            "Rest hips on prop, keeping weight off lower back",
            "Allow arms to rest at sides, palms up",
            "Close eyes and breathe deeply for 3-5 minutes"
          ],
          benefits: "Opens chest, reduces anxiety, improves circulation",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/11/YJ_Bridge-Pose_Andrew-Clark_2400x1350.png?width=1400"
        },
        {
          name: "Extended Relaxation (Savasana)",
          duration: "10-15 minutes",
          description: "An extended final relaxation with added support for deeper rest.",
          instructions: [
            "Place a folded blanket under head and neck",
            "Optional eye pillow or cover over eyes",
            "Cover body with light blanket",
            "Place bolster under knees to release lower back",
            "Allow complete surrender for 10-15 minutes",
            "Incorporate deep breathing: 4 count inhale, 6 count exhale"
          ],
          benefits: "Deeply restores nervous system, reduces cortisol levels, promotes healing",
          imageUrl: "https://cdn.yogajournal.com/wp-content/uploads/2021/10/Savasana-Pose_Andrew-Clark_2400x1350.jpeg?width=1400"
        }
      ];
    }
  };

  const poses = getYogaPoses();
  
  const nextPose = () => {
    setCurrentPoseIndex((prev) => (prev === poses.length - 1 ? 0 : prev + 1));
  };
  
  const prevPose = () => {
    setCurrentPoseIndex((prev) => (prev === 0 ? poses.length - 1 : prev - 1));
  };

  const currentPose = poses[currentPoseIndex];

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
        
        <h1 className="text-4xl font-semibold text-center mb-2">Yoga for Mental Wellbeing</h1>
        <p className="text-center text-gray-600 mb-10">Personalized yoga sequence based on your stress assessment</p>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={currentPose.imageUrl} 
                alt={currentPose.name} 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{currentPose.name}</h2>
                <span className="text-amber-700 font-medium">{currentPose.duration}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{currentPose.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Instructions:</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {currentPose.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                  ))}
                </ol>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
                <p className="text-gray-700">{currentPose.benefits}</p>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={prevPose}
                  className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded hover:bg-amber-200"
                >
                  <ArrowLeft className="mr-2" /> Previous
                </button>
                <span className="self-center text-gray-500">
                  {currentPoseIndex + 1} of {poses.length}
                </span>
                <button 
                  onClick={nextPose}
                  className="flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded hover:bg-amber-200"
                >
                  Next <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Remember to listen to your body and modify any pose as needed. 
            Never force yourself into positions that cause pain.
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

export default YogaForWellbeing;
