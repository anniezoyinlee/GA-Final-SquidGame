import React, { useState }  from 'react'
import './RLGL.css';
  
function RLGL() {
  // const [life, setLife] = useState(456);
  const lights = ['Red Light', 'Green Light']
  let index = 0

  const [offsetRight001, setOffsetRight001] = useState(0);
  const [offsetRight002, setOffsetRight002] = useState(0);
  const [offsetRight003, setOffsetRight003] = useState(0);
  const [offsetRight004, setOffsetRight004] = useState(0);

  function changeLight() {
    index = index + 1;
    if (index == lights.length)
        index = 0;

    let status = document.getElementById('lightSign');
    status.innerText = lights[index];

    if (status.innerText === 'Red Light') {
      status.classList = 'redlight'
    } else if (status.innerText === 'Green Light') {
      status.classList = 'greenlight'
    }
  };

  //Setting interval
  let lightInterval = setInterval(function() {
    changeLight()
  }, Math.floor(3000 + Math.random() * 5000));

  function movePlayerRight001() {
    setOffsetRight001(offsetRight001 + 100);
  }
  function movePlayerRight002() {
    setOffsetRight002(offsetRight002 + 10);
  }
  function movePlayerRight003() {
    setOffsetRight003(offsetRight003 + 10);
  }
  function movePlayerRight004() {
    setOffsetRight004(offsetRight004 + 10);
  }

  function completeRLGL() {
    //Clearing interval
    clearInterval(lightInterval);
    let status = document.getElementById('lightSign');
    // remove red light/green light sign
    status.innerText = '';
  }
  
  // reference: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
    };
  }

  return (
    <div className="rlgl">
      <div className='playWindow-left'>
        <div className='ground'>
          <div className='player' onClick={(e) => {
            movePlayerRight001()
            console.log(getOffset(e.currentTarget).left)
            if (getOffset(e.currentTarget).left > 900) {
              completeRLGL() 
            }
          }} style={{
          transform: `translateX(${offsetRight001}px)`
        }}>001</div>
          <div className='player' onClick={movePlayerRight002} style={{
          transform: `translateX(${offsetRight002}px)`
        }}>002</div>
          <div className='player' onClick={movePlayerRight003} style={{
          transform: `translateX(${offsetRight003}px)`
        }}>003</div>
          <div className='player' onClick={movePlayerRight004} style={{
          transform: `translateX(${offsetRight004}px)`
        }}>004</div>
    
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