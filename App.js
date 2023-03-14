import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/pagina1' Component={Pagina1}/> 
          <Route path='/pagina2' Component={Pagina2}/>
      </Routes>

    </div>
  );
}

export default App;
