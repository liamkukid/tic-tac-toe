import Marek_yoga from './Marek_yoga.jpg';
import Marek_walk from './Marek_walk.jpg';
import './App.scss';
import MyButton from './MyButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
      setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Marek_yoga} className="Marek_yoga" alt="Marek_yoga" />
        <img src={Marek_walk} className="Marek_walk" alt="Marek_walk" />
        <p>
          Marek's blog.
        </p>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
