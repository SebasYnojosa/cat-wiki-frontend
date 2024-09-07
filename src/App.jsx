import React from 'react';
import './App.css';
import Container from './Container';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CatPage from './CatPage';
import MostSearched from "./MostSearched";



function App() {

  return (
 
    <Router>
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route exact path="/cat/:catName" element={<CatPage />} />
          <Route exact path="/most_searched" element={<MostSearched />}/>
        </Routes>
    </Router>

  );
}

export default App;