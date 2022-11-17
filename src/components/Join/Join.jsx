import React from "react";
import "../Join/Join.scss";


const Join = () =>{
    return(
        <section>
        <div className="join_div">
            <div className="infor_div">
                <div className="red1">

                </div>

                <div className="blue2">

                </div>
                <h2>Join the <span>fun</span></h2>
            </div>
            <div className="form_div">
                    <div className="background_div">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mail: </label>
                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label">Password: </label>
                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <button type="submit" class="btn btn-primary">Join Now</button>
                        </form>
                        
                    </div>

            </div>
        </div>


        </section>
    )
}
export default Join;