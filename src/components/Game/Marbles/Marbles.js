import React, { useState, useContext }  from 'react'
import { LifeContext } from '../../../context/LifeContext'
import './Marbles.css'
  
function Marbles() {
  const { life, setLife } = useContext(LifeContext)
  const [ clicked, setClicked ] = useState(false)
  const [ marbles, setMarbles ] = useState(10)
  const marbleAmount = Math.floor( 1 + Math.random() * 9 )

  // if (clicked === true) {
  //   const buttons = document.querySelectorAll('.guessBtn')
  //   console.log(buttons)
  //   for (let button in buttons) {
  //     console.log(button)
  //     // button.style.pointerEvents = 'none'
  //   }
  // }
  
  const evenClicked = () => {
    setClicked(true)
    if (marbleAmount % 2 === 0) {
      console.log('even')
      setMarbles(marbles + 1)
    } else {
      console.log('odd')
      setMarbles(marbles - 1)
    }
    setTimeout(() => {
      setClicked(false)
    }, 5000)
  }

  const oddClicked = () => {
    setClicked(true)
    if (marbleAmount % 2 === 0) {
      console.log('even')
      setMarbles(marbles - 1)
    } else {
      console.log('odd')
      setMarbles(marbles + 1)
    }
    setTimeout(() => {
      setClicked(false)
    }, 5000)
  }

  return (
    <div className="marbles">
      <div className='guessBtn evenBtn'>
        <button onClick={() => evenClicked()}><h1>Even</h1></button>
      </div>
      <div className='hand'>
        <div className='handImg'>
          <div className='inHand'>
            { clicked
              ? <h1 className='marbleAmount'>{ marbleAmount }</h1> 
              : <h1 className='questionMark'>?</h1>
            }
          </div>
        </div>
      </div>
      <div className='guessBtn oddBtn'>
        <button onClick={() => oddClicked()}><h1>Odd</h1></button>
      </div>
    </div>
  )
}
  
export default Marbles

// fix random number
// have a random number in enemy's hand
// if the number is even and player click on even, player win. player click on odd, player lose
// if the number is odd and player click on even, player lose. player click on even, player win