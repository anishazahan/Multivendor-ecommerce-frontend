import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducers";
import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
import orderReducer from "./reducers/orderReducer";
import dashboardReducer from "./reducers/dashboardReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  card: cardReducer,
  order: orderReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
