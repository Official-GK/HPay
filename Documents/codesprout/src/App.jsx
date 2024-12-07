import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CodeEditor from './components/CodeEditor';
import './styles/app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/code" element={<CodeEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 