import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Gerard', age: 23 },
      { name: 'Mary', age: 23 },
      { name: 'Sara', age: 23 },
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Mary', age: 23 },
        { name: 'Sara', age: 23 },
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Manu', age: 24 },
        { name: event.target.value, age: 23 },
        { name: 'Sara', age: 23 },
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi Im Gerard</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Moemeister')} changed={this.nameChangedHandler}>My Hobbies: Sleep</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
 
          </div> : null
        }
      </div>
    );

  }
}

export default App;


