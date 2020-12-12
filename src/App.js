import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Gerard', age: 23 },
      { name: 'Mary', age: 23 },
      { name: 'Sara', age: 23 },
    ],
    otherState: 'Some other value'
  });

  const switchNameHandler = () => {
    // DONT DO THIS: personsState.persons[0].name='Gerardo Mira'
    setPersonsState({
      persons: [
        { name: 'Gerardo Mira', age: 24 },
        { name: 'Mary', age: 23 },
        { name: 'Sara', age: 23 },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi Im Gerard</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Sleep</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} ></Person>
    </div>
  );
}

export default App;


