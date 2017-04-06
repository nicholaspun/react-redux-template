import React, { Component } from 'react';
import './app.css';

import Counter from './components/counter/counter.component';

export default class App extends Component {
  render () {
    return (
      <div style={{ textAlign: "center"}}>
        <Counter></Counter>
      </div>
    )
  }
}
