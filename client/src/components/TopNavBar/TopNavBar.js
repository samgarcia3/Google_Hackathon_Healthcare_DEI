import React from 'react';
import './TopNavBar.scss';
import menuBack from "../../assets/svg/menu-back.svg";
import hamburgerMenu from "../../assets/svg/hamburger-menu.svg";

const Navbar = (props) => {
    return (
        <nav className='top-nav-bar'>
            <img className="top-nav-bar__img" src={props.menuIcon === "hamburger" ? hamburgerMenu : menuBack} />
            <div className="top-nav-bar__logo">
                {props.title}
            </div>
        </nav>
    )
}

export default Navbar