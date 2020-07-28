import React from 'react';
// import PokeCard from './PokeCard'
import './PokeCard.css';
import PokeDex from './PokeDex';

function App() {
  return (
    <div className="PokeCard">
     <PokeDex/>
     {/* <PokeCard id={4} name='Charmander' type='Fire' Exp={62}/> */}
    </div>
  );
}
//I will be adding style next

export default App;
