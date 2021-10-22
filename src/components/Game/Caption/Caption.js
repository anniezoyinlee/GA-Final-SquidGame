import React from 'react'
import './Caption.css'
  
function Caption({title, rules}) {
  return (
    <div className='caption'>
      <h1>{title}</h1>
      <p>{rules}</p>
    </div>
  );
}

export default Caption;
