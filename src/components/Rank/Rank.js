import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import './Rank.css';
import firebase from '../../firebase'
import AddName from "../enter-rank-name";

// reference: https://www.youtube.com/watch?v=rSgbYCdc4G0
function useLives() {
  const [lives, setLives] = useState([])

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

function Rank() {
  const history = useHistory();
  const lives = useLives();
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    firebase
      .firestore()
      .collection(lives)
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
        <AddName />
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