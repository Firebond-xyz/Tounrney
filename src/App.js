import './App.css';
import Main from './pages/main/Main';
import Create from './components/Create';
import Join from './components/Join';
import Brackets from '../src/components/Brackets';
import { Routes, Route, Switch } from 'react-router-dom';
import Counter from "../src/abi/bracket.json";
import WinnerPage from './components/WinnerPage';

const counterAddress = "0xdF3B919239A65047A1C0eCF40D8e8C9621A94459";

console.log(counterAddress, "Counter ABI: ", Counter.abi);

function App() {


  return (
    
    <div className="App">
     
     <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/join" element={<Join />} />
          <Route path="/brackets" element={<Brackets />} />
          <Route path="/winner" element={<WinnerPage/>} />
        </Routes>
    </div>
  );
}

export default App;
