import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-router-dom'
import GameRLGL from '../GameRLGL/GameRLGL';
import Rank from '../Rank/Rank';

function Home() {
return (
	<div className='Home'>
    

    <Link to="/rlgl" class>Start</Link>
    <Link to="/rank" class>Rank</Link>

	</div>
);
}

export default Home;