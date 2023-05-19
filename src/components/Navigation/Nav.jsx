import React, { useState } from 'react'
import './Nav.css'
import '../../index.css'
import { Link, NavLink } from 'react-router-dom'
import Logo1 from '../../assets/Asset1.png'
import Logo2 from '../../assets/Asset2.png'
import { FiSun } from 'react-icons/fi'
import { MdOutlineNightlight } from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'

const Nav = (props) => {
    // const [activeNav, setActiveNav] = useState()
    const [showMenu, setShowMenu] = useState(false)

function toggleMenu(){
    setShowMenu(showMenu => !showMenu);
}
function closeMenu(){
    setShowMenu(false);
}


  return (
    <>
        <nav className={`${props.theme ? 'dark': 'light'} ${showMenu ? 'mobile-menu' : 'mobile-menu-icon'}`}>
            <Link to='/' className='logo'>
            <img src={props.theme === 'dark' ? Logo2 : Logo1} alt="Logo"/>
            </Link>

            <NavLink to='/' title='Home' 
            onClick={closeMenu} 
            className={({isActive}) => isActive ? 'active' : ''}>Home
            </NavLink>

            <NavLink 
            to='/about'
            title='about' 
            onClick={closeMenu}
            className={({isActive}) => isActive ? 'active' : ''} >About
            </NavLink>

            <NavLink to='/services' title='services' 
            onClick={closeMenu} 
            className={({isActive}) => isActive ? 'active' : ''}>Services
            </NavLink>

            <NavLink to='/portfolio' title='portfolio' 
            onClick={closeMenu} 
            className={({isActive}) => isActive ? 'active' : ''}>Portfolio
            </NavLink>

            <NavLink to='/contact' title='Contact'
            onClick={closeMenu} 
            className={({isActive}) => isActive ? 'active' : ''}>Contact
            </NavLink>

            <Link to={({isActive}) => isActive ? 'active' : ''} className='theme-icon' onClick={props.handleThemeChange} > 
               {props.theme === 'dark' ? <FiSun /> : <MdOutlineNightlight />}
            </Link>

        </nav>
            <Link to='/' onClick={toggleMenu}>
                {<RxHamburgerMenu className='icon'/>}
            </Link>
    </>
  )
}

export default Nav