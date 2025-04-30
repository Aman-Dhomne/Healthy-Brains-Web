import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalStress: localStorage.getItem("totalStress")
    ? JSON.parse(localStorage.getItem("totalStress"))
    : 0,
  userInfo: {
    age: "",
    gender: "",
    profession: "",
  },
  surveyResponses: {},
};

const stressSlice = createSlice({
  name: "stress",
  initialState,
  reducers: {
    setStressLevel: (state, action) => {
      state.totalStress = action.payload;
      localStorage.setItem("totalStress", JSON.stringify(action.payload));
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setSurveyResponses: (state, action) => {
      state.surveyResponses = action.payload;
      localStorage.setItem("surveyResponses", JSON.stringify(action.payload));
    },
    resetStressData: (state) => {
      state.totalStress = 0;
      state.userInfo = {
        age: "",
        gender: "",
        profession: "",
      };
      state.surveyResponses = {};
      localStorage.removeItem("totalStress");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("surveyResponses");
    }
  },
});

export const { setStressLevel, setUserInfo, setSurveyResponses, resetStressData } = stressSlice.actions;
export default stressSlice.reducer;
