import React from "react";
import "../Join/Join.scss";
import Footer from "../Footer/Footer";
const Join = () => {
  return (
    <section className="join_section">
        <div className="red"></div>
        <div className="blue"></div>
      <div className="join_div gap-5">
        <div className="infor_div">
          <div className="red1"></div>

          <div className="blue2"></div>
          <h2 className="join_text">
            Join the <span className="fun">fun</span>
          </h2>
        </div>
        <div className="form_div">
          <div className="background_div">
            <form className="general_form">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Mail:{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <div class="mb-3 ">
                <label for="exampleInputPassword1" class="form-label">
                  Password:{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                ></input>
              </div>
              <button type="submit" class="btn btn-primary button_join">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    
  );
};
export default Join;
