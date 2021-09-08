import  React from 'react';

class Pokemon  extends React.Component{
  render(){
    const {dataPokemon}=this.props;
    const {name,type, averageWeight, image } = dataPokemon;
    const {value, measurementUnit:text}=averageWeight;
    return(
    <div className = "card-Pokemon">
      <img src={image} alt={name}/>
      <p>{name}</p>
      <p>{type}</p>
      <p>Average weight:{value+text}</p>
    </div>
    );
  }
}

export default Pokemon;