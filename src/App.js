
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Indian from './pages/Indian';
import Chinese from './pages/Chinese';
import American from './pages/American';



function App() {
  return (
   
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes/>} />
     
      <Route path="/indian" element={<Indian/>} />
      <Route path="/chinese" element={<Chinese/>} />
      <Route path="/american" element={<American/>} />

    </Routes>
    </div>
   
  
  );
}

export default App;
