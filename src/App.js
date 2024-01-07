
import {Home} from './components/Home';
import { Destination } from './components/Destination';
import { Nav } from './components/Nav';
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';
function App() {
  let state 
  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
        </Routes> 
      </HashRouter>
    </div>
  );
}

export default App;
