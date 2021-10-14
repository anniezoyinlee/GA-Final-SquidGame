import React from 'react'
import Caption from '../Caption/Caption';
import Timer from '../Timer/Timer';
  
function GameRLGL() {
  let title = "Red Light, Green Light"
  let rules = "Click on the green pieces to make them move, only move when it's green light"
  let minute = 0
  let second = 0
  let start = true

  function handleStart() {
    console.log(start)
    start = false
    console.log(start)
  }

  return (
    <div className="gameRLGL">
      <Caption title={title} rules={rules} />
      <Timer min={minute} sec={second} />

      <div className='playWindow-left'>
        <div className='ground'>
          <div className='player'>001</div>
          <div className='player'>002</div>
        </div>

        <div className='playWindow-right'>
          <div className='lightSign'>
            { start
              ? <h1 className='redlight'>Red Light</h1>
              : <h1 className='greenlight'>Green Light</h1> 
            }
          </div>
          <div className='startBtn'>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>

      </div>
    </div>
  );
}
  
  export default GameRLGL;
  
  // create one green piece 
  // create red/green light sign
  // when the green piece is clicked during green light, move toward end line
  // when the green piece is clicked during red light, the green piece turn red
  // if the green piece reach end line, show the next button
  // when the timer goes 0, show the next button

