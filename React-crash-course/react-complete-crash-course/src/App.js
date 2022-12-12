import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Baaqi', age: 7 },
      { name: 'Fulaan', age: 9 },
      { name: 'Walad', age: 11 }
    ],
    otherState: 'some other value'
  };


  switchNameHandler = (newName) => {
    // console.log('Was Clicked')
    // state.persons[0] = 'Baaqi is my brother'
    this.setState({
      persons: [
        { name: newName, age: 7 },
        { name: 'Fulaan', age: 9 },
        { name: 'Walad', age: 18 }
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Imraan', age: 17 },
        { name: event.target.value, age: 9 },
        { name: 'Walad', age: 26 }
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'M a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Baaqi Mi')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'My brother Baaqi!')}
          changed={this.nameChangedHandler}>My Hobbies: eating</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this make sense now?'))
    );

  }

}

export default App;