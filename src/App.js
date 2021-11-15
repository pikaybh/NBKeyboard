import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import Career from './pages/Career';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/career' element={<Career/>} />
          <Route path='/testpage' element={<TestPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
