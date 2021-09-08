import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './data';


function App() {
  return (
    <div className="App">
      <Pokedex listPokemon={pokemons}/>
    </div>
  );
}

export default App;
