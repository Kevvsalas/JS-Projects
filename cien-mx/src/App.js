import './App.css';
import Board from './Components/Board';
import Score from './Components/Score';

function App() {
  return (
    <div className="App">
      <main>
        <Score className='score-total'></Score>
        <Score className='score-team1'></Score>
        <Board></Board>
        <Score className='score-team2'></Score>

      
      </main>
    </div>
  );
}

export default App;
