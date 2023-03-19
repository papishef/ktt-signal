import React from "react"
import { MenuBarTirobs } from "../UI/Menu/Menu"
import "./Tirobs.css"
import Slider from '../UI/Slider/Slider'
import { tirobsSlideImgs } from "../UI/Slider/sliderContents"
import { Grid } from "@mui/material"
import Blob from "../UI/Blob/Blob"
import appleImg from "../../images/Rectangle44tirob.png"
import labCoatManImg from "../../images/Rectangle58tirob.png"
import teamStickyNotesImg from "../../images/Rectangle57tirob.png"

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

            <div id="who-we-are" className="about">
                <Grid container>
                    <Grid item xs={9} className="about-green">
                        <h2>WHO WE ARE</h2>

                        <p>Tirob and Tisi Limited is a leading company engaged in the formulation of the best brand of Natural 
                        Disinfectants for improved healthcare delivery service across Nigeria. We are driven by the desire to live the dream of 
                        ‘A Healthy Nation is a Wealthy Nation’ through formulation and distribution of Tirob’s Natural Disinfectant Solution that 
                        is effective in skin disinfection, wound care, food safety, deodorization and skin products additives and surfaces.</p>
                        
                        <h4>OUR COMMITMENT TO KEEPING HYGENE AT THE HEART OF OUR HOMES AND THE ENVIRONMENT</h4>
                        <p>At Tirob and Tisi we strive to maintain the highest quality standard for our products, corporate responsibility with strict 
                        adherence to proper business practices. By adhering to diligent scientific practices, we are able to stay ahead of our competitors 
                        in similar industry through consistent product quality. This success is closely tied to the efforts of our qualified personnel who uphold 
                        our values as proud members of the production team.</p>

                        <p>Our core values are the cornerstones of our philosophy of service delivery and improvement at every point. We achieve this through 
                        respect for people and their diversity, encouraging new ideas, and trying to foster an environment of equal opportunity and growth. 
                        Our employees are encouraged to foster new ideas and implement them by applying their scientific knowledge, intelligence, skills and 
                        creativity in constantly improving on what we have.</p>

                        <h4>CORPORATE ETHICS</h4>
                        <p>At Tirob and Tisi we adhere to a code of ethics founded on honesty and commitment that is supported by the professional integrity of each employee.</p>

                        <h4>MANAGEMENT</h4>
                        <p>At the heart of our management team is an experienced Analytical Chemist; Mr. Lawrence Ganchok who is a seasoned managers with extensive experience 
                        in the product quality control with few others who drive our production, packaging and marketing processes.</p>
                        
                    </Grid>

                    <Grid item xs={3} className="tirobs-abt-images">
                        <img src={appleImg} alt={appleImg} />
                        <img src={teamStickyNotesImg} alt={teamStickyNotesImg} />
                        <img src={labCoatManImg} alt={labCoatManImg} />
                    </Grid>
                </Grid>
            </div>

            <div className="tirobs-mission-vision">

                <div className="tirobs-vision">
                    <div className="inner">
                        <h2>OUR VISION</h2>
                        <p>· To be one of the best healthcare provider of choice</p>
                        <p>· To set the highest standards in personal healthcare and surface disinfection</p>
                    </div>
                </div>

                <div className="tirobs-mission">
                    <div className="inner">
                        <h2>OUR MISSION</h2>
                        <p>· To be an active participant in healthcare service provision</p>
                        <p>· To try to reduce to the barest minimum occurrence of common viral and bacterial diseases by effective deployment and use of Tirob’s NDS</p>
                        <p>· To liaise with NGOs and accredited bodies involved in healthcare service delivery to ensure a greater number of Nigerians have access to basic sanitary services</p>
                        <p>· To eliminate bureaucracy and maximize outcomes in meeting health challenges</p>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tirobs