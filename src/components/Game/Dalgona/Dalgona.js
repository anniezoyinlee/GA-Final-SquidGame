import React, { useState }  from 'react'
import './Dalgona.css';
  
function Dalgona() {
  const [life, setLife] = useState(456);
  const [clickedPiece, setClickedPiece] = useState([])

  const clicked = (e) => {
    e.stopPropagation();
    setClickedPiece(arr => [...arr, `${arr.length}`]);
    e.currentTarget.style.opacity = 4;
    e.currentTarget.style.pointerEvents = 'none';
  }

  const slices = document.querySelectorAll('.slice')
  console.log(slices.length, clickedPiece.length)
  if (clickedPiece.length === slices.length) {
    console.log('game over')
  }

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
          <div id='slice1' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice2' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice3' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice4' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice5' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice6' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice7' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice8' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice9' className="slice" onClick={e => clicked(e) }></div>
        </li>
        <li>
          <div id='slice10' className="slice" onClick={e => clicked(e) }></div>
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

// timer 