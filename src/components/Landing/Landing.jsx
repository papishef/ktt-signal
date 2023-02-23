import React from "react"
import "./Landing.css"
import { ParentMenu } from "../UI/Menu/Menu"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom";
import kttImage from "../../images/ktt-welcome.png"
import tirobsImage from "../../images/spray can.png"


const Landing = () => {
    return (
        <div className="container">
            <ParentMenu />

            <div className="landing-wrapper">

                <h2>Dive into our world of possibilities in Health and High-Tech Lifestyle. 
                Select an option below to start your journey with us.</h2>

                <Grid container mt={2}>
                    <Grid item xs={12} md={6} p={5}>
                        <div class="circle">
                            <Link className="welcome-links" to="/ktt-signal">
                                <img src={kttImage} alt='KTT Welcome' />
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} p={5}>   
                        <div class="circle">
                            <Link className="welcome-links" to="/tirobs">
                                <img src={tirobsImage} alt='Tirobs Welcome' />
                            </Link>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>

    )
}

export default Landing