import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducers";
import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  card: cardReducer,
});

export default rootReducer;
