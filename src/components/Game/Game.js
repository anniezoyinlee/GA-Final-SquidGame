import React, { useState, useMemo } from "react";
import { Route, Link } from 'react-router-dom'
import Caption from './Caption/Caption';
import Timer from './Timer/Timer';
// import Life from './Life/Life';
import RLGL from './RLGL/RLGL'
import Dalgona from './Dalgona/Dalgona'
import ToW from './ToW/ToW'
import Marbles from './Marbles/Marbles'
import TGSS from './TGSS/TGSS'
// import { UserContext } from "./UserContext";

function Game() {
  // const [user, setUser] = useState(null);
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Red Light, Green Light
  let titleRLGL = "Red Light, Green Light"
  let rulesRLGL = "Click on the green pieces to make them move, only move when it's green light"
  let lifeRLGL = 456;
  // Dalgona Candy
  let titleDalgona = "Dalgona Candy"
  let rulesDalgona = "Click along the line to make the shape out"
  let lifeDalgona = 456;
  // Tug of War
  let titleToW = "Tug of War"
  let rulesToW = "Click the button to pull"
  let lifeToW = 456;
  // Marbles
  let titleMarbles = "Marbles"
  let rulesMarbles = "Guess if the number of mables in the hand are even or odd"
  let lifeMarbles = 456;
  // The Glass Stepping Stones
  let titleTGSS = "The Glass Stepping Stones"
  let rulesTGSS = "Choose top or bottom glass to cross the bridge"
  let lifeTGSS = 456;
  // Timer
  let minute = 1
  let second = 0
  // Start button
  let start = true

  function handleStart() {
    console.log(start)
    start = false
    console.log(start)
  }

  return (
    <div className="gameContainer">
      <div className='screen'>
        <Timer min={minute} sec={second} />
        <Route path='/game/rlgl' render={() => <Caption title={titleRLGL} rules={rulesRLGL} />} />
        <Route path='/game/dalgona' render={() => <Caption title={titleDalgona} rules={rulesDalgona} />} />
        <Route path='/game/tow' render={() => <Caption title={titleToW} rules={rulesToW} />} />
        <Route path='/game/marbles' render={() => <Caption title={titleMarbles} rules={rulesMarbles} />} />
        <Route path='/game/tgss' render={() => <Caption title={titleTGSS} rules={rulesTGSS} />} />
        <div className='buttons'>
          <button onClick={handleStart}>Start</button>
          <Route path='/game/rlgl' render={() => <Link to="/game/dalgona">Next</Link> } />
          <Route path='/game/dalgona' render={() => <Link to="/game/tow">Next</Link> } />
          <Route path='/game/tow' render={() => <Link to="/game/marbles">Next</Link> } />
          <Route path='/game/marbles' render={() => <Link to="/game/tgss">Next</Link> } />
          <Route path='/game/tgss' render={() => <Link to="/rank">Next</Link> } />
        </div>
        {/* <Route path='/game/rlgl' render={() => <Life life={lifeRLGL} /> } />
        <Route path='/game/dalgona' render={() => <Life life={lifeDalgona} /> } />
        <Route path='/game/tow' render={() => <Life life={lifeToW} /> } />
        <Route path='/game/marbles' render={() => <Life life={lifeMarbles} /> } />
        <Route path='/game/tgss' render={() => <Life life={lifeTGSS} /> } /> */}
      </div>
      
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