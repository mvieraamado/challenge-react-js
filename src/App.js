import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchContainer from './components/SearchContainer/SearchContainer';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MyNavBar from './components/NavBar/NavBar';
import HeroProvider from './context/HeroContext/HeroContext';

function App() {
  return (
    <div className="App">
      <HeroProvider>
          <Router> 
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/search" element={<><MyNavBar/><SearchContainer /></>}/>
              <Route path="/" element={<><MyNavBar/><Home /></>}/>
            </Routes>
        </Router>
      </HeroProvider>
    </div>  
  );
}
export default App;
