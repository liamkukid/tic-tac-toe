import Marek_yoga from './Marek_yoga.jpg';
import Marek_walk from './Marek_walk.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Marek_yoga} className="Marek_yoga" />
        <img src={Marek_walk} className="Marek_walk" />
        <p>
          Marek's blog.
        </p>
      </header>
    </div>
  );
}

export default App;
