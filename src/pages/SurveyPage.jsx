import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStressLevel, setSurveyResponses } from '../Slices/StressLevelSlice';
import { Convertvaluetoint, reverseNum } from '../utils/convertToint';
import Questions from '../components/Questions';
import Navbar from '../components/Navbar';

function SurveyData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: ''
    });

    const [errors, setErrors] = useState({});

    const calculateTotalStress = (data) => {
        let total = 0;
        
        // Questions that are directly scored
        const directQuestions = [1, 2, 3, 6, 9, 10];
        
        // Questions that are reversely scored
        const reverseQuestions = [4, 5, 7, 8];
        
        // Calculate for direct scoring questions
        directQuestions.forEach(qNum => {
            const value = data[`question${qNum}`];
            if (value) {
                total += Convertvaluetoint(value);
            }
        });
        
        // Calculate for reverse scoring questions
        reverseQuestions.forEach(qNum => {
            const value = data[`question${qNum}`];
            if (value) {
                // First convert to int, then apply reverse scoring
                const originalScore = Convertvaluetoint(value);
                total += reverseNum(originalScore);
            }
        });
        
        return total;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user makes a selection
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};
        
        // Check if all questions have been answered
        for (let i = 1; i <= 10; i++) {
            const field = `question${i}`;
            if (!formData[field]) {
                newErrors[field] = 'Please select an answer';
                valid = false;
            }
        }
        
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Calculate total stress score
            const totalScore = calculateTotalStress(formData);
            
            // Save responses and score to Redux store
            dispatch(setSurveyResponses(formData));
            dispatch(setStressLevel(totalScore));
            
            // Navigate to results page
            navigate('/display-stresslevel');
        } else {
            // Scroll to the first error
            const firstErrorField = Object.keys(errors)[0];
            if (firstErrorField) {
                document.getElementById(firstErrorField)?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#fcefbe]">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-semibold mb-6 text-center">Let's Assess Your Stress Level</h1>
                <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
                    Answer the following questions based on your experiences over the past month. 
                    Your responses will help us provide personalized recommendations.
                </p>
                
                <div className='mx-auto max-w-3xl bg-white border border-gray-200 rounded-2xl px-6 py-8 shadow-md'>
                    <div className='mb-6 flex items-center'>
                        <span className='text-pink-600 text-xl'>*</span>
                        <p className="text-gray-600">required fields</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        {[...Array(10)].map((_, index) => (
                            <Questions
                                key={index + 1}
                                questionNumber={index + 1}
                                value={formData[`question${index + 1}`]}
                                onChange={handleChange}
                                error={errors[`question${index + 1}`]}
                            />
                        ))}
                        
                        <div className="text-center mt-8">
                            <button 
                                type="submit" 
                                className="bg-[#dda757] text-white px-8 py-3 rounded-md hover:bg-[#76582be8] transition-colors duration-300 text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SurveyData;
