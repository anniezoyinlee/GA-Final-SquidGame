import React, { useState, useContext }  from 'react'
import { Link } from 'react-router-dom'
import { LifeContext } from '../LifeContext';
import { MinutesContext } from '../MinutesContext';
import { SecondsContext } from '../SecondsContext';
import './Dalgona.css';
  
function Dalgona() {
  // Life count
  const {life, setLife} = useContext(LifeContext)
  // Timer
  const {minutes, setMinutes} = useContext(MinutesContext)
  const {seconds, setSeconds} = useContext(SecondsContext)
  // Lines on candy that has been clicked
  const [clickedPiece, setClickedPiece] = useState([])

  const clicked = (e) => {
    e.stopPropagation();
    setClickedPiece(arr => [...arr, `${arr.length}`]);
    e.currentTarget.style.opacity = 4;
    e.currentTarget.style.pointerEvents = 'none';
    checkWin()
  }

  // Start button, only show before a game starts
  const [start, setStart] = useState(false)

  function handleStart() {
    setStart(!start)
    setMinutes(5)
  }

  // Next button, only show after a game is completed
  const [levelDone, setLevelDone] = useState(false)

  function handleLevelDone() {
    setLevelDone(!levelDone)
    setMinutes(0)
    setSeconds(0)
  }

  // Check if level is completed
  const checkWin = () => {
    const slices = document.querySelectorAll('.slice')
    console.log(slices.length, clickedPiece.length)
    // some how the first slice clicked doesn't go to clickedpiece array
    if (clickedPiece.length >= slices.length - 1) {
      console.log('game over')
      handleLevelDone()
    }
  }

  return (
    <div>
    {start ?
      <div>
        {levelDone ?
          <main className='buttons'>
            <Link to="/rank">Rank</Link> 
          </main>
          :
          <div className="dalgona">
            <div className='candy' onClick={(e) => {
              e.stopPropagation()
              setLife(life - 1)
              }}>
            </div>
            <ul className="circleLine">
              <li>
                <div id='slice1' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice2' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice3' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice4' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice5' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice6' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice7' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice8' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice9' className="slice" onClick={e => clicked(e) }></div>
              </li>
              <li>
                <div id='slice10' className="slice" onClick={e => clicked(e) }></div>
              </li>
            </ul>
            <div className='circleShape' onClick={(e) => {
              e.stopPropagation()
              setLife(life - 1)
            }}></div>
          </div>
        }
      </div>
      :
      <main className='buttons'>
        <button className='playBtn' onClick={()=>handleStart()}>Play</button>
        <Link to="/">Quit</Link>
      </main>
    }
    </div>
  );
}
  
export default Dalgona;

// timer 