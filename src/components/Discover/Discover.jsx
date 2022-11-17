import React from "react";
import "../Discover/Discover.scss";
import mic from "../../assets/img/microphone.svg";
import covers from "../../assets/img/covers.jpg";
import albums from "../../assets/img/albums.svg";
import more from "../../assets/img/more.svg";


const Discover = () => {
  return (
    <section className="discover_sec ">
      <div className="global_div gap-5">
        <div className="discover_div">
          <h3 className="discover_title">Discover new music</h3>
          <div className="cards_div gap-3">
            <div className="car">
              <div className="info_card">
                <img className="icon" src={mic}></img>
                <p>Charts</p>
              </div>
            </div>
            <div className="car">
              <div className="info_card">
                <img className="icon" src={albums}></img>
                <p>Albums</p>
              </div>
            </div>
            <div className="car">
              <div className="info_card">
                <img className="icon" src={more}></img>
                <p>More</p>
              </div>
            </div>
          </div>
          <p className="text">
            By joining you coan benefit by listening to the latest albums
            released.
          </p>
        </div>
        <div className="covers_div">
          <img className="cover" src={covers}></img>
        </div>
      </div>
    </section>
    
  );
};

export default Discover;
