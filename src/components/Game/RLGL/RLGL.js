import React, { useState }  from 'react'
import './RLGL.css';
  
function RLGL() {
  // const [life, setLife] = useState(456);
  const [gameOver, setGameOver] = useState(false);

  // players' original location
  const [offsetRight001, setOffsetRight001] = useState(0);
  const [offsetRight002, setOffsetRight002] = useState(0);

  function movePlayerRight001(e) {
    console.log(getOffset(e.currentTarget).left)
    setOffsetRight001(offsetRight001 + 20);
    if (getOffset(e.currentTarget).left > 920) {
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none';
    }
  }
  function movePlayerRight002(e) {
    console.log(getOffset(e.currentTarget).left)
    setOffsetRight002(offsetRight002 + Math.floor(20 + Math.random() * 80));
    if (getOffset(e.currentTarget).left > 900) {
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none';
    }
  }

  const lights = ['Red Light', 'Green Light']
  let index = 0

  function changeLight() {
    index = index + 1;
    if (index == lights.length)
        index = 0;

    let status = document.getElementById('lightSign');
    status.innerText = lights[index];

    // setting color style to match the test
    if (status.innerText === 'Red Light') {
      status.classList = 'redlight'
    } else if (status.innerText === 'Green Light') {
      status.classList = 'greenlight'
    }
  };

  // Setting interval
  // let lightInterval = setInterval(function() {
  //   changeLight()
  // }, 2000);
  // }, Math.floor(3000 + Math.random() * 5000));
  
  // reference: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
    };
  }


  if (!gameOver) {
    
  }

  if (gameOver) {
    let status = document.getElementById('lightSign');
    // remove red light/green light sign
    status.innerText = ''
    //Clearing interval
    // clearInterval(lightInterval);
  }

  return (
    <div className="rlgl">
      <div className='playWindow-left'>
        <div className='ground'>
          <div id='player1' className='player' 
            onClick={(e) => movePlayerRight001(e)} 
            style={{transform: `translateX(${offsetRight001}px)`}}>001</div>
          <div id='player2' className='player' 
            onClick={(e) => movePlayerRight002(e)} 
            style={{transform: `translateX(${offsetRight002}px)`}}>002</div>
        </div>
      </div>
      <div className='playWindow-right'>
        <div className='lightSign'>
          <h1 id='lightSign' className='redlight'>Red Light</h1>
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