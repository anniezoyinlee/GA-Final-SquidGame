import React from 'react'
import './Tow.css';

function ToW() {


  return (
    <div className="tow">
      <div className='button'>
        <button className='pullBtn'>Pull</button>
      </div>

      <div className='view'>
        <div className='platform left'>
          <div className='top'>
            <div className='player'>001</div>
            <div className='player'>002</div>
          </div>
          <div className='bottom'></div>
        </div>

        <div className='middle'></div>
        
        <div className='platform right'>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
    </div>
  );
}
  
export default ToW;
  

// click on button to pull and get a random number between 1-10
// if number > 5 enemy + 1
// if number <= 5 player + 1
// when enemy or player reach 10 finish the game