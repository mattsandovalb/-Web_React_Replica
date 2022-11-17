//React
import React from 'react';
//React-Router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Pages
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Join from './components/Join/Join';
//Styles
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
