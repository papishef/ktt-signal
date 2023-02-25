import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import logoImg from "../../../images/Logo.png"
import fbIcon from "../../../images/social-fb.png"
import igIcon from "../../../images/social-ig.png"
import inIcon from "../../../images/social-in.png"
import twitterIcon from "../../../images/social-twitter.png"
import ytIcon from "../../../images/social-yt.png"
import { BlueGradientCurvedBtn } from "../Buttons/Buttons"
import { InputNewsLetter } from "../Input/Input"

const iconImages = [fbIcon, igIcon, inIcon]
const iconImages2 = [twitterIcon, ytIcon]

export const KttFooter = props => {
    return (
        <div className="kttfooter">
            <div className="kttfooter-inner">
                <div className="for-small-screens">
                    <img src={logoImg} alt="KTT-SIGNAL" className="logoImg" />
                    
                    <div>

                       {iconImages.map(iconImage => {
                            return (
                                <Link to="" className="social-link">
                                    <span className="social">
                                        <img src={iconImage} alt="KTT-SIGNAL" className="iconImg" /> 
                                        <span> @kttsignal</span>
                                    </span>
                                </Link>
                            )
                        })}

                        <p></p>
                        {iconImages2.map(iconImage => {
                            return (
                                <Link to="" className="social-link">
                                    <span className="social">
                                        <img src={iconImage} alt="social icon" className="iconImg" /> 
                                        <span> @kttsignal</span>
                                    </span>
                                </Link>
                            )
                        })}

                    </div>
                </div>  
            </div>

            <div className="footer-right">
                <div className="newsletter">
                    <InputNewsLetter />
                    <BlueGradientCurvedBtn title="Subscribe" />
                </div>
                <h3>Subscribe to our newsletter</h3>

                <p>&copy; KTTsignals {new Date().getFullYear()}. Powered by &nbsp; 
                    <Link to="https:bluespiders.tech" target="_blank">
                        Bluespiders Tech
                    </Link> 
                </p>
                
            </div>
        </div>
    )
}
