import React from "react";
import logo from "../../assets/img/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../Header/Header.scss";
import Discover from "../Discover/Discover";

const Header = () => {
  return (
      <header className="position-static">
        <nav class=" general_nav d-flex justify-content-around ">
          <div class=" logo_div justify-content-center align-items-center gap-3">
            <img src={logo}></img>
            <h2>SoundWave</h2>
          </div>
          <div class="navbar_div d-flex justify-content-center">
            <ul className="d-flex gap-5">
              <li class="nav-item">
                <p>Discover</p>
              </li>
              <li class="nav-item">
                <p>Join</p>
              </li>
            </ul>
          </div>
        </nav>
      </header>

  );
};

export default Header;
