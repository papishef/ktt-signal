import React, { useState }  from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'
import "./Menu.css"
import logoImg from "../../../images/Logo.png"

const screenWidth = window.innerWidth
const pathname = window.location.pathname

export const ParentMenu = () => {
    return (
        <div className='ParentMenu'>        
            <Link to='/'><img className='ParentLogo' src={logoImg} alt={logoImg} /></Link>
            <Link className='meet-us' to="/team">Meet us</Link>
        </div>
    )
}

/* FOR LARGER SCREENS */
const MenuBarLarge = () => {

    return (

        <nav className="BigMenu">
            <div>
                <Link to={'/'}>
                    <img src={logoImg} alt='KTT SIGNAL' className="Logo" />
                </Link>
            </div>

            <div>
                <div className='MenuItems'>
                    <Link to={'/ktt-signal'} className={pathname === "/ktt-signal" ? "ListItem +  active" : "ListItem"}>
                        <div>Home</div>
                    </Link>
                    <Link to={'/ktt-signal/what-we-do'} className={pathname === "/ktt-signal/what-we-do" ? "ListItem +  active" : "ListItem"}>
                        <div>What we do</div>
                    </Link>
                    <Link to={'/ktt-signal/about'} className={pathname === "/ktt-signal/about" ? "ListItem +  active" : "ListItem"}>
                        <div>Who we are</div>
                    </Link>
                    <Link to={'/ktt-signal/contact'} className={pathname === "/ktt-signal/contact" ? "ListItem +  active" : "ListItem"}>
                        <div>Contact us</div>
                    </Link>
                </div>
            </div>
        
        </nav>

    )
}

/* FOR SMALLER SCREENS */
const MenuBarSmall = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <Box >

            <div className='SmallMenuContainer'>
                <Box className="SmallMenu">
                    <div>
                        <Link to={'/'}>
                            <img src={logoImg} alt='LOGO' className="Logo" />
                        </Link>
                    </div>

                    

                    {/* HAMBURGER MENU BUTTON  */}

                    <div className='HamburgerContainer'>
                        <Hamburger 
                            color="#142251" 
                            rounded 
                            size={40} 
                            distance="md"
                            toggled={menuOpen} 
                            toggle={setMenuOpen}
                        />
                    </div>

                </Box>
            </div>

            {/* MENU BLOCK */}
            <Box className={menuOpen ? "SmallMenuBlock" : "SmallMenuNoDisplay"}>
                <Link to={'/'} className="ListItemSmall">
                    <div className='ListItemSmallInner'>Parent Page</div>
                </Link>
                <Link to={'#what-we-do'} className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>What we do</div>
                </Link>
                <Link to={'#who-we-are'} className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>Who we are</div>
                </Link>
                <Link to={'#contact'} className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>Contact Us</div>
                </Link>
                
            </Box>

        </Box>

    )
}

export const MenuBar = () => {
    if (screenWidth > 900) {
        return <MenuBarLarge />
    }
    return <MenuBarSmall />
}


