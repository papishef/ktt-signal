import React from "react"
import { MenuBarTirobs } from "../UI/Menu/Menu"
import "./Tirobs.css"
import Slider from '../UI/Slider/Slider'
import { tirobsSlideImgs } from "../UI/Slider/sliderContents"
import { Grid } from "@mui/material"
import Blob from "../UI/Blob/Blob"

const blobNotes = [
    {
        title: "Tirob's NDS removes odour",
        text: "Many studies have confirmed the sterilizing function of Tirob’s NDS and demonstrated its effectiveness in controlling odour. In deodorization, Tirob’s NDS is proven to remove up to 99% of foul odours including garbage, rotten meat, toilet, stool, and urine odours."
    },
    {
        title: "Tirob’s NDS helps to reduce wrinkles",
        text: "Studies has shown that this product can reduce wrinkles by up to 50%. In addition, it also helps get rid of acne and dry patches faster than other products on the market"
    },
    {
        title: "Tirob’s NDS can be sprayed in the eyes",
        text: "In eye care, Tirob’s NDS can provide effective relief from dry eyes and styes. It can be used on patients that have red, itchy eyelids associated with a condition called blepharitis and meibomian gland dysfunction. The skin around our eyes including the eyelids is home to a diverse microbiome (bacteria, fungi, and viruses)"
    }, 
    {
        title: "Tirob’s NDS can be used on the face",
        text: "Most are marketed for use on your face, with a focus on treating acne and eczema. It can be found in other forms including creams and serums."
    },
    {
        title: "Tirob’s NDS has antifungal properties",
        text: "0.01% Tirob’s NDS is rapidly fungicidal, reducing the number of viable yeast cells or mold conidia by at least 99.99% within 60 seconds"
    },
    {
        title: "Tirob’s NDS can be used on wounds",
        text: "Tirob’s NDS has emerged as safe and viable wound-cleansing agents and infection treatment adjunct therapies."
    }
]


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


                <Grid container>
                    {blobNotes.map((blobNote, index) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} className='circle-container-tirobs' key={index}>
                                <Blob link='' altText='' title='' >
                                    <h5>{blobNote.title}</h5>
                                    <p>{blobNote.text}</p>
                                </Blob>
                            </Grid>
                        )
                    })}
                    

                    <Grid item xs={12} className='circle-container-large-tirobs'>
                        <Blob link='' altText='' title='' >
                            <h5>Tirob’s NDS does not harm clothes</h5>
                            <p>Tirob’s NDS is produced at a near-neutral pH, so it won't bleach out furniture or clothes or damage surfaces. This means sanitizing products made using Tirob’s NDS are safe and effective.</p>
                            <ul>
                                <li>Tirob’s Natural Disinfectant Solution is marketed for use in your kitchen, laundry, on your face, with a focus on treating acne and eczema. Including creams and serums. Our Tirobs Natural Disinfectant Solution can be incorporated into a daily skin maintenance routine to remove bacteria.</li>
                                <li>Unlike Sodium hypochlorite that is used to irrigate root canals in dentistry, and can cause many adverse reactions, such as damage to the skin, oral mucosa, and eyes, damage to clothing, surgical emphysema, allergic reactions, and injection beyond the foramen, scientific studies show that our product can safely do these without any adverse effect</li>
                            </ul>
                        </Blob>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Tirobs