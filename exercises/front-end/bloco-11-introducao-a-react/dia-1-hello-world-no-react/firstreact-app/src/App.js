import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const array = ['comer', 'rezar', 'amar']
function App() {
  return (
    <div className='App'>
      {Task('dormir')}
      {array.map((compromisso) => Task(compromisso))}
    </div>
  );
}

export default App;
