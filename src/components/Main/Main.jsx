import React from "react";
import "../Main/Main.scss";
import girl from "../../assets/img/landing-page-girl.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
    <Header/>
      {/* <div className="red_circle"></div>
        <div className="blue_circle"></div> */}
      <section className="main_section">
        <div className="girl_div">
          <img className="girl" src={girl}></img>
        </div>
        <div className="info_div">
          <h2 className="claimer">Feel The Music</h2>
          <p className="text_claimer">Stream over 20 thousand songs with one click</p>
          <button className="btn_join">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/join'>Join Now</Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
