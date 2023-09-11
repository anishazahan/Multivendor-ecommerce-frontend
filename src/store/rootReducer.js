import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducers";

const rootReducer = combineReducers({
  home: homeReducer,

  // Add other reducers here if needed
});

export default rootReducer;
