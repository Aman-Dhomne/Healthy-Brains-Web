import React from "react";
import { Options } from "../data/InputOpt";
import { QuestionData } from "../data/Question";

const Questions = ({ questionNumber, value, onChange, error }) => {
  const questionIndex = questionNumber - 1;
  const question = QuestionData[questionIndex];

  return (
    <div className="mb-6">
      <label className="block mb-2 text-lg">
        <span className="text-pink-600 mr-1">*</span>
        {question.ques}
      </label>
      <div className="space-y-2">
        {Options.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              id={`question${questionNumber}_option${option.id}`}
              name={`question${questionNumber}`}
              value={option.option}
              checked={value === option.option}
              onChange={onChange}
              className="mr-2 h-4 w-4 text-[#dda757] focus:ring-[#dda757]"
            />
            <label 
              htmlFor={`question${questionNumber}_option${option.id}`}
              className="text-gray-700"
            >
              {option.option}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default Questions;