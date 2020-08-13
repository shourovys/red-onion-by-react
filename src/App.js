import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import CartContextProvider from './Component/UseCart/Cart';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Home></Home>
      </CartContextProvider>
    </div>
  );
}

export default App;
