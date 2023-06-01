import ColorBox from './ColorBox';
import './App.css';

function App() {
  const name = true;
  const age = '18'
  const lists = ['red', 'green', 'blue']
  return (
    <div>
      {!name && <p>Freze</p>}
      {lists && 
        <h1><ColorBox color = "red" />
          {lists.map(list=>{
            return <ul>{list}</ul>
          })}
        </h1>} 
    </div>
  );
}

export default App;
