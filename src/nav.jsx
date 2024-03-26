import React from 'react';
import './nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <img src='https://codemaster00001.github.io/Spark-Ignited/2.png' alt='logo' />
            <input type="checkbox" id="menu-toggle" />
            <div></div>
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <ul className="menu">
                <li id='three'><label htmlFor="menu-toggle" className="menu-icon">&#9776;</label></li>
                <li id='listitem'><a href="#home">Home</a></li>
                <li id='listitem'><a href="#about">About</a></li>
                <li id='listitem'><a href="#vision">Vision</a></li>
                <li id='listitem'><a href="#comparison">Comparison</a></li>
                <li id='listitem'><a href="#videos">Videos</a></li>
                <li id='listitem'><a href="#contact">Contact</a></li>
            </ul>
            
        </nav>
    );
}
export default Nav;


{/* <img src='https://codemaster00001.github.io/Spark-Ignited/1.gif' alt='animation' /> */}







