import React from "react";
import "./KttSignal.css"
import { MenuBar } from "../UI/Menu/Menu"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"
import highTechImg from "../../images/high-tech.png"
import mediaImg from "../../images/media.png"
import digitalWellnessImg from "../../images/digital-wellness.png"
import riskImg from "../../images/risk.png"
import fireyImg from "../../images/Rectangle 44kttsignal.png"
import teamImg from "../../images/Rectangle 59kttsignal.png"
import skyScraperImg from "../../images/Rectangle 60kttsignal.png"
import passionImg from "../../images/Rectangle 61kttsignal.png"
import smilingManImg from "../../images/Rectangle 45kttsignal.png"
import careerImg from "../../images/Rectangle 49kttsignal.png"
import contactImg from "../../images/Rectangle 61kttsignal-1.png"
import { Input } from "../UI/Input/Input";
import { BlueGradientBtn } from "../UI/Buttons/Buttons"
import { KttFooter } from "../UI/Footer/Footer";

const KttSignal = () => {

    return (
        <div>
            <MenuBar />
            <div className="top-container">
            </div>

            <div id="what-we-do" className="what-we-do">

                <h2>What We Do</h2>
                <p>Our service lines define our core specialisms. Each one backed by deep 
                industry knowledge and fresh insights into the ways business would work in tomorrow's world.
                And so, we provide complete end-to-end solutions in the following areas:</p>
  
                <Grid container>
                    <Grid item xs={12} sm={6} className="services">
                        <div className="circle">
                         
                            <Link className="welcome-links" to="/ktt-signal">
                                <img src={highTechImg} alt='High-Tech' />
                            </Link>
                        </div>
                        <h3>HIGH TECH</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} className="services">   
                        <div className="circle">
                            <Link className="welcome-links" to="/tirobs">
                                <img src={mediaImg} alt='Media Services' />
                            </Link>
                        </div>
                        <h3>MEDIA SERVICES</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} className="services">
                        <div className="circle">
                            <Link className="welcome-links" to="/ktt-signal">
                                <img src={digitalWellnessImg} alt='Digital Wellness' />
                            </Link>
                        </div>
                        <h3>DIGITAL WELLNESS</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} className="services">   
                        <div className="circle">
                            <Link className="welcome-links" to="/tirobs">
                                <img src={riskImg} alt='Risk/Security Management' />
                            </Link>
                        </div>
                        <h3>RISK/SECURITY <br />MANAGEMENT</h3>
                    </Grid>
                </Grid>
                
            </div>

            <div id="who-we-are" className="about">
                <Grid container>

                    <Grid item xs={9} className="about-orange">
                        <h2>Who We Are</h2>

                        <p>KTTSIGNAL is an Innovative High-Technology, Media, Health and lifestyle company that helps you succeed now and in tomorrow's world. 
                        KTTSIGNAL Solutions has the power to transform the way you live and work. Our bespoke technology will give you more control over your 
                        wholesomeness, business and live information, – and save you time and money. KTTSIGNAL delivers expertise and thought leadership required 
                        for successful project definition, end-to-end delivery, and management across Strategic Support and Advanced Technology life cycle areas 
                        requiring analysis, design, information assurance and cyber security, implementation, testing, deployment, and transition to operation</p>

                        <h4>OUR CULTURE</h4>
                        <p>At KTTSIGNAL, our culture is defined by our insatiable willingness to continue to prosper and initiate innovation within the high-technology 
                        sector. We're a company that strives to maintain the highest regard for corporate responsibility and strict adherence to proper business 
                        practices and standards. Our company is closely tied to the efforts of the qualified personnel who uphold our values as proud members of the 
                        KTTSIGNAL team. We respect people, encourage new ideas and diversity, and foster an environment of equal opportunity and growth. These values 
                        are the cornerstones of our philosophy and key to our ability to work successfully as a worldwide network.</p>

                        <h4>A UNIQUE ENVIRONMENT</h4>
                        <p>At KTTSIGNAL, you will experience a unique work culture, one that is fast-paced, dynamic, and innovative. KTTSIGNAL, employees are encouraged 
                        to foster new ideas and implement them, to apply their skills, intelligence, and creativity. KTTSIGNAL also offers a unique set of opportunities 
                        for recent university graduates as well as talented people still in school ready to gain valuable 'real world' experience DRIVING VALUE DELIVERY</p>

                        <h4>CORPORATE ETHICS</h4>
                        <p>Exercising the highest possible ethical and professional standards is fundamental to how KTTSIGNAL operates. We adhere to a Code of Ethics and Conduct, 
                        founded in honesty and fairness and supported by the professional integrity of each employee.</p>

                        <h4>OUR VALUES</h4>
                        <p>KTTSIGNAL core values are the guiding principles behind how all our employees act. They define how we behave as an organization, how we expect employees 
                        to behave while no one (or everyone) is watching, and how we all behave when decisions are difficult.</p>

                        <h4>THE DOMAIN EXPERT</h4>
                        <p>KTTSIGNAL help clients open their technology aperture through coupling and converging technologies and offering consultant-level insights. 
                        KTTSIGNAL philosophy emphasizes that the whole once integrated is greater than the sum of its parts.</p>

                        
                        <h4>RAISING THE LEVEL OF EXCELLENCE</h4>
                        <p>KTTSIGNAL value the application of technical, operational, and managerial excellence to provide objective solutions to critical problems of national interest. 
                        We invest in and foster top-notch infrastructure, technology, management, and people and encourage continual improvement at all levels.</p>

                        
                        <h4>PASSIONATE SUPPORT</h4>
                        <p>Passion engenders excitement from the person sitting across the table.</p>

                        
                        <h4>OUTCOME BASED TENACITY</h4>
                        <p>In service delivery and customer support, KTTSIGNAL is invested in the loyalty and commitment necessary to see initiatives to fruition. 
                        We at KTTSIGNAL are “in it for the long haul” and recognize that the successes of our customers are our successes as well.</p>

                        
                        <h4>LEADERSHIP</h4>
                        <p>KTTSIGNAL turns experiences into successes by leveraging market intimacy and business experiences to introduce successful strategy, execution, and 
                        innovation approaches into customer's environment. Our Mission-First philosophy governs our solutions set, while strong vendor partnerships strengthen 
                        our Strategic Support and Advanced Technology offerings.</p>

                        <h4>MANAGEMENT</h4>
                        <p>KTTSIGNAL is blessed with seasoned managers with extensive experience in the management and corporate governance field. They guide our company, 
                        help us live our purpose and achieve our vision to create more moments of joy while building the best company in the world.</p>

                    </Grid>

                    <Grid item xs={3} className="about-images">
                        <img src={fireyImg} alt={fireyImg} />
                        <img src={teamImg} alt={teamImg} />
                        <img src={skyScraperImg} alt={skyScraperImg} />
                        <img src={passionImg} alt={passionImg} />
                        <img src={smilingManImg} alt={smilingManImg} />
                    </Grid>
                    
                </Grid>
            </div>

            <div id="mission-vision" className="mission-vision">

                <Grid container>
                    <Grid item sm={12} md={6} className="vision">
                        <div className="vision-inner">
                            <h2>OUR VISION</h2>
                            <p>To be both ethically and operationally, the best global company of choice.</p>
                            <p>To set the highest standards in terms of product design and delivery.</p>
                            <p>To be the partner of choice for global capital and strategic partners for 
                            stakeholders looking to gain into the Technology, Media and lifestyle market 
                            through the creation of superior value, outstanding corporate governance and compliance.</p>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6} className="mission">
                        <div className="mission-inner">
                            <h2>OUR MISSION</h2>
                            <p>To utilize data, analytics, systematization and optimization to make every aspect of operations as efcient, centered and effective as possible.</p>
                            <p>To minimize wastage: of time, money and material.</p>
                            <p>To make every interaction with our patrons a transparent, positive and pleasant experience.</p>
                            <p>To eliminate bureaucracy and maximize outcomes.</p>
                        </div>
                    </Grid>
                </Grid>
                
            </div>

            <div id="career">
                <Grid container>

                    <Grid item xs={3} className="career-images">
                        <img src={careerImg} alt={careerImg} />
                    </Grid>

                    <Grid item xs={9} className="career-orange">
                        <h2>Who We Are</h2>

                        <p>KTTSIGNAL is an Innovative High-Technology, Media, Health and lifestyle company that helps you succeed now and in tomorrow's world. 
                        KTTSIGNAL Solutions has the power to transform the way you live and work. Our bespoke technology will give you more control over your 
                        wholesomeness, business and live information, – and save you time and money. KTTSIGNAL delivers expertise and thought leadership required 
                        for successful project definition, end-to-end delivery, and management across Strategic Support and Advanced Technology life cycle areas 
                        requiring analysis, design, information assurance and cyber security, implementation, testing, deployment, and transition to operation</p>
                    </Grid>

                </Grid>
            </div>

            <div id="contact" className="ktt-contact">

                <Grid container>
                    <Grid item xs={12} md={8} className="form-container">
                        <h2>WE'LL LOVE TO HEAR FROM YOU</h2>
                        <form className="form-container-inner">
                            <Grid container>
                                <Input inputType="text" inputGrid={6} label="First Name" />
                                <Input inputType="text" inputGrid={6} label="Last Name" />
                                <Input inputType="number" inputGrid={6} label="Mobile" />
                                <Input inputType="email" inputGrid={6} label="Email" />
                                <Input inputType="text" inputGrid={12} label="Address" />
                                <Input inputType="text" inputGrid={12} label="Write us..." multiline />
                            </Grid>
                            <div style={{textAlign: "right", paddingRight: "6px"}}>
                                <BlueGradientBtn title="Send" />
                            </div>
                        </form>
                        <div className="address-container">
                            <Grid container>
                                <Grid item xs={6}>
                                    <div className="address-box">
                                        <h4>HEADQUARTERS</h4>
                                        <p>KTTSIGNAL LTD. a: House 40, C Close O.A.U Quarters Maitama, 
                                        F.C.T - Abuja, Nigeria.</p>
                                        <p>Call: (234) 704-1670-000 </p>
                                        <p>Email: info@kttsignal.net</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="address-box">
                                        <h4>INTERNATIONAL OFFICES</h4>
                                        <p>KTTSIGNAL S.A. 6131, Mount Kulal Str Ext 4. Lenasia south. 
                                            Johannesburg R.S.A.</p>
                                        <p>Call: (27) 732-747-162</p>
                                        <p>Email: rsa@kttsignal.ne</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={4} className="contact-image">
                        <img src={contactImg} alt={contactImg} />
                    </Grid>
                </Grid>

            </div>

            <KttFooter />
        </div>        
    )
}

export default KttSignal;