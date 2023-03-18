import React from "react"
import "./Landing.css"
import { ParentMenu } from "../UI/Menu/Menu"
import { Grid } from "@mui/material"
import kttImage from "../../images/ktt-welcome.png"
import tirobsImage from "../../images/spray can.png"
import Blob from "../UI/Blob/Blob";


const Landing = () => {
    return (
        <div className="container">
            <ParentMenu />

            <div className="landing-wrapper">

                <h2>Dive into our world of possibilities. 
                Select an option to start your journey with us.</h2>

                <Grid container mt={2}>
                    <Grid item xs={12} md={6} p={5}>
                        <Blob link='/ktt-signal' bgImage={kttImage} altText='KTT Welcome' title='KTT Signal Page' />
                    </Grid>
                    <Grid item xs={12} md={6} p={5}> 
                        <Blob link='/tirobs' bgImage={tirobsImage} altText='Tirobs Welcome' title='Tirobs Page' /> 
                    </Grid>
                </Grid>

            </div>
        </div>

    )
}

export default Landing