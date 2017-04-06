// Redux Functions
import { connect } from "react-redux";

// Actions
import { increment, decrement, reset } from "../actions/count";

// Components
import Main from './main';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  }
}

// Connects state and dispatch as props to our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
