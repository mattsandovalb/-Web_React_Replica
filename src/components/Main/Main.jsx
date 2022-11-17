import React from "react";
import "../Main/Main.scss"
import girl from "../../assets/img/landing-page-girl.png"


const Main = () =>{
    return(
        <main>
        <div className="magenta"></div>
        <div className="blue"></div>
            <section className="main_section">
                <div className="girl_div">
                    <img className="girl" src={girl}></img>
                </div>
                <div className="blue2"></div>
                <div className="info_div">
                    <h2>Feel The Music</h2>
                    <p>Stream over 20 thousand songs with one click</p>
                    <button><a>Join Now</a></button>
                </div>
            </section>
        </main>
    );
}

export default Main;