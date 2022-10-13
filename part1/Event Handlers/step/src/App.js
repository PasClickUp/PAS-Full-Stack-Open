import { useState } from 'react'
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
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
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={decreaseByOne}>
        decrease
      </button>
      <button onClick={setToZero}>
        Restart
      </button>
    </div>
  )

}

export default App