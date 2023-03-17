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

            <div className="product-desc">
                <p>Tirob’s NDS is made of substances in our white blood cells that fight infection and it's as effective as bleach. 
                Unlike typical cleaners, Tirob’s NDS is gentle enough for cleaning things like baby gear & pet toys without needing 
                to rinse. It is approved by the World Health Organization for fight against Covid-19.</p>
                <p>The antimicrobial activity of Tirob’s NDS is not as that of a conventional antibiotic but rather an agent that is 
                directly toxic to microbial cells, including many gram-positive and gram-negative bacteria (e.g. Staphylococcus aureus, 
                Pseudomonas aeruginosa) and their biofilms. Tirob’s NDS is helpful for managing breakouts, redness, rashes, and healing scrapes. 
                Dermatologists love it for its potent benefits yet gentle application.</p>
            </div>

        </div>
    )
}

export default Tirobs