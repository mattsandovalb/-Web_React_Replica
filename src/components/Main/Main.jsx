import React from "react";
import "../Main/Main.scss";
import girl from "../../assets/img/landing-page-girl.png";

const Main = () => {
  return (
    <main>
      <div className="red_circle"></div>
        <div className="blue_circle"></div>
      <section className="main_section">
        <div className="girl_div">
          <img className="girl" src={girl}></img>
        </div>
        <div className="blue_circle2"></div>
        <div className="info_div">
          <h2 className="claimer">Feel The Music</h2>
          <p className="text_claimer">Stream over 20 thousand songs with one click</p>
          <button className="btn_join">
            <a>Join Now</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
