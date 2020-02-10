import React, {useState, useEffect}  from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Person from './components/person.js'

const AppWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1.5%;
`;

const AppTitle = styled.h1 `
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

const [people, setPerson] = useState([]);
useEffect(() => {
  async function fetchData () {
    try {
      const personContainer = await axios.get(
        "https://swapi.co/api/people"
      );
      console.log(personContainer);

      setPerson(personContainer.data.results);

    } catch(err) {
      console.log(err);
    }
  }
  fetchData();
}, [])


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppWrapper>
    <AppTitle>React Wars</AppTitle>
    {people.map(char => {
      return (
        <Person
          name = {char.name}
          gender = {char.gender}
          eye_color = {char.eye_color}
          height = {char.height}
          mass = {char.mass}
          />
      )
    })}
    </AppWrapper>
  );

  // return null;
}

export default App;
