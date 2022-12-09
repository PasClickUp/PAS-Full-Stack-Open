import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  let state = {
    persons: [
      { name: 'Baaqi', age: 7 },
      { name: 'Fulaan', age: 9 },
      { name: 'Walad', age: 11 }
    ]
  }

  let switchNameHandler = () => {
    console.log('Was Clicked')
  }
  return (
    <div className="App">
      <h1>Hi, I'M a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>My Hobbies: eating</Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
    // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this make sense now?'))
  );
}

export default App;