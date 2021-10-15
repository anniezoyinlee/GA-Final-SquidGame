import React, { useState }  from 'react'
// import Life from '../Life/Life'
import './Marbles.css';
  
function Marbles() {
  // const [life, setLife] = useState(456);

  return (
    <div className="marbles">
      <div className='evenBtn'>
        <button><h1>Even</h1></button>
      </div>
      <div className='hand'>
        <div className='handImg'>
          <div className='inHand'>
            { Math.floor(1 + Math.random() * 9) % 2 === 0
              ? <h1 className='questionMark'>?</h1>
              : <h1 className='marbleAmount'>{ Math.floor(1 + Math.random() * 9) }</h1> 
            }
          </div>
        </div>
      </div>
      <div className='oddBtn'>
        <button><h1>Odd</h1></button>
      </div>
    </div>
  );
}
  
export default Marbles;

// have a random number in enemy's hand
// if the number is even and player click on even, player win. player click on odd, player lose
// if the number is odd and player click on even, player lose. player click on even, player win