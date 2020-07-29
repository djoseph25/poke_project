import React, { Component } from 'react';
import './PokeCard.css'
const Images = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class PokeCard extends Component {
  render() { 
  const imgSrc = `${Images}${this.props.id}.png`

  return (
  <div className='PokeCard'>
  <h1 className='PokeCard-title'>{this.props.name}</h1>
  <img src={imgSrc} />
  <div className='PokeCard-data'>Type: {this.props.type}</div>
  <div className='PokeCard-data'>Exp: {this.props.Exp}</div>
  </div> 
     )
  }
}
 
export default PokeCard;
