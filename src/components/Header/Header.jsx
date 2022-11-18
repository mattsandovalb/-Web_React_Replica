import React from "react";
import logo from "../../assets/img/logo.png";
import {Link} from "react-router-dom";
import "../Header/Header.scss";



const Header = () => {
  return (
      <header className="position-static">
        <nav class=" general_nav d-flex justify-content-around ">
          <div class=" logo_div justify-content-center align-items-center gap-3">
            <img className="logo" src={logo}></img>
            <Link style={{textDecoration: 'none'}} to="/"><h2 className="sound">SoundWave</h2></Link>
          </div>
          <div class="navbar_div d-flex justify-content-center">
            <ul className="d-flex gap-5">
              <li class="nav-item">
                <Link style={{textDecoration: 'none', color: 'white'}} to="/discover">Discover</Link>
              </li>
              <li class="nav-item">
              <Link style={{textDecoration: 'none', color: 'white'}} to="/join">Join</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

  );
};

export default Header;
