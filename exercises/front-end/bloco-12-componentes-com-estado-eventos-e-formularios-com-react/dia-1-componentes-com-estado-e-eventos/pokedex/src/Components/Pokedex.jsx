import  React from 'react';
import Pokemon from './Pokemon';


class Pokedex  extends React.Component{
  render(){
    const {listPokemon} = this.props;
    return(
  <section className ="pokedex">
    {listPokemon.map((pokemon)=> <Pokemon key={pokemon.id} dataPokemon={pokemon}/>)}
  </section>
    );
  }
}

export default Pokedex;