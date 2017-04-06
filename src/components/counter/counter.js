import React, { Component } from 'react';
import "./counter.css"

export default class Counter extends Component {
  render () {
    return (
      <div>
        <h1 className="counter-title">Counter: {this.props.counter}</h1>
        <button onClick={this.props.increment.bind(this)}>Increment</button><br></br>
        <button onClick={this.props.decrement.bind(this)}>Decrement</button><br></br>
        <button onClick={this.props.reset.bind(this)}>Reset</button>
      </div>
    )
  }
}
