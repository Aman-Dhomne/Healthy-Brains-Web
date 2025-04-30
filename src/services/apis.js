// define the backend url 
const BASE_URL = "http://localhost:4000/api/v1"

export const stressPageEndpoints = {
    STRESS_TEST : BASE_URL + "/stress/stress-level",
    VISITOR_DATA : BASE_URL +"/stress/info-user"
}