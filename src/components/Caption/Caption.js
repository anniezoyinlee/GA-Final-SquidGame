import React from 'react'
  
  function Caption({title, rules}) {
    return (
      <div className="game_rlgl">
        <div className='caption'>
          <h1>{title}</h1>
          <p>{rules}</p>
        </div>
      </div>
    );
  }
  
  export default Caption;
  