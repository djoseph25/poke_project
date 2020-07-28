import React, { Component } from 'react';
const Images = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class PokeCard extends Component {
  render() { 
    
    let imgSrc = `${Images}${this.props.id}.png`
  return (<div>
    <h1>{this.props.name}</h1>
    <img src={imgSrc}/>
  <h4>Type: {this.props.type}</h4>
  <h6>Base_Exp: {this.props.Exp}</h6>
    </div> 
     )
  }
}
 
export default PokeCard;
