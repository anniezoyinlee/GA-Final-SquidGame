import React, { useState, useContext }  from 'react'
import { LifeContext } from '../../../context/LifeContext';
import './TGSS.css';

function TGSS() {
  const {life, setLife} = useContext(LifeContext)

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
  
