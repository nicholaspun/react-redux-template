import React, { Component } from 'react';
import './main.css';

import Counter from './counter/counter';

export default class Main extends Component {
  render () {
    return (
      <div style={{ textAlign: "center"}}>
        <Counter {...this.props}></Counter>
      </div>
    )
  }
}
