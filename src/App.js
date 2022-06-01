// import Monsters from './Components/Monsters';
import StringMaker from './Components/StringMaker/StringMaker';
import Monsters from './Components/Monsters/Monsters';
import Wordle from './Components/Wordle/Wordle';

import './App.css';

function App() {
  return (
    <div className="App">
      <StringMaker />
      <Monsters />
      <Wordle />
    </div>
  );
}

export default App;
