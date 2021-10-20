import React, { useState }  from 'react'
import './Dalgona.css';
  
function Dalgona() {
  const [life, setLife] = useState(456);

  return (
    <div className="dalgona">
      <h1>Life: {life}</h1>
      <div className='candy' onClick={(e) => {
        e.stopPropagation()
        setLife(life - 1)
        }}>
      </div>
      <ul className="circleLine">
        <li>
          <div className="slice" onClick={(e) => {
          e.stopPropagation();
          console.log('1') 
          console.log(e.currentTarget)
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
        e.stopPropagation()
        setLife(life - 1)
      }}></div>
    </div>
  );
}
  
export default Dalgona;

// make onclick functions, user click on each of lines will change style
// when all the lines are clicked, finish the game
// click out of the line on the candy would lose lives
// timer 