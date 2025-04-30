import React from 'react';
import Navbar from '../components/Navbar';
import HighLightText from '../components/HighLightText';

function Blog() {
  const blogPosts = [
    {
      title: '5 Simple Ways to Manage Daily Stress',
      summary: 'Discover easy and effective techniques to reduce your stress levels and boost your overall wellbeing.',
      date: 'April 22, 2025',
    },
    {
      title: 'Meditation vs Mindfulness: What’s the Difference?',
      summary: 'Understand the distinction between two popular mental wellness practices and how to apply them in your life.',
      date: 'April 17, 2025',
    },
    {
      title: 'The Science Behind Mental Health',
      summary: 'Explore how your brain responds to stress and what you can do to improve your cognitive health.',
      date: 'April 10, 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          <HighLightText text="Wellness" /> Reads
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-[#845022]">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <button className="text-[#daa75c] hover:text-[#845022] font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-[#e8c185] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} Healthy Brains | Mental Wellbeing Blog
          </p>
          <p className="text-sm text-gray-600 mt-2">
            For informational purposes only. Always seek professional advice if needed.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Blog;