import React from 'react'
import Caption from '../Caption/Caption';
  
  function GameRLGL() {
    let title = "Red Light, Green Light"
    let rules = "Click on the green pieces to make them move, only move when it's green light"

    return (
      <div className="game_rlgl">
        <Caption title={title} rules={rules} />
      </div>
    );
  }
  
  export default GameRLGL;
  