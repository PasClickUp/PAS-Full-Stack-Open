const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Part 1: {props.part1} {props.exercises1}</p>
      <p>Part 2: {props.part2} {props.exercises2}</p>
      <p>Part 3: {props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3>Total Number of exercises is {props.exercises1 + props.exercises2 + props.exercises3}</h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>

      {/* <p>{part1}</p> */}
    </div>
  )
}

export default App