import { CardSingle } from './Cards';
import './App.css';

function App() {
  return (
    <div className="App">
        <CardSingle
    id={`S_A`}
    card={ {
        suit: `S`, 
        rank: `A`, 
        backColor: `#1A1919`,
    } }
      />
    </div>
  );
}

export default App;
