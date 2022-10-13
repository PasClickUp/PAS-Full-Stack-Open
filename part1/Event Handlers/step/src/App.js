import { useState } from 'react'
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />

      <Button onClick={increaseByOne} text="Increase" />
      <Button onClick={decreaseByOne} text="Decrease" />
      <Button onClick={setToZero} text="Restart" />
    </div>
  )

}

export default App