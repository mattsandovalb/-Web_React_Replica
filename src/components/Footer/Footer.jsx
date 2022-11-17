import React from "react";
import twitter from "../../assets/img/twitter.svg";
import facebook from "../../assets/img/facebook.svg";
import "../Footer/Footer.scss"

const Footer = () =>{
    return(
        <footer className="general_footer">
            <div className="footer_div">
                <div className="about_div gap-3">
                    <p>Abaout Us</p>
                    <p>Contact</p>
                </div>
                <div className="social_div gap-3">
                    <div className="social">
                        <img className="sc" src={twitter}></img>
                        <p>Twitter</p>
                    </div>
                    <div className="social">
                        <img className="sc" src={facebook}></img>
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;