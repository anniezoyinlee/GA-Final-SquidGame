import React from 'react'

  
function Dalgona() {

  return (
    <div className="gameContainer dalgona">
  

      <div className='candy' onClick={() => console.log('circle')}>
        
      </div>
        <ul className="circleLine">
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log(e.currentTarget)
            e.currentTarget.style.color = 'blue'
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('2') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('3') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('4') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('5') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('6') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('7') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('8') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('9') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('10') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('11') 
          }}></div>
          </li>
          <li>
            <div className="slice" onClick={(e) => {
            e.stopPropagation();
            console.log('12') 
          }}></div>
          </li>
        </ul>
        <div className='circleShape' onClick={(e) => {
            e.stopPropagation();
            console.log('die') 
        }}></div>

    </div>
  );
}
  
  export default Dalgona;
  
  // make divs to have 

