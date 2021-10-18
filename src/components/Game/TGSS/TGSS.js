import React from 'react'
import './TGSS.css';

function TGSS() {


  return (
    <div className="tgss">

      <div className='players'>
        <div className='player'></div>
        <div className='player'></div>
      </div>

      <div className='bridges'>
        <div className='bridge up'>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
          <div className='glass up'></div>
        </div>
        <div className='bridge down'>
        <div className='glass up'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
          <div className='glass down'></div>
        </div>
      </div>
    </div>
  );
}
  
export default TGSS;
  
