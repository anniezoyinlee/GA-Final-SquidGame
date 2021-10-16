import React from 'react'
import { Route, Link } from 'react-router-dom'
import Caption from './Caption/Caption';
import Timer from './Timer/Timer';
import RLGL from './RLGL/RLGL'
import Dalgona from './Dalgona/Dalgona'
import ToW from './ToW/ToW'
import Marbles from './Marbles/Marbles'
import TGSS from './TGSS/TGSS'

function Game() {
  let titleDalgona = "Dalgona Candy"
  let rulesDalgona = "Click along the line to make the shape out"
  let titleRLGL = "Red Light, Green Light"
  let rulesRLGL = "Click on the green pieces to make them move, only move when it's green light"
  let titleToW = "Tug of War"
  let rulesToW = "Click the button to pull"
  let titleMarbles = "Marbles"
  let rulesMarbles = "Guess if the number of mables in the hand are even or odd"
  let titleTGSS = "The Glass Stepping Stones"
  let rulesTGSS = "Choose top or bottom glass to cross the bridge"
  let minute = 1
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
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <Link to="/game/dalgona">Next</Link>
          </div>
        </div>
      } />
      <Route path='/game/dalgona' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleDalgona} rules={rulesDalgona} />
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <Link to="/game/tow">Next</Link>
          </div>
        </div>
      } />
      <Route path='/game/tow' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleToW} rules={rulesToW} />
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <Link to="/game/marbles">Next</Link>
          </div>
        </div>
      } />
      <Route path='/game/marbles' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleMarbles} rules={rulesMarbles} />
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <Link to="/game/tgss">Next</Link>
          </div>
        </div>
      } />
      <Route path='/game/tgss' render={() => 
        <div className='screen'>
          <Timer min={minute} sec={second} />
          <Caption title={titleTGSS} rules={rulesTGSS} />
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <Link to="/">Next</Link>
          </div>
        </div>
      } />
      
      <main className='gameArea'>
        {/* Setting route to each pages */}
        <Route exact path='/game/rlgl' component={RLGL} />
        <Route exact path='/game/dalgona' component={Dalgona} />
        <Route exact path='/game/tow' component={ToW} />
        <Route exact path='/game/marbles' component={Marbles} />
        <Route exact path='/game/tgss' component={TGSS} />
      </main>

    </div>
  );
}

export default Game;
