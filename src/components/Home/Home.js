import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
return (
	<div className='home'>

    <div className='landingBtn'>
      <Link to="/rlgl" class>Start</Link>
      <Link to="/rank" class>Rank</Link>
    </div>
	</div>
);
}

export default Home;