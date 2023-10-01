import React from 'react';
import budget from './budget.png'

function Hero() {
  return (
    <div className="bg-clr">
      <div className="hero">
        <img src={budget} alt="Budget Image" className="bugImg"/>
        <h1>Personal Budget</h1>
        <h2>A personal-budget management app</h2>
      </div>
    </div>
  );
}

export default Hero;
