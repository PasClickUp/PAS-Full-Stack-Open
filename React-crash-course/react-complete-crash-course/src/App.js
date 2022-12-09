import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'M a React App</h1>
      <p>This is really working!</p>
      <Person name="Baaqi" age="7" />
      <Person name="Fulaan" age="9">My Hobbies: eating</Person>
      <Person name="Walad" age="11" />
    </div>
    // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this make sense now?'))
  );
}

export default App;