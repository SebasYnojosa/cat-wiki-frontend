import React from 'react';
import './App.css';
import Container from './Container';

import { HashRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import CatPage from './CatPage';
import MostSearched from "./MostSearched";



function App() {

  return (
 
    <Router>
        <Switch>
          <Route exact path="/" element={<Container />} />
          < Route exact path="/cat/:catName" element={<CatPage />} />
          <Route exact path="/most_searched" element={<MostSearched/>}/>
        </Switch>
    </Router>

  );
}

export default App;