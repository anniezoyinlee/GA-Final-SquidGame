import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='landingBtn'>
        <Link to="/game/rlgl">Start</Link>
        <Link to="/rank">Rank</Link>
      </div>
    </div>
  );
}

export default Home;