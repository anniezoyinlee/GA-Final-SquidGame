import React, { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { LifeContext } from '../../../context/LifeContext'
import { RankContext } from '../../../context/RankContext'
import firebase from '../../../firebase'
import './AddRank.css'

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

function AddRank() {
  const [sortBy, setSortBy] = useState('SCORE_DESC')
  const lives = useLives(sortBy)
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
      <Link onClick={() => hideRank()} to="/">Home</Link>
      <h1>Rank</h1>
      <div className="rankContent">
        <form onSubmit={ onSubmit }>
          <div className='nameForm'>
            <h4>Enter Your Name</h4>
            <label>Your Name: </label>
            <input type='text' value={ name } onChange={ e => setName(e.currentTarget.value) }></input>
            <p>Life: { life }</p>
          </div>
          <button onClick={(e) => 
            {
              console.log(life)
              setScore(life)
              e.currentTarget.style.display = 'none'
            }}>Add Rank</button>
        </form>

        <div className='leaderboard'>
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
                <span>{ life.name }</span>
                <span>{ life.score }</span>
              </div>
            </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AddRank
