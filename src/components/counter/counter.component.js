import React, { Component } from 'react';
import { connect } from "react-redux";
import "./counter.component.css"; // Styles
import { increment, decrement, reset } from "./counter.action"; // Actions

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

class Counter extends Component {
  render () {
    const { counter, increment, decrement, reset } = this.props
    return (
      <div>
        <h1 className="counter-title">Counter: {counter}</h1>
        <button onClick={increment}>Increment</button><br></br>
        <button onClick={decrement}>Decrement</button><br></br>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
