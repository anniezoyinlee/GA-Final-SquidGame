import React, { useState }  from 'react'
import './TGSS.css';

function TGSS() {
  // const [life, setLife] = useState(456);

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
  
