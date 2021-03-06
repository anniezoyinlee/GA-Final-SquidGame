import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { LifeContext } from '../../../context/LifeContext'
import { MinutesContext } from '../../../context/MinutesContext'
import { SecondsContext } from '../../../context/SecondsContext'
import './RLGL.css'

const lights = ['Red Light', 'Green Light']
let index = 0

// Red light/Green light sign changes
function changeLight() {
  index = index + 1
  if (index === lights.length) {
    index = 0
  }

  let status = document.getElementById('lightSign')
  status.innerText = lights[index]

  // setting color style to match the test
  if (status.innerText === 'Red Light') {
    status.classList = 'redlight'
  } else if (status.innerText === 'Green Light') {
    status.classList = 'greenlight'
  } 
}

function handleInterval() {
  changeLight()
}
  
function RLGL() {
  // Life count
  const {life, setLife} = useContext(LifeContext)
  // Timer
  const {minutes, setMinutes} = useContext(MinutesContext)
  const {seconds, setSeconds} = useContext(SecondsContext)

  // Setting interval
  // reference: https://stackoverflow.com/questions/53859601/how-do-i-clearinterval-on-click-with-react-hooks
  const useInterval = (handler, interval) => {
    const [lightInterval, setLightInterval] = useState()
    useEffect(() => {
      const light = setInterval(handler, interval)
      setLightInterval(light)
      return () => clearInterval(light)
    }, [])
    return () => clearInterval(lightInterval)
  }

  const stopInterval = useInterval(handleInterval, 2000 + Math.floor(Math.random()*1000))

  const [playerPass, setPlayerPass] = useState(0)
  const players = document.querySelectorAll('.player')

  // Next button, only show after a game is completed
  const [levelDone, setLevelDone] = useState(false)

  function handleLevelDone() {
    setLevelDone(!levelDone)
    setMinutes(0)
    setSeconds(0)
  }

  // Check if level is completed
  const checkWin = () => {
    // console.log(playerPass, players.length)
    // Somehow playerPass doesn't update after the first piece pass endLine
    if (playerPass + 1 >= players.length && players.length !== 0) {
      //Clearing interval
      stopInterval()
      handleLevelDone()
    }
  }

  // players' original location
  const [offsetRight001, setOffsetRight001] = useState(0)
  const [offsetRight002, setOffsetRight002] = useState(0)
  const [offsetRight003, setOffsetRight003] = useState(0)

  // reference: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  function getOffset(el) {
    const rect = el.getBoundingClientRect()
    return {
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX,
    }
  }

  let playerSpeed = 12 + Math.random()
  function movePlayerRight001(e) {
    let endLine = window.scrollX + document.querySelector('.ground').getBoundingClientRect().right
    setOffsetRight001(offsetRight001 + playerSpeed)
    // console.log(getOffset(e.currentTarget).right, endLine)
    
    if (getOffset(e.currentTarget).right > endLine) {
      setPlayerPass(playerPass + 1)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none'
    }
  }
  function movePlayerRight002(e) {
    let endLine = window.scrollX + document.querySelector('.ground').getBoundingClientRect().right
    setOffsetRight002(offsetRight002 + playerSpeed)
    // console.log(getOffset(e.currentTarget).right, endLine)

    if (getOffset(e.currentTarget).right > endLine) {
      setPlayerPass(playerPass + 1)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none'
    }
  }
  function movePlayerRight003(e) {
    let endLine = window.scrollX + document.querySelector('.ground').getBoundingClientRect().right
    setOffsetRight003(offsetRight003 + playerSpeed)

    // console.log(getOffset(e.currentTarget).right, endLine)
    if (getOffset(e.currentTarget).right > endLine) {
      setPlayerPass(playerPass + 1)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none'
    }
  }

  return (
    <div>
      {levelDone ?
        <main className='buttons'>
          <Link className='nextBtn' to="/game/dalgona">Next Game</Link> 
        </main>
        :
        <div className="rlgl">
          <div className='playWindow-left'>
            <div className='ground'>
              {/* Player 1 */}
              <div id='player1' className='player' 
                onClick={(e) => {
                  let lightSign = document.getElementById('lightSign')
                  if (lightSign.innerText === 'Red Light') {
                    setLife(life - 1)
                    checkWin() 
                  } else if (lightSign.innerText === 'Green Light') {
                    movePlayerRight001(e)
                    checkWin() 
                  } 
                }} 
                style={{transform: `translateX(${offsetRight001}vw)`}}></div>
              {/* Player 2 */}
              <div id='player2' className='player' 
                onClick={(e) => {
                  let lightSign = document.getElementById('lightSign')
                  if (lightSign.innerText === 'Red Light') {
                    setLife(life - 1)
                    checkWin() 
                  } else if (lightSign.innerText === 'Green Light') {
                    movePlayerRight002(e)
                    checkWin() 
                  }
                }} 
                style={{transform: `translateX(${offsetRight002}vw)`}}></div>
              {/* Player 3 */}
              <div id='player3' className='player' 
                onClick={(e) => {
                  let lightSign = document.getElementById('lightSign')
                  if (lightSign.innerText === 'Red Light') {
                    setLife(life - 1)
                    checkWin() 
                  } else if (lightSign.innerText === 'Green Light') {
                    movePlayerRight003(e)
                    checkWin() 
                  } 
                }} 
                style={{transform: `translateX(${offsetRight003}vw)`}}></div>
            </div>
          </div>
          <div className='playWindow-right'>
            <div className='lightSign'>
              <h1 id='lightSign' className='nolight'>No Light</h1>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
  
export default RLGL

// timer goes 0 finish the game
// Life goes down by the amount of players didn't pass endline * 10 when the timer goes 0
// dry the code