import React from "react";
import { useHistory } from 'react-router-dom'
import './Rank.css';

function Rank() {
  const history = useHistory();

  return (
    <div className="rank">
      <button onClick={() => history.goBack()}>Go Back</button>

      <div className='leaderboard'>

        <ol>
          <li>
            <div className='name-entry'>
              Annie
              <code>456</code>
            </div>
          </li>
          <li>
            <div className='name-entry'>
              Annie
              <code>456</code>
            </div>
          </li>
          <li>
            <div className='name-entry'>
              Annie
              <code>456</code>
            </div>
          </li>
          <li>
            <div className='name-entry'>
              Annie
              <code>456</code>
            </div>
          </li>
        </ol>

        <form>
          <div>
            <h4>Enter Your Name</h4>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Life</label>
            <input type='number'></input>
          </div>
          <button>Add Rank</button>
        </form>
      </div>
    </div>
  );
}

export default Rank;


