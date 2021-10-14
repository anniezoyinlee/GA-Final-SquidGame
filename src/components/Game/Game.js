import React from 'react'
import { Route } from 'react-router-dom'
import Caption from '../Caption/Caption';
import Timer from '../Timer/Timer';
import RLGL from '../RLGL/RLGL'
import Dalgona from '../Dalgona/Dalgona'


function Game() {
  let titleDalgona = "Dalgona Candy"
  let rulesDalgona = "Click on all the dots to make the shape out"
  let titleRLGL = "Red Light, Green Light"
  let rulesRLGL = "Click on the green pieces to make them move, only move when it's green light"
  let minute = 0
  let second = 0
  let start = true

  function handleStart() {
    console.log(start)
    start = false
    console.log(start)
  }

  return (
    <div className="gameContainer">
      <Route path='/game/rlgl' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleRLGL} rules={rulesRLGL} />
          <div className='startBtn'>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      } />
      <Route path='/game/dalgona' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleDalgona} rules={rulesDalgona} />
          <div className='startBtn'>
            <button onClick={handleStart}>Start</button>
          </div>
        </div>
      } />
      
      <main>
        {/* Setting route to each pages */}
        <Route path='/game/rlgl' component={RLGL} />
        <Route path='/game/dalgona' component={Dalgona} />
      </main>

    </div>
  );
}

export default Game;
