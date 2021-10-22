import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { LifeContext } from '../../../context/LifeContext';
import { RankContext } from '../../../context/RankContext';
import firebase from '../../../firebase'
import './AddRank.css';

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

function AddRank() {
  const lives = useLives();
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  // Life count
  const {life, setLife} = useContext(LifeContext)

  // show rank
  const {rank, setRank} = useContext(RankContext)

  function hideRank() {
    setRank(false)
  }

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
    <div className="addrank">
      <h1>Rank</h1>
      <div className="rankContent">
        <form onSubmit={onSubmit}>
          <div className='nameForm'>
            <h4>Enter Your Name</h4>
            <label>Your Name: </label>
            <input type='text' value={name} onChange={e => setName(e.currentTarget.value)}></input>
            <p>Your Score: {life}</p>
          </div>
          <button onClick={(e) => e.currentTarget.style.display = 'none'}>Add Rank</button>
        </form>

        <div className='leaderboard'>
          <ol>
            {lives.map((data) => 
            <li key={data.id}>
              <div className='name-entry'>
                { data.name }
                <span> { life }</span>
              </div>
            </li>
            )}
          </ol>
        </div>
      </div>
      <Link onClick={() => hideRank()} to="/">Home</Link>
    </div>
  );
}

export default AddRank;


// connect life count to life in rank
// only show name enter form when the game is finished
// hide the form after name and score show on chart
// last enter showing on the top