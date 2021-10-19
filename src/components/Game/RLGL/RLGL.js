import React, { useState, useEffect }  from 'react'
import './RLGL.css';
  
function RLGL() {
  // const [life, setLife] = useState(456);
  const [playerPass, setPlayerPass] = useState(0)
  const players = document.querySelectorAll('.player')

  console.log(playerPass, players.length)
  if (playerPass !== players.length) {
    console.log(playerPass, players.length)
  }

  // players' original location
  const [offsetRight001, setOffsetRight001] = useState(0);
  const [offsetRight002, setOffsetRight002] = useState(0);
  const [offsetRight003, setOffsetRight003] = useState(0);

  // reference: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX,
    };
  }

  function movePlayerRight001(e) {
    setOffsetRight001(offsetRight001 + Math.floor(3 + Math.random() * 5));
    if (getOffset(e.currentTarget).right > 910) {
      setPlayerPass(playerPass + 1)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none';
    }
  }
  function movePlayerRight002(e) {
    setOffsetRight002(offsetRight002 + Math.floor(3 + Math.random() * 5));
    if (getOffset(e.currentTarget).right > 910) {
      setPlayerPass(playerPass + 1)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none';
    }
  }
  function movePlayerRight003(e) {
    setOffsetRight003(offsetRight003 + Math.floor(3 + Math.random() * 5));
    if (getOffset(e.currentTarget).right > 910) {
      setPlayerPass(playerPass + 1)
      console.log(playerPass)
      // unclickable after crossing the end line
      e.currentTarget.style.pointerEvents = 'none';
    }
  }

  const lights = ['Red Light', 'Green Light']
  let index = 0

  function changeLight() {
    index = index + 1;
    if (index === lights.length) {
      index = 0
    }

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
  let lightInterval = setInterval(function() {
    changeLight()
  }, Math.floor(2000 + Math.random() * 5000));

  if (playerPass === players.length) {
    console.log('gameOver')
    // let status = document.getElementById('lightSign');
    // // remove red light/green light sign
    // status.innerText = ''
    //Clearing interval
    clearInterval(lightInterval);
  }

  return (
    <div className="rlgl">
      <div className='playWindow-left'>
        <div className='ground'>
          <div id='player1' className='player' 
            onClick={(e) => movePlayerRight001(e)} 
            style={{transform: `translateX(${offsetRight001}vw)`}}>001</div>
          <div id='player2' className='player' 
            onClick={(e) => movePlayerRight002(e)} 
            style={{transform: `translateX(${offsetRight002}vw)`}}>002</div>
          <div id='player3' className='player' 
            onClick={(e) => movePlayerRight003(e)} 
            style={{transform: `translateX(${offsetRight003}vw)`}}>003</div>
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
  
// fix setInterval issues
// when the green piece is clicked during green light, move toward end line
// when the green piece is clicked during red light, the green piece turns not clickable
// if all the clickable green pieces reach the end line, game is over
// when the timer goes 0, no green pieces are clickable
// when the game is over, do alive player count and show the next button