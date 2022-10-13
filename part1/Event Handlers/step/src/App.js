import { useState } from 'react'
// const Display = ({ counter }) => <div>{counter}</div>

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text} </button>

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />

//       <Button onClick={increaseByOne} text="Increase" />
//       <Button onClick={decreaseByOne} text="Decrease" />
//       <Button onClick={setToZero} text="Restart" />
//     </div>
//   )

// }

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}

export default App