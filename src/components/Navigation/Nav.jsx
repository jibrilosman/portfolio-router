import React, { useState } from 'react'
import './Nav.css'
import '../../index.css'
import { Link } from 'react-router-dom'
import Logo1 from '../../assets/Asset1.png'
import Logo2 from '../../assets/Asset2.png'
import { FiSun } from 'react-icons/fi'
import { MdOutlineNightlight } from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'

const Nav = (props) => {
    const [activeNav, setActiveNav] = useState("#")
    const [showMenu, setShowMenu] = useState(false)

function toggleMenu(){
    setShowMenu(showMenu => !showMenu);
}
    


  return (
    <>
        <nav className={`${props.theme ? 'dark': 'light'} ${showMenu ? 'mobile-menu-icon' : 'mobile-menu'}`}>
            <Link to='/' className='logo'>
            <img src={props.theme === 'dark' ? Logo2 : Logo1} alt="Logo"/>
            </Link>

            <Link to='/' title='Home' 
            onClick={()=> setActiveNav("/")} 
            className={activeNav === "/" ? "active" : ""}>Home
            </Link>

            <Link to='/about'title='about' 
            onClick={()=> setActiveNav("/about")} 
            className={activeNav === "/about" ? "active" : ""}>About
            </Link>

            <Link to='/services' title='services' 
            onClick={()=> setActiveNav("/services")} 
            className={activeNav === "/services" ? "active" : ""}>Services
            </Link>

            <Link to='/projects' title='projects' 
            onClick={()=> setActiveNav("/projects")} 
            className={activeNav === "/projects" ? "active" : ""}>Projects
            </Link>

            <Link to='/contact' title='Contact'
            onClick={()=> setActiveNav("/contact")} 
            className={activeNav === "/contact" ? "active" : ""}>Contact
            </Link>

            <Link to={activeNav} className='theme-icon' onClick={props.handleThemeChange} > 
               {props.theme === 'dark' ? <FiSun /> : <MdOutlineNightlight />}
            </Link>

        </nav>
            <Link to={activeNav} onClick={toggleMenu}>
                {<RxHamburgerMenu className='icon'/>}
            </Link>
    </>
  )
}

export default Nav