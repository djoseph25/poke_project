import React, { Component } from 'react';
import PokeCard from "./PokeCard"
import './PokeCard.css'
import './PokeDex.css'

class PokeDex extends Component {
    static defaultProps ={

        Pokemon:[
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render() { 
        return ( 
            <div className='Pokedex'>
                <h1 style={{textAlign:'center'}}>Pokedex!</h1>
                <div className='Pokedex-Card'>
                {this.props.Pokemon.map((poke) => (
                    <PokeCard id={poke.id} name={poke.name}
                    type={poke.type} Exp={poke.base_experience}
                    />
                   )
                 )
                }
               </div>
            </div>
         );
    }
}
 
export default PokeDex;