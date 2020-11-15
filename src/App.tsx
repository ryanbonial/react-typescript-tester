import React, { useState } from 'react';

import './App.css';

function App() {
  const fetchOptions = { headers: { 'Accept': 'application/json' }};
  const [dadJoke, setDadJoke] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const getRandomDadJoke = async () => {
    const dadResp = await fetch('/api/dad-joke/', fetchOptions);
    // const dadResp = await fetch('https://icanhazdadjoke.com', fetchOptions);
    const dadJokeResults = await dadResp.json();
    console.log(dadJokeResults)
    setDadJoke(dadJokeResults.joke);
  }

  const searchDadJoke = async () => {
    const dadResp = await fetch(`/api/dad-joke/search?term=${searchTerm}`, fetchOptions);
    // const dadResp = await fetch('https://icanhazdadjoke.com', fetchOptions);
    const dadJokeResults = await dadResp.json();
    console.log(dadJokeResults)
    setDadJoke(dadJokeResults.joke);
  }

  return (
    <div className="App">
        <h3>Typescript, yarn, and _redirects</h3>
        <p>{dadJoke}</p>
        <button onClick={() => getRandomDadJoke()}>Click for a random dad joke via proxy</button>
        <hr />
        <label htmlFor="joke">
          Joke Search Term
          <input type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        </label>
        <div>
        <button onClick={() => searchDadJoke()}>Click for a dad joke via proxy about {searchTerm}</button>
        </div>
    </div>
  );
}

export default App;
