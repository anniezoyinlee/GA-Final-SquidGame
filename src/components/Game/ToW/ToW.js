import React, { useState, useContext }  from 'react'
import { LifeContext } from '../../../context/LifeContext';
import './Tow.css';


function ToW() {
  const {life, setLife} = useContext(LifeContext)

  const pull = () => {
    const player = document.querySelectorAll('.top')
  }

  return (
    <div className="tow">
      <div className='button'>
        <button className='pullBtn'>Pull</button>
      </div>
      
      <div className='view'>
        <div className='platform left'>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>

        <div className='middle'></div>

        <div className='platform right'>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
      <div className='theTow'>
        <div className='rope'></div>
        <div className='players'>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
        </div>
        <div className='enemies'>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
          <div className='player'></div>
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