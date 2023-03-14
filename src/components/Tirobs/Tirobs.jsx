import React from "react"
import { MenuBarTirobs } from "../UI/Menu/Menu"
import "./Tirobs.css"
import Slider from '../UI/Slider/Slider'
import { tirobsSlideImgs } from "../UI/Slider/sliderContents"


const Tirobs = () => {
    return (
        <div>
            <MenuBarTirobs />
            <div className="top-container">
                <Slider slideImgs={tirobsSlideImgs} />
            </div>
        </div>
    )
}

export default Tirobs