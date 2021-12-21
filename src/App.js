import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/404';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import Career from './pages/Career';
import HistoryPage from './pages/HistoryPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import NoticePage from './pages/NoticePage';
import ReviewPage from './pages/ReviewPage';
import QnAPage from './pages/QnAPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/intro' element={<IntroPage />} />
          <Route path='/career' element={<Career />} />
          <Route path='/history' element={<HistoryPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/notice' element={<NoticePage />} />
          <Route path='/review' element={<ReviewPage />} />
          <Route path='/questions' element={<QnAPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
