import React, { useState } from 'react';

import './App.css';

function App() {
  const fetchOptions = { headers: { 'Accept': 'application/json' }};
  const [dadJoke, setDadJoke] = useState('');
  const getDadJoke = async () => {
    const dadResp = await fetch('/api/dad-joke', fetchOptions);
    // const dadResp = await fetch('https://icanhazdadjoke.com', fetchOptions);
    const dadJokeResults = await dadResp.json();
    console.log(dadJokeResults)
    setDadJoke(dadJokeResults.joke);
  }

  return (
    <div className="App">
        <h3>Typescript and yarn</h3>
        <p>{dadJoke}</p>
        <button onClick={() => getDadJoke()}>Click for dad joke via proxy</button>
    </div>
  );
}

export default App;
