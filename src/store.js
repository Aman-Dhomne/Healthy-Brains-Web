import { configureStore } from "@reduxjs/toolkit";
import StressLevelSlice from "./Slices/StressLevelSlice";

export const store = configureStore({
    reducer:{
        stress: StressLevelSlice,
    }
})