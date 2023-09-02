import REPL from './components/REPL'
import './App.css';

/**
 * This is the highest level component!
 */
function App() {
  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
      </p>
      <REPL />      
    </div>
  );
}

export default App;
