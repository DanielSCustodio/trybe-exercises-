import  React from 'react';
import colors from './data';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state={
    searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);   //Dando permissão a função para acessar  o  this da classe
  }

  handleChange(event){
    //Não pode atribuir valor direto , tem que usar o this.setState
    this.setState({searchText: event.target.value})
  }
  
  render(){
    const {searchText} = this.state;
    return (
          <div className="App">
            <header className="App-header">
              <input
              value={searchText} 
              type='text' 
              onChange={this.handleChange}
              /> 
              <ul>
            {  
            colors
            .filter(({name})=> name.includes(searchText)  )                                                  //{name} destructing de colors
            .map(({name, hex})=>(                                                                                      //{name, hex} destructing de colors
              <li key={hex}>
                <div className="color-display" style={{background: hex}} />
                {name}</li>
            ))}
            </ul>
            </header>
          </div>
        );
  }
}

export default App;
