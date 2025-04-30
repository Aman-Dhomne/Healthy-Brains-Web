import React from 'react';
import { useForm } from 'react-hook-form';
import { apiConnector } from '../services/apiConnector';
import { stressPageEndpoints } from '../services/apis';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../Slices/StressLevelSlice';
import Navbar from '../components/Navbar';

const { VISITOR_DATA } = stressPageEndpoints;

function VisitorInfo() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(setUserInfo(data)); // Fixed: properly dispatch the action
    navigate("/survey-form");
  };

  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-semibold mb-10 text-center">Let's Get to Know You</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <label htmlFor="age" className="block font-medium text-gray-700 mb-2">Age</label>
            <select
              id="age"
              name="age"
              {...register("age", { required: "Please select your age" })}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#daa75c] focus:border-transparent"
            >
              <option value="">Select Age</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-55">46-55</option>
              <option value="56+">56+</option>
            </select>
            {errors.age && <span className="text-red-500 text-sm mt-1">{errors.age.message}</span>}
          </div>
          <div className="mb-8">
            <label htmlFor="profession" className="block font-medium text-gray-700 mb-2">Profession</label>
            <select
              id="profession"
              name="profession"
              {...register("profession", { required: "Please select your profession" })}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#daa75c] focus:border-transparent"
            >
              <option value="">Select Profession</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Teacher">Teacher</option>
              <option value="Other">Other</option>
            </select>
            {errors.profession && <span className="text-red-500 text-sm mt-1">{errors.profession.message}</span>}
          </div>
          <div className="mb-8">
            <label htmlFor="gender" className="block font-medium text-gray-700 mb-2">Gender</label>
            <select
              id="gender"
              name="gender"
              {...register("gender", { required: "Please select your gender" })}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#daa75c] focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="text-red-500 text-sm mt-1">{errors.gender.message}</span>}
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#dfb371] text-white px-8 py-3 rounded-md hover:bg-[#77592c] transition-colors duration-300 text-lg">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VisitorInfo;
