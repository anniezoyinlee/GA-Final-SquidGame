import React from 'react'
import Caption from '../Caption/Caption';
import Timer from '../Timer/Timer';
  
function GameRLGL() {
  let title = "Red Light, Green Light"
  let rules = "Click on the green pieces to make them move, only move when it's green light"

  return (
    <div className="gameRLGL">
      <Caption title={title} rules={rules} />
      {/* Need to update Timer to 00:00 */}
      <Timer />

      <div className='ground'>
        
      </div>
      
    </div>
  );
}
  
  export default GameRLGL;
  