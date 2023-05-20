import './App.css';
import Main from './pages/main/Main';
import Create from './components/Create';
import Join from './components/Join';
import Brackets from '../src/components/Brackets';
import { Routes, Route, Switch } from 'react-router-dom';
import Counter from "../src/abi/bracket.json";
import WinnerPage from './components/WinnerPage';
import BracketTwo from './components/Bracket2';
import BracketThree from './components/Bracket3';
import Bracket2 from './components/Bracket2';
//import Bracket3 from './components/Bracket3';

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
          <Route path="/bracket_Two" element={<Bracket2/>} />
          {/* <Route path='/bracket_Three' element={<Bracket3/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
