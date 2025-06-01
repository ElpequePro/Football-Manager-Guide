import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PositionPage from './components/Positions/PositionPage';
import Home from './components/Home';
import StylePage from './components/Styles/StylePage';
import InstructionPage from './components/Instructions/InstructionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/football-manager-guide/" element={<Home />} />
        <Route path="/football-manager-guide/instructions" element={<InstructionPage />} />
        <Route path="/football-manager-guide/styles" element={<StylePage />} />
        <Route path="/football-manager-guide/:position" element={<PositionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
