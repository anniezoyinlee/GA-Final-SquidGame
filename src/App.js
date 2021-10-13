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
    <main>
      <Route path="/game" component={Game}/>
      <Route path="/rank" component={Rank}/>
      <Route exact path="/" component={Home}/>
    </main>
	</div>
);
}

export default App;