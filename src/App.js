import React from 'react';
import PokeCard from './PokeCard'
import './PokeCard.css';
import PokeDex from './PokeDex';

function App() {
  return (
    <div className="">
     <PokeDex/>
     {/* <PokeCard id={4} name='Charmander' type='Fire' Exp={62}/> */}
    </div>
  );
}

export default App;
