import React, { Component } from 'react';
import './styles/hero-slider-style.css';
import './styles/reset.css';

import HeroContainer from './components/Hero_Container';
import MainContainer from './components/Main_Container';

class App extends Component {
  render() {
    return (
      <div>
        <HeroContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
