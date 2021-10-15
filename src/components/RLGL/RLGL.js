import React from 'react'

  
function RLGL() {


  return (
    <div className="gameContainer rlgl">

      <div className='playWindow-left'>
        <div className='ground'>
          <div className='player'>001</div>
          <div className='player'>002</div>
        </div>

        <div className='playWindow-right'>
          <div className='lightSign'>
            { 3>2
              ? <h1 className='redlight'>Red Light</h1>
              : <h1 className='greenlight'>Green Light</h1> 
            }
          </div>
        </div>

      </div>
    </div>
  );
}
  
  export default RLGL;
  
  // create one green piece 
  // create red/green light sign
  // when the green piece is clicked during green light, move toward end line
  // when the green piece is clicked during red light, the green piece turn red
  // if the green piece reach end line, show the next button
  // when the timer goes 0, show the next button

