import React from 'react';
import { Hero } from './Components/Hero.js';
import { GlobeDemo } from './Components/globelanding.js';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Use the Hero component */}
      <GlobeDemo />
      {/* Add more content or components as needed */}
    </div>
  );
}

export default LandingPage;
