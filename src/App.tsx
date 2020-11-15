import React, { useState } from 'react';

import './App.css';

function App() {
  const fetchOptions = { headers: { 'Accept': 'application/json' }};
  const [dadJoke, setDadJoke] = useState('');
  const getDadJoke = async () => {
    // const dadResp = await fetch('/api/dad-joke/search?page=1&limit=20&term=cake', fetchOptions);
    const dadResp = await fetch('https://icanhazdadjoke.com/search?page=1&limit=20&term=apple', fetchOptions);
    const dadJokeResults = await dadResp.json();
    console.log(dadJokeResults.results)
    setDadJoke(dadJokeResults.results[0].joke);
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
