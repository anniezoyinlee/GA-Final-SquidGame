import React, { useEffect } from 'react'
import './Timer.css'

// reference: https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
const Timer = ({min, sec, setMin, setSec}) => {

  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1)
      } 
      if (sec === 0) {
        if (min === 0) {
          clearInterval(myInterval)
        } else {
          setMin(min - 1)
          setSec(59)
        }
      } 
    }, 1000)
    return ()=> {
      clearInterval(myInterval)
    }
  })

  return (
    <div className='pinkGuy'>

      <div className='hoodie'>
        <div className='face'></div>
      </div>

      <div className='timerScreen'>
        <div className='timer'>
          { min === 0 && sec === 0
            ? <h1>00:00</h1> 
            : <h1>{min < 10 ?  `0${min}` : min}:{sec < 10 ?  `0${sec}` : sec}</h1> 
          }
        </div>
      </div>
    </div>
  )
}

export default Timer

// numbers have difference spacing when counting down, need to find a way to fix it