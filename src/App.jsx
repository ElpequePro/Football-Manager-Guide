import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PositionPage from './components/PositionPage';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/football-manager-guide/" element={<Home />} />
        <Route path="/football-manager-guide/:position" element={<PositionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
