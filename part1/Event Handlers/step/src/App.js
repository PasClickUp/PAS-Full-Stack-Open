const Hello = ({ name, age, love }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}, you really love {love}.</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const love = 'sleeping'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="YOU" age={26 + 10} love={love} />

      <Hello name={name} age={age} love='playing' />
    </div>
  )
}

export default App;