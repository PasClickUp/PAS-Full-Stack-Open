import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Baaqi', age: 7 },
      { name: 'Fulaan', age: 9 },
      { name: 'Walad', age: 11 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState, otherState)
  const switchNameHandler = () => {
    // console.log('Was Clicked')
    // state.persons[0] = 'Baaqi is my brother'
    setPersonsState({
      persons: [
        { name: 'Baaqi my brother', age: 7 },
        { name: 'Fulaan', age: 9 },
        { name: 'Walad', age: 11 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'M a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: eating</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this make sense now?'))
  );

}

export default App;