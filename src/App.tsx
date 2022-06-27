import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Static/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
