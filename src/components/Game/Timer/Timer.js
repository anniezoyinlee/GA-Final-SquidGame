import React, { useState, useEffect } from 'react'
import './Timer.css';

// reference: https://www.codegrepper.com/code-examples/javascript/react+countdown+timer+minutes+seconds
const Timer = ({min, sec}) => {
  const initialMinute = min
  const initialSeconds = sec
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [ seconds, setSeconds ] =  useState(initialSeconds);

  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } 
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });

  return (
    <div className='pinkGuy'>

      <div className='hoodie'>
        <div className='face'></div>
      </div>

      <div className='timerScreen'>
        <div className='timer'>
          { minutes === 0 && seconds === 0
            ? <h1>00:00</h1> 
            : <h1>{minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
          }
        </div>
      </div>
    </div>
  )
}

export default Timer;


// numbers have difference spacing when counting down, need to find a way to fix it