import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Static/Navbar/Navbar';
import Home from './Pages/Home/Home';
import DetalhesProduto from './Components/detalhesProduto/DetalhesProduto';
import { Provider } from 'react-redux';
import store from './Store/store';
import CadastroProduto from './Components/CadastroProduto/CadastroProduto';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/produto/:id">
                <DetalhesProduto />
              </Route>
              <Route path="/cadastrarProduto">
                <CadastroProduto />
              </Route>
            </div>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
