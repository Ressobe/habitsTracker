import './App.css';
import { useState } from 'react';
import Habits from './Habits';

const DATABASE_SERVER = 'http://localhost:3001/';

function getHabits(type) {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(`${DATABASE_SERVER}${type}`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      response.json();
    })
    .then((data) => {})
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

function App() {
  const [goodHabitsData, setGoodHabitsData] = useState(['abc', 'efg']);
  const [badHabitsData, setBadHabitsData] = useState(['dbf']);

  return (
    <div>
      <Habits id="good-habits" data={goodHabitsData} />
      <Habits id="bad-habits" data={badHabitsData} />
    </div>
  );
}

export default App;
