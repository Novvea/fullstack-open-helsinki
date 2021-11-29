import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = (props) => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

const Statistics = (props) => {
  if (props.answers.length === 0) {
    return (
        <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={props.answers.length}/>
          <StatisticLine text='average' value={props.myAverage}/>
          <StatisticLine text='positive' value={props.myPositive}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [answers, setAnswers] = useState([])

    const handleGoodClick = () => {
        setGood(good + 1)
        setAnswers(answers.concat(1))
    }

    const handleNeutralClick = () => {
      setNeutral(neutral + 1)
      setAnswers(answers.concat(0)) 
    }

    const handleBadClick = () => {
      setBad(bad + 1)
      setAnswers(answers.concat(-1))
    }

    let myAverage = answers.reduce((a,b) => a + b, 0) / answers.length
    myAverage = myAverage.toFixed(2)
    let myPositive = answers.filter(element => element === 1).length / answers.length
    myPositive = myPositive.toFixed(2) + ' %'

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} answers={answers} myAverage={myAverage} myPositive={myPositive}/>
    </div>
  );
}

export default App;
