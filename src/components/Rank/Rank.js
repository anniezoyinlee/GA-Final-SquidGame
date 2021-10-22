import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import './Rank.css';

// reference: https://www.youtube.com/watch?v=rSgbYCdc4G0
const SORT_OPTIONS = {
  'SCORE_ASC': {column: 'score', direction: 'asc'},
  'SCORE_DESC': {column: 'score', direction: 'desc'}
}

function useLives(sortBy) {
  const [lives, setLives] = useState([])

  // Map out the data from collection 'lives' from firebase
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('lives')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newLives = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setLives(newLives)
      })
    
    return () => unsubscribe()
  }, [sortBy])

  return lives
}

function Rank(  ) {
  const [sortBy, setSortBy] = useState('SCORE_DESC')
  const history = useHistory();
  const lives = useLives(sortBy);
 
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