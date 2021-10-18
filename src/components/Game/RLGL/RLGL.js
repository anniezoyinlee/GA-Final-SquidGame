import React, { useState }  from 'react'
import './RLGL.css';
  
function RLGL() {
  // const [life, setLife] = useState(456);

  return (
    <div className="rlgl">
      <div className='playWindow-left'>
        <div className='ground'>
          <div className='player'>001</div>
          <div className='player'>002</div>
          <div className='player'>003</div>
          <div className='player'>004</div>
          <div className='player'>005</div>
          <div className='player'>006</div>
          <div className='player'>007</div>
          <div className='player'>008</div>
          <div className='player'>009</div>
          <div className='player'>010</div>
        </div>
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
  );
}
  
export default RLGL;
  
// create one green piece 
// create red/green light sign
// when the green piece is clicked during green light, move toward end line
// when the green piece is clicked during red light, the green piece turn red
// if the green piece reach end line, show the next button
// when the timer goes 0, show the next button