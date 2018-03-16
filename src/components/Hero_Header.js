import React from 'react';

const HeroHeader = () => (
  <header class="cd-header">
    <div class="cd-header__logo">
      <a href="#0">
        <img src="assets/cd-logo.svg" alt="Logo" />
      </a>
    </div>
    <nav class="cd-header__nav js-cd-header__nav">
      <ul>
        <li>
          <a href="#0">Home</a>
        </li>
        <li>
          <a href="#0">Portfolio</a>
        </li>
        <li>
          <a href="#0">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeroHeader;
