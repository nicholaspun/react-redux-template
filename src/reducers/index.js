import { combineReducers } from "redux";

// Import reducers:
import counter from "./counterreducer";

const rootReducer = combineReducers({
  counter,
})

export default rootReducer;
