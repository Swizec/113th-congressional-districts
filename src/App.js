import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CongressionalDistricts from './CongressionalDistricts';

class App extends Component {
  render() {
    return (
        <div className="App">
            <svg width="960" height="600">
                <CongressionalDistricts width={960} height={600} />
            </svg>
      </div>
    );
  }
}

export default App;
