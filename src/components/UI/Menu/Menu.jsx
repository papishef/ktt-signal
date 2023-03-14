import React, { useState }  from 'react';
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { Sling as Hamburger } from 'hamburger-react'
import "./Menu.css"
import logoImg from "../../../images/Logo.png"
import tirobsLogo from "../../../images/tirobs logo.png"

const screenWidth = window.innerWidth

export const ParentMenu = () => {
    return (
        <div className='ParentMenu'>        
            <Link href='/'><img className='ParentLogo' src={logoImg} alt={logoImg} /></Link>
            <Link className='meet-us' href="/team">Meet us</Link>
        </div>
    )
}

/* FOR LARGER SCREENS KTT SIGNAL */
const MenuBarLarge = () => {

    return (

        <nav className="BigMenu">
            <div>
                <Link href='/'>
                    <img src={logoImg} alt='KTT SIGNAL' className="Logo" />
                </Link>
            </div>

            <div>
                <div className='MenuItems'>
                    <Link href='/ktt-signal' className="ListItem">
                        <div>Home</div>
                    </Link>
                    <Link href='#what-we-do' className="ListItem">
                        <div>What we do</div>
                    </Link>
                    <Link href='#who-we-are' className="ListItem">
                        <div>Who we are</div>
                    </Link>
                    <Link href='#contact' className="ListItem">
                        <div>Contact us</div>
                    </Link>
                </div>
            </div>
        
        </nav>

    )
}

/* FOR SMALLER SCREENS KTT SIGNAL */
const MenuBarSmall = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <Box >

            <div className='SmallMenuContainer'>
                <Box className="SmallMenu">
                    <div>
                        <Link href='/'>
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
                <Link href='/' className="ListItemSmall">
                    <div className='ListItemSmallInner'>Parent Page</div>
                </Link>
                <Link href='#what-we-do' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>What we do</div>
                </Link>
                <Link href='#who-we-are' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>Who we are</div>
                </Link>
                <Link href='#contact' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInner'>Contact Us</div>
                </Link>
                
            </Box>

        </Box>

    )
}



/* FOR LARGER SCREENS TIROBS */
const MenuBarLargeTirobs = () => {

    return (

        <nav className="BigMenuTirobs">
            <div>
                <Link href='/'>
                    <img src={tirobsLogo} alt='Tirobs' className="Logo" />
                </Link>
            </div>

            <div>
                <div className='MenuItems'>
                    <Link href='/tirobs' className="ListItemTirobs">
                        <div>Home</div>
                    </Link>
                    <Link href='#our-product' className="ListItemTirobs">
                        <div>Our Product</div>
                    </Link>
                    <Link href='#who-we-are' className="ListItemTirobs">
                        <div>Who we are</div>
                    </Link>
                    <Link href='#contact' className="ListItemTirobs">
                        <div>Contact us</div>
                    </Link>
                </div>
            </div>
        
        </nav>

    )
}


/* FOR SMALLER SCREENS TIROBS */
const MenuBarSmallTirobs = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <Box >

            <div className='SmallMenuContainer'>
                <Box className="SmallMenu">
                    <div>
                        <Link href='/'>
                            <img src={tirobsLogo} alt='LOGO' className="Logo" />
                        </Link>
                    </div>

                    

                    {/* HAMBURGER MENU BUTTON  */}

                    <div className='HamburgerContainer'>
                        <Hamburger 
                            color="#014620" 
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
            <Box className={menuOpen ? "SmallMenuBlockTirobs" : "SmallMenuNoDisplay"}>
                <Link href='/' className="ListItemSmall">
                    <div className='ListItemSmallInnerTirobs'>Parent Page</div>
                </Link>
                <Link href='#our-product' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInnerTirobs'>Our Product</div>
                </Link>
                <Link href='#who-we-are' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInnerTirobs'>Who we are</div>
                </Link>
                <Link href='#contact' className="ListItemSmall" onClick={() => setMenuOpen(false)}>
                    <div className='ListItemSmallInnerTirobs'>Contact Us</div>
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

export const MenuBarTirobs = () => {
    if (screenWidth > 900) {
        return <MenuBarLargeTirobs />
    }
    return <MenuBarSmallTirobs />
}
