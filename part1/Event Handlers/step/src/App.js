import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  // const handleClick = () => {
  //   console.log('clicked')
  // }

  // return (
  //   <div>
  //     <div>{counter}</div>
  //     <button onClick={handleClick}>
  //       plus
  //     </button>
  //   </div>
  // )
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => console.log('clicked')}>
        plus
      </button>
    </div>
  )

}

export default App