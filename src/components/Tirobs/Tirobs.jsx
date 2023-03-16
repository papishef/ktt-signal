import React from "react"
import { MenuBarTirobs } from "../UI/Menu/Menu"
import "./Tirobs.css"
import Slider from '../UI/Slider/Slider'
import { tirobsSlideImgs } from "../UI/Slider/sliderContents"


const Tirobs = () => {
    return (
        <div>
            <MenuBarTirobs />
            <div className="top-container-tirobs">
                <Slider slideImgs={tirobsSlideImgs} />
            </div>
            <div id="product" className="product">
                <h2>Our Product</h2>
                <p>Tirob’s NDS is non-toxic and 300 times more effective than 
                commercial bleach and does not release toxic fumes into the air. 
                It kills off germs, eliminates odours and can be used safely in Homes, 
                Schools, Hotels, Hospitals, Saloons, wounds dressing and skin conditions.</p>

                <div className="product-pictures">
                    
                    <div className="product-picture-one">
                    </div>
                

                    <div className="product-picture-two">
                    </div>
          
                </div>

            </div>

        </div>
    )
}

export default Tirobs