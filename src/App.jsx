import React from 'react';
import './App.css';
import Container from './Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatPage from './CatPage';
import MostSearched from "./MostSearched";



function App() {

  return (
 
    <Router basename={"https://cat-wiki-zlzc.onrender.com/"}>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/cat/:catName" element={<CatPage />} />
        <Route path="/most_searched" element={<MostSearched/>}/>
      </Routes>
    </Router>

  );
}

export default App;