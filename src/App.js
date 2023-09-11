import React from 'react';
import logo from './logo.svg';
import Main from "./Components/Main";
import './App.css';
import Header from './Components/header';

function App() {
  return (
    <div className='MainDiv'>
    <Header />
    <div className="App">
      <Main />      
    </div>
    </div>
  );
}

export default App;
