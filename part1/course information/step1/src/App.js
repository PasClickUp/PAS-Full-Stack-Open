const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <p>Fundamentals of React {exercises1}</p>
      <p>Using props to pass data {exercises2}</p>
      <p>State of a component {exercises3}</p>
    </div>
  )
}

const Total = () => {
  return (
    <div>
      <h3>Total Number of exercises is {exercises1 + exercises2 + exercises3}</h3>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App