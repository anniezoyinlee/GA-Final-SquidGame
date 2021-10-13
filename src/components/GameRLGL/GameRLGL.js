import { 
    BrowserRouter as Router, 
    Route, 
    Link 
  } from 'react-router-dom'
  // import Game from './components/Game/Game';
  import Rank from '../Rank/Rank';
  
  function GameRLGL() {
    return (
      <div className="GameRLGL">
        <Router>
          {/* <Link to="/game/rlgl" class>Next Game</Link> */}
          <Link to="/rank" class>Rank</Link>
          {/* <Route path="/game/rlgl" component={RLGL}/> */}
          <Route path="/rank" component={Rank}/>
        </Router>
      </div>
    );
  }
  
  export default GameRLGL;
  