import { combineReducers} from "@reduxjs/toolkit";
import userRegistrationReducer from "./userRegistration.slice.tsx";


const rootReducer = combineReducers({
    user: userRegistrationReducer,
})

export default rootReducer;