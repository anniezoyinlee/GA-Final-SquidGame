import React, { useState, useMemo } from "react";
import { Route, Link } from 'react-router-dom'
import { LifeContext } from "./LifeContext";
import { MinutesContext } from "./MinutesContext";
import { SecondsContext } from "./SecondsContext";

// components
import Caption from './Caption/Caption';
import Timer from './Timer/Timer';
import RLGL from './RLGL/RLGL'
import Dalgona from './Dalgona/Dalgona'
import ToW from './ToW/ToW'
import Marbles from './Marbles/Marbles'
import TGSS from './TGSS/TGSS'

// css
import './Game.css'

function Game() {
  // Life count
  const [life, setLife] = useState(456)
  const lifeValue = useMemo(() => ({life, setLife}), [life, setLife])

  // Timer
  const [minutes, setMinutes] = useState(2)
  const minutesValue = useMemo(() => ({minutes, setMinutes}), [minutes, setMinutes])
  const [seconds, setSeconds] = useState(0)
  const secondsValue = useMemo(() => ({seconds, setSeconds}), [seconds, setSeconds])

  // Red Light, Green Light
  let titleRLGL = "Red Light, Green Light"
  let rulesRLGL = "Click on the green pieces to make them move, only move when it's green light"
  // Dalgona Candy
  let titleDalgona = "Dalgona Candy"
  let rulesDalgona = "Click along the line to make the shape out"
  // Tug of War
  let titleToW = "Tug of War"
  let rulesToW = "Click the button to pull"
  // Marbles
  let titleMarbles = "Marbles"
  let rulesMarbles = "Guess if the number of mables in the hand are even or odd"
  // The Glass Stepping Stones
  let titleTGSS = "The Glass Stepping Stones"
  let rulesTGSS = "Choose top or bottom glass to cross the bridge"
 
  // Start button, only show before a game starts
  const [start, setStart] = useState(false)
  // Next button, only show after a game is completed
  const [levelDone, setLevelDone] = useState(false)

  function handleStart() {
    setStart(!start)
  }

  function handleLevelDone() {
    setLevelDone(!levelDone)
  }

  return (
    <div className="gameContainer">
      <div className='screen'>
        <Timer min={minutes} sec={seconds} setMin={setMinutes} setSec={setSeconds} />
        <Route path='/game/rlgl' render={() => <Caption title={titleRLGL} rules={rulesRLGL} /> } />
        <Route path='/game/dalgona' render={() => <Caption title={titleDalgona} rules={rulesDalgona} />} />
        <Route path='/game/tow' render={() => <Caption title={titleToW} rules={rulesToW} />} />
        <Route path='/game/marbles' render={() => <Caption title={titleMarbles} rules={rulesMarbles} />} />
        <Route path='/game/tgss' render={() => <Caption title={titleTGSS} rules={rulesTGSS} />} />
        
        <h1 className='life'>Life: {life}</h1>
      </div>
      
      <LifeContext.Provider value={lifeValue}>
        <MinutesContext.Provider value={minutesValue}>
          <SecondsContext.Provider value={secondsValue}>
            {start ? 
              <main className='gameArea'>
                {/* Setting route to each pages */}
                <Route exact path='/game/rlgl' component={RLGL} />
                <Route exact path='/game/dalgona' component={Dalgona} />
                <Route exact path='/game/tow' component={ToW} />
                <Route exact path='/game/marbles' component={Marbles} />
                <Route exact path='/game/tgss' component={TGSS} />
              </main>
              : 
              <main className='buttons'>
                <button className='playBtn' onClick={()=>handleStart()}>Play</button>
                <Link to="/">Quit</Link>
              </main>
            } 
            {levelDone ?
            <main className='buttons'>
              <Route path='/game/rlgl' render={() => <Link to="/game/dalgona">Next</Link> } />
              <Route path='/game/dalgona' render={() => <Link to="/game/tow">Next</Link> } />
              <Route path='/game/tow' render={() => <Link to="/game/marbles">Next</Link> } />
              <Route path='/game/marbles' render={() => <Link to="/game/tgss">Next</Link> } />
              <Route path='/game/tgss' render={() => <Link to="/">Next</Link> } />
            </main>
            :
            null
            }
          </SecondsContext.Provider>
        </MinutesContext.Provider>
      </LifeContext.Provider>
    </div>
  );
}

export default Game;

// timer go 0 finish the game
// reach win condition finish the game
// finish game show next button
// new level timer reset