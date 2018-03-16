import React, { Component } from 'react';
import HeroHeader from './Hero_Header';
import HeroSection from './Hero_Section';

export default class HeroContainer extends Component {
  render() {
    return (
      <div>
        <HeroHeader />
        <HeroSection />
        <main class="cd-main-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            veniam quisquam, rem illum dicta cumque, voluptate fugiat impedit
            beatae rerum ratione, voluptates nisi magni delectus ab, eaque atque
            iste. Molestias incidunt nemo veniam alias nam nisi distinctio optio
            error architecto odit! Illo dicta nulla fugiat distinctio
            laudantium, corrupti eum unde.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            veniam quisquam, rem illum dicta cumque, voluptate fugiat impedit
            beatae rerum ratione, voluptates nisi magni delectus ab, eaque atque
            iste. Molestias incidunt nemo veniam alias nam nisi distinctio optio
            error architecto odit! Illo dicta nulla fugiat distinctio
            laudantium, corrupti eum unde. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Suscipit veniam quisquam, rem illum
            dicta cumque, voluptate fugiat impedit beatae rerum ratione,
            voluptates nisi magni delectus ab, eaque atque iste. Molestias
            incidunt nemo veniam alias nam nisi distinctio optio error
            architecto odit! Illo dicta nulla fugiat distinctio laudantium,
            corrupti eum unde.
          </p>
        </main>
      </div>
    );
  }
}
