import React from 'react'
import { Route } from 'react-router-dom'
import GameRLGL from '../GameRLGL/GameRLGL'
  
  function Game() {

    return (
      <div className="game_window">
        <Route path='/game/rlgl' render={() => 
          <GameRLGL />
        } />
      </div>
    );
  }
  
  export default Game;
  