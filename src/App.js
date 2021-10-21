import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Rank from './components/Rank/Rank'
import Game from './components/Game/Game'
import './App.css';

function App() {

return (
	<div className='window'>

		{/* Setting route to each pages */}
		<Route path="/game" component={Game}/>
		<Route exact path="/rank" component={Rank}/>
		<Route exact path="/" component={Home}/>

	</div>
);
}

export default App;