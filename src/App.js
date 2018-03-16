import React, { Component } from 'react';
import './styles/App.css';

import HeroContainer from './components/Hero_Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HeroContainer />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
