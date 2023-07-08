import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import './App.css';



function App(){
  return (
  <Router>
  <Route path="/" exact component={Home} />
  <Route path="/:id" component={UserDetails } />
    </Router>
  );
}

export default App;