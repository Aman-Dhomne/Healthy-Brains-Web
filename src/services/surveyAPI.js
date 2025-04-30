import { apiConnector } from "./apiConnector"
import { stressPageEndpoints } from "./apis";

const {STRESS_TEST} = stressPageEndpoints;

export const fetchSurveyResult = async(bodyData) =>{
    try{
        console.log("The body data in fetch api : ", ...bodyData);
        const result = await apiConnector("POST", STRESS_TEST, ...bodyData);
        console.log("fetch result res : ", result);
    }catch(error){
        console.log("Erro in fetching : ", error);
    }
}