import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import './Rank.css';

// reference: https://www.youtube.com/watch?v=rSgbYCdc4G0
function useLives() {
  const [lives, setLives] = useState([])

  // Map out the data from collection 'lives' from firebase
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('lives')
      .onSnapshot((snapshot) => {
        const newLives = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setLives(newLives)
      })
    
    return () => unsubscribe()
  }, [])

  return lives
}

function Rank(  ) {
  const history = useHistory();
  const lives = useLives();
 
  return (
    <div className="rank">
      <button className='goBackBtn' onClick={() => history.goBack()}>Go Back</button>

      <div className='leaderboard'>
       
        <h1>Rank</h1>
        <ol>
          <li>
            <div className='name-entry'>
              <h4>Name</h4>
              <h4>Life</h4>
            </div>
          </li>
          {lives.map((life) => 
          <li key={life.id}>
            <div className='name-entry'>
              <span>{life.name}</span>
              <span>{life.score}</span>
            </div>
          </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Rank;

// last enter showing on the top