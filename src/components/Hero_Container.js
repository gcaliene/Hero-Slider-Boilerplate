import React, { Component } from 'react';
import HeroHeader from './Hero_Header';
import HeroSection from './Hero_Section';

export default class HeroContainer extends Component {
  render() {
    return (
      <div>
        <HeroHeader />
        <HeroSection />
      </div>
    );
  }
}
