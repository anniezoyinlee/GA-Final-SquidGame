import React, {useState}  from 'react'
import firebase from '../firebase'

const AddName = () => {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function onSubmit(e) {
    e.preventDefault()

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
    <form onSubmit={onSubmit}>
      <div className='nameForm'>
        <h4>Enter Your Name</h4>
        <label>Your Name</label>
        <input type='text' value={name} onChange={e => setName(e.currentTarget.value)}></input>
        <label>Score</label>
        <input type='number'value={score} onChange={e => setScore(e.currentTarget.value)}></input>
      </div>
      <button>Add Rank</button>
    </form>
  )
}

export default AddName