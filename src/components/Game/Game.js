import React, { useState, useMemo } from "react";
import { Route, Link } from 'react-router-dom'
import Caption from './Caption/Caption';
import Timer from './Timer/Timer';
import RLGL from './RLGL/RLGL'
import Dalgona from './Dalgona/Dalgona'
import ToW from './ToW/ToW'
import Marbles from './Marbles/Marbles'
import TGSS from './TGSS/TGSS'
import './Game.css'
import { LifeContext } from "./LifeContext";

function Game() {
  const [life, setLife] = useState(456)
  const lifeValue = useMemo(() => ({life, setLife}), [life, setLife])
  // const [user, setUser] = useState(null);
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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
  // Timer
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
 
  function handleStart() {
    // Show game area
    let game = document.querySelector('.gameArea')
    game.style.display = 'block'
  }

  return (
    <div className="gameContainer">
      <div className='screen'>
        <Timer min={minute} sec={second} />
        <Route path='/game/rlgl' render={() => <Caption title={titleRLGL} rules={rulesRLGL} /> } />
        <Route path='/game/dalgona' render={() => <Caption title={titleDalgona} rules={rulesDalgona} />} />
        <Route path='/game/tow' render={() => <Caption title={titleToW} rules={rulesToW} />} />
        <Route path='/game/marbles' render={() => <Caption title={titleMarbles} rules={rulesMarbles} />} />
        <Route path='/game/tgss' render={() => <Caption title={titleTGSS} rules={rulesTGSS} />} />
        <div className='buttons'>
          <button onClick={()=>handleStart()}>Start</button>
          <Route path='/game/rlgl' render={() => <Link to="/game/dalgona">Next</Link> } />
          <Route path='/game/dalgona' render={() => <Link to="/game/tow">Next</Link> } />
          <Route path='/game/tow' render={() => <Link to="/game/marbles">Next</Link> } />
          <Route path='/game/marbles' render={() => <Link to="/game/tgss">Next</Link> } />
          <Route path='/game/tgss' render={() => <Link to="/">Next</Link> } />
        </div>
        <h1 className='life'>Life: {life}</h1>
        {/* <Route path='/game/rlgl' render={() => <Life life={lifeRLGL} /> } />
        <Route path='/game/dalgona' render={() => <Life life={lifeDalgona} /> } />
        <Route path='/game/tow' render={() => <Life life={lifeToW} /> } />
        <Route path='/game/marbles' render={() => <Life life={lifeMarbles} /> } />
        <Route path='/game/tgss' render={() => <Life life={lifeTGSS} /> } /> */}
      </div>
      
      <LifeContext.Provider value={lifeValue}>
        <main className='gameArea'>
          {/* Setting route to each pages */}
          <Route exact path='/game/rlgl' component={RLGL} />
          <Route exact path='/game/dalgona' component={Dalgona} />
          <Route exact path='/game/tow' component={ToW} />
          <Route exact path='/game/marbles' component={Marbles} />
          <Route exact path='/game/tgss' component={TGSS} />
        </main>
      </LifeContext.Provider>

    </div>
  );
}

export default Game;