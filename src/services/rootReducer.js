import { combineReducers } from "redux";
import userReducer from "./user/userReducers";
import authReducer from "./user/auth/authReducer";
import courseReducer from "./course/courseReducers";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  auth: authReducer,
});

export default rootReducer;