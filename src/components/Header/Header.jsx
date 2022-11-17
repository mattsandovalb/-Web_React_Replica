import React from "react";
import logo from "../../assets/img/logo.png";

import "../Header/Header.scss";

const Header = () => {
  return (
    <header>
      <nav class=" general_nav d-flex justify-content-around">
        <div class=" logo_div">
          <img src={logo}></img>
          <h1>SoundWave</h1>
        </div>
        <div class="navbar_div d-flex justify-content-center ">
          <ul className="d-flex gap-5">
            <li class="nav-item">
              <p>Hola</p>
            </li>
            <li class="nav-item">
              <p>Mundo</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
