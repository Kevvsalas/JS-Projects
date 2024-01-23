import './App.css';
import Board from './Components/Board';
import Score from './Components/Score';

function App() {
  return (
    <div className="App">
      <main>
        <Score></Score>
        <Board></Board>
        <Score></Score>

      
      </main>
    </div>
  );
}

export default App;
