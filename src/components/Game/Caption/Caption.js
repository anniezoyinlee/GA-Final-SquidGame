import React from 'react'
  
  function Caption({title, rules}) {
    return (
      <div className='caption'>
        <h1>{title}</h1>
        <p>{rules}</p>
      </div>
    );
  }
  
  export default Caption;
  