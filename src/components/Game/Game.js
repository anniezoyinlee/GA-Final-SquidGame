import React from 'react'
import { Route } from 'react-router-dom'
import GameRLGL from '../GameRLGL/GameRLGL'
  
  function Game() {

    return (
      <div className="gameContainer">
        <Route path='/game/rlgl' render={() => 
          <GameRLGL />
        } />
      </div>
    );
  }
  
  export default Game;
  