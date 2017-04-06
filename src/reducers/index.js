import { combineReducers } from "redux";

// Import reducers:
import counter from "../components/counter/counter.reducer";

const rootReducer = combineReducers({
  counter,
})

export default rootReducer;
