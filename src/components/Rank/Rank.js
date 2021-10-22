import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom'
// import { LifeContext } from '../../context/LifeContext';
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
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  // Life count
  // const {life, setLife} = useContext(LifeContext)

  function onSubmit(e) {
    e.preventDefault()

    // Store data 'name' and 'score to the collection 'lives' in firebase
    firebase
      .firestore()
      .collection('lives')
      .add({
        name,
        score: parseInt(score)
      })
      .then(() => {
        setName('')
        setScore('')
      })
  }

  return (
    <div className="rank">
      <button onClick={() => history.goBack()}>Go Back</button>

      <div className='leaderboard'>
        <form onSubmit={onSubmit}>
          <div className='nameForm'>
            <h4>Enter Your Name</h4>
            <label>Your Name</label>
            <input type='text' value={name} onChange={e => setName(e.currentTarget.value)}></input>
            <label>Score</label>
            {<input type='number'value={score} onChange={e => setScore(e.currentTarget.value)}></input>}
          </div>
          <button>Add Rank</button>
        </form>
        <h1>Rank</h1>
        <ol>
          {lives.map((life) => 
          <li key={life.id}>
            <div className='name-entry'>
              {life.name}
              <span> {life.score}</span>
            </div>
          </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Rank;


// connect life count to life in rank
// only show name enter form when the game is finished
// hide the form after name and score show on chart
// last enter showing on the top