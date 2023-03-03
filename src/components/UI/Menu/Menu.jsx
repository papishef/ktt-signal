import React  from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
// import { Divide as Hamburger } from 'hamburger-react'
import "./Menu.css"
import logoImg from "../../../images/Logo.png"

const screenWidth = window.innerWidth
const pathname = window.location.pathname
console.log(pathname);

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


    return (

        <Box sx={{marginBottom: '5rem'}}>

            <Box className="SmallMenu">
                <Box>
                    <Link to={'/'}>
                        <img src={logoImg} alt='LOGO' className="Logo" />
                    </Link>
                </Box>

                

                {/* HAMBURGER MENU BUTTON  */}
                {/* <Hamburger 
                    color="#4B4B87" 
                    rounded 
                    size={40} 
                    distance="md"
                    onToggle={toggled => {
                        if (toggled) {
                            setMenuOpen(true)
                        } else {
                            setMenuOpen(false)
                        }
                    }}
                /> */}
            </Box>

            {/* MENU BLOCK */}
            <Box className={menuOpen ? "SmallMenuBlock" : "SmallMenuNoDisplay"}>
                <Link to={'/about'} className="ListItemSmall">
                    <Box>About MP Capital</Box>
                </Link>
                <Link to={'/categories'} className="ListItemSmall">
                    <Box>Loan Categories</Box>
                </Link>
                <Link to={'/loan-calc'} className="ListItemSmall">
                    <Box>Loan Calculator</Box>
                </Link>
                <Link to={'/contact'} className="ListItemSmall">
                    <Box>Contact Us</Box>
                </Link>
                <Link to={'/faqs'} className="ListItemSmall">
                    <Box>FAQs</Box>
                </Link>
                <Link to={'/login'} className="Login">
                    <Box>User Login</Box>
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


