import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home";
import PersonList from "./components/counsellor";
import VisitorInfo from "./pages/VisitorInfo";
import SurveyData from "./pages/SurveyPage";
import DisplayScore from "./components/displayScore";
import MeditationTimer from "./components/recommendations1/timer";
import YogaForWellbeing from "./components/recommendations1/yoga";
import Recommendations from "./pages/Recommendations";
import StressReliefPlaylist from './components/recommendations1/StressReliefPlaylist';
import NatureSoundscapes from './components/recommendations1/NatureSoundscapes';
import HealthSupport from './components/recommendations1/HealthSupport';
import DeskStrech from './components/recommendations1/DeskStrech.jsx';
import GuidedVisualization from "./components/recommendations1/GuidedVisualization.jsx";
import GroundingExercise from "./components/recommendations1/Grounding.jsx";
import TimeManagement from "./components/recommendations1/Time.jsx";
import Blog from './pages/Blog';
import About from './pages/AboutUS';
import TalkToRelief from './pages/TalkToRelief';
import Classical from './components/recommendations1/Classical.jsx';
import Calm from './components/recommendations1/Calm.jsx';
import EmergencyCalm from "./components/recommendations1/EmergencyCalm.jsx";

function App() {
  return (
    <div className="App bg-[#fcefbe]">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path='/counsellor' element={<PersonList />} />
        <Route path='/survey-form' element={<SurveyData />} />
        <Route path="/visitor-info" element={<VisitorInfo />} />
        <Route path="/display-stresslevel" element={<DisplayScore />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/timer" element={<MeditationTimer />} />
        <Route path="/yoga" element={<YogaForWellbeing />} />
        <Route path="/StressReliefPlaylist" element={<StressReliefPlaylist />} />
        <Route path="/nature" element={<NatureSoundscapes />} />
        <Route path="/support" element={<HealthSupport />} />
        <Route path="/desk" element={<DeskStrech />} />
        <Route path="/guided" element={<GuidedVisualization />} />
        <Route path="/grounding" element={<GroundingExercise />} />
        <Route path="/time" element={<TimeManagement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/talk-to-relief" element={<TalkToRelief />} />
        <Route path="/classical" element={<Classical />} />
        <Route path="/calm" element={<Calm />} />
        <Route path="/EmergencyCalm" element={<EmergencyCalm />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
