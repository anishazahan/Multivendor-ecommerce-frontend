import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducers";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,

  // Add other reducers here if needed
});

export default rootReducer;
