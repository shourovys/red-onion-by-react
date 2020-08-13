import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import CartContextProvider from './Component/UseCart/Cart';
import Login from './Component/Login/Login';
import { AuthContextProvider } from './Component/Login/Auth';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <AuthContextProvider>
          <Router>
            <Switch>

              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>

            </Switch>
          </Router>
        </AuthContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
