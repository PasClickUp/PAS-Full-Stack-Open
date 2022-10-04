const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old, your country is {props.country}.
      </p>
    </div>
  )
}

const footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const country = 'Nigeria'
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} country='Togo' />
      <Hello name={name} age={age} country={country} />
      <Hello age='54' country='Kenya' />
      <footer />
    </div>
  )
}
export default App