//React
import React from "react";
//React-Router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Pages
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Discover from "./components/Discover/Discover";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
//Styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Join/>
    </div>
  );
}

export default App;
