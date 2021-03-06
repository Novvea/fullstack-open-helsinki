import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))

  const mostVotesIndex = vote.reduce((indexWithMostVotesSoFar, currentValueInArray, index, voteArray) => {
    if (currentValueInArray > voteArray[indexWithMostVotesSoFar]) {
      return index
    } 
    return indexWithMostVotesSoFar
  }, 0)

  const handleSelectClick = () => {
    if (selected > 5) {
      setSelected(0)
    } else {
    setSelected(selected + 1)
    }
  }

  const handleVoteClick = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    handleSelectClick()
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={handleVoteClick} text = 'vote'/>
      <Button handleClick={handleSelectClick} text = 'next anecdote'/>
      <h1>Anecdote with most votes</h1>
       <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {vote[mostVotesIndex]} votes</p>
    </div>
  )
}

export default App;
