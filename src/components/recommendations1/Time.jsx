import React from 'react';
import { useNavigate } from 'react-router-dom';

const TimeManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Efficient Time Management for Stress Reduction
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-700">
        Stress is a natural response to the demands of daily life, but when it becomes
        overwhelming, it can harm our mental and physical health. One of the most effective ways to reduce daily stress is by managing time wisely. When we control our schedules, we regain control over our day, which helps us feel more grounded and focused.
      </p>

      {/* Importance */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">🧠 Why Time Management Matters</h2>
      <p className="mb-4 text-gray-700">
        Poor time management often leads to missed deadlines, forgotten tasks, burnout, and anxiety. Effective time management can:
        <ul className="list-disc list-inside mt-2">
          <li>Reduce stress and overwhelm</li>
          <li>Increase productivity and satisfaction</li>
          <li>Help maintain work-life balance</li>
          <li>Improve your mental clarity and focus</li>
        </ul>
      </p>

      {/* How-To Section */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">🛠️ Practical Time Management Techniques</h2>
      <ul className="list-decimal list-inside text-gray-700 space-y-2">
        <li>
          <strong>Prioritize Tasks:</strong> Use the Eisenhower Matrix or "urgent vs important" grid to focus on what really matters.
        </li>
        <li>
          <strong>Time Blocking:</strong> Set specific time slots for tasks instead of working from a vague to-do list.
        </li>
        <li>
          <strong>Use the Pomodoro Technique:</strong> Work in focused 25-minute intervals followed by 5-minute breaks to prevent fatigue.
        </li>
        <li>
          <strong>Set SMART Goals:</strong> Make sure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound.
        </li>
        <li>
          <strong>Learn to Say “No”:</strong> Overcommitting causes stress. Protect your time and energy.
        </li>
        <li>
          <strong>Declutter Your Schedule:</strong> Remove or reschedule non-essential tasks to free up mental space.
        </li>
      </ul>

      {/* Final Note */}
      <h2 className="text-2xl font-semibold mt-6 mb-2">🌿 Final Thoughts</h2>
      <p className="text-gray-700 mb-4">
        Time is one of our most valuable resources. Managing it wisely not only boosts our productivity but also plays a major role in protecting our mental health. If you're feeling overwhelmed, pause, plan your day with intention, and take it one step at a time.
      </p>

      <p className="text-gray-700 italic">
        “Don’t let the day run you — you run the day.”
      </p>
    </div>
  );
};

export default TimeManagement;