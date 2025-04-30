import React from 'react';
import Navbar from '../components/Navbar';
import HighLightText from '../components/HighLightText';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-[#fcefbe] text-gray-800">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <HighLightText text="HealthyBrains" />
          </h1>
          <p className="text-lg mb-8">
            At <span className="font-semibold text-[#daa75c]">HealthyBrains</span>, we believe that mental health is just as important as physical health. Our mission is to provide accessible tools that help individuals assess, understand, and improve their mental wellbeing through thoughtful, tech-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-[#daa75c]">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where every individual can proactively manage their mental health with confidence, clarity, and compassion—without fear or stigma.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-[#daa75c]">Our Approach</h3>
            <p className="text-gray-700">
              We combine scientific research with modern technology to provide a stress assessment tool, insightful analysis, and personalized recommendations—all in one place.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-[#daa75c]">Our Team</h3>
            <p className="text-gray-700">
              We are a passionate group of developers, designers, and mental health advocates dedicated to building tools that make a real difference in people's lives.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-[#daa75c]">Get Involved</h3>
            <p className="text-gray-700">
              Have suggestions, ideas, or want to collaborate? Reach out to us—we're always excited to grow and learn from our community.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="text-center mt-10">
        <Link to="/">
        <button className="bg-[#daa75c] hover:bg-[#b88e4d] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
      ⬅️ Back to Home
        </button>
      </Link>
      </div> */}

      <footer className="bg-[#e8c185] py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} HealthyBrains | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;